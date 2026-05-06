import { createContext, useState, useEffect } from "react";
import API, {
  setAccessToken,
  clearAccessToken
} from "../api/axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true); // Controla si estamos verificando la sesión

  // 1. RECUPERAR SESIÓN AL RECARGAR LA PÁGINA
  useEffect(() => {
    const initializeAuth = async () => {
      const storedRefreshToken = localStorage.getItem("refreshToken");
      const storedUser = localStorage.getItem("user"); // Recuperamos datos del usuario

      if (storedRefreshToken && storedUser) {
        try {
          // Intentamos obtener un nuevo token de acceso en silencio
          const res = await API.post("/auth/refreshtoken", {
            refreshToken: storedRefreshToken,
          });
          
          setAccessToken(res.data.accessToken);
          setUser(JSON.parse(storedUser)); // Restauramos el usuario en pantalla
        } catch (error) {
          console.error("El refresh token expiró o es inválido", error);
          // Si falla, limpiamos todo para evitar sesiones fantasma
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("user");
        }
      }
      setLoading(false); // Terminamos de verificar
    };

    initializeAuth();
  }, []);

  // Guardar token en memoria
  useEffect(() => {
    window.accessToken = accessToken;
  }, [accessToken]);

  // LOGIN
  const login = async (data) => {
    const res = await API.post("/auth/signin", data);

    setUser(res.data);
    setAccessToken(res.data.accessToken);

    // Guardamos el token y la info del usuario (roles, username) para sobrevivir al F5
    localStorage.setItem("refreshToken", res.data.refreshToken);
    localStorage.setItem("user", JSON.stringify({
      id: res.data.id,
      username: res.data.username,
      email: res.data.email,
      roles: res.data.roles
    }));

    return res.data;
  };

  // REGISTER
  const register = async (data) => {
    await API.post("/auth/signup", data);
  };

  // REFRESH TOKEN (Manual)
  const refreshToken = async () => {
    const storedRefreshToken = localStorage.getItem("refreshToken");
    if (!storedRefreshToken) return;

    try {
      const res = await API.post("/auth/refreshtoken", {
        refreshToken: storedRefreshToken,
      });
      setAccessToken(res.data.accessToken);
    } catch (error) {
      logout(); // Si falla el refresco manual, forzamos salida
    }
  };

  // LOGOUT
  const logout = async () => {
    try {
      const storedRefreshToken = localStorage.getItem("refreshToken");
      if (storedRefreshToken) {
        await API.post("/auth/signout", { refreshToken: storedRefreshToken });
      }
    } catch (error) {
      console.error("Error al notificar al servidor sobre el logout", error);
    } finally {
      // SIEMPRE limpiamos el frontend, incluso si el backend da error
      setUser(null);
      setAccessToken(null);
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, refreshToken, loading }}
    >
      {/* Si está cargando, mostramos pantalla en blanco o un spinner, de lo contrario la app */}
      {!loading && children}
    </AuthContext.Provider>
  );
};