// Importaciones
import db from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import authConfig from "../config/auth.config.js";

const { user: User, role: Role, refreshToken: RefreshToken } = db;

// =====================
// SIGNUP
// =====================
export const signup = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    if (roles && roles.length > 0) {
      const foundRoles = await Role.findAll({
        where: { name: roles },
      });
      await user.setRoles(foundRoles);
    } else {
      const defaultRole = await Role.findOne({
        where: { name: "user" },
      });
      await user.setRoles([defaultRole]);
    }

    res.status(201).json({ message: "¡Usuario registrado exitosamente!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// =====================
// SIGNIN
// =====================
export const signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: { username },
      include: [{ model: Role, as: "roles" }],
    });

    if (!user) {
      return res.status(404).json({ message: "User Not found." });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    // ACCESS TOKEN
    const accessToken = jwt.sign(
      { id: user.id },
      authConfig.secret,
      { expiresIn: 60 } // 1 min (para probar refresh)
    );

    // REFRESH TOKEN (GUARDADO EN BD)
    const refreshToken = await RefreshToken.createToken(user);

    const authorities = user.roles.map(
      (role) => `ROLE_${role.name.toUpperCase()}`
    );

    res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken,
      refreshToken: refreshToken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// =====================
// REFRESH TOKEN
// =====================
export const refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (!requestToken) {
    return res.status(403).json({ message: "Refresh Token requerido" });
  }

  try {
    let token = await RefreshToken.findOne({
      where: { token: requestToken },
    });

    if (!token) {
      return res.status(403).json({ message: "Token no válido" });
    }

    if (token.expiryDate.getTime() < new Date().getTime()) {
      await RefreshToken.destroy({ where: { id: token.id } });

      return res.status(403).json({
        message: "Refresh token expiró",
      });
    }

    const user = await token.getUser();

    const newAccessToken = jwt.sign(
      { id: user.id },
      authConfig.secret,
      { expiresIn: 60 }
    );

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: token.token,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// =====================
// LOGOUT
// =====================
export const signout = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    await RefreshToken.destroy({
      where: { token: refreshToken },
    });

    res.status(200).json({
      message: "Sesión cerrada correctamente",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};