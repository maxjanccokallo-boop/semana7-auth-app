// ===============================
// IMPORTACIONES
// ===============================
import express from "express";
import cors from "cors";

import db from "./app/models/index.js";

import authRoutes from "./app/routes/auth.routes.js";
import userRoutes from "./app/routes/user.routes.js";

// ===============================
// APP
// ===============================
const app = express();

// ===============================
// CORS
// ===============================
app.use(
  cors({
    origin: "https://semana7-auth-app.onrender.com",
    credentials: true,
  })
);

// ===============================
// MIDDLEWARES
// ===============================
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ===============================
// RUTA PRINCIPAL
// ===============================
app.get("/", (req, res) => {
  res.json({
    message: "Backend JWT funcionando correctamente 🚀",
  });
});

// ===============================
// RUTAS API
// ===============================
app.use("/api/auth", authRoutes);

app.use("/api/test", userRoutes);

// ===============================
// PUERTO
// ===============================
const PORT = process.env.PORT || 10000;

// ===============================
// BASE DE DATOS + SERVER
// ===============================
db.sequelize
  .sync({ alter: false })
  .then(() => {
    console.log("Database synchronized");

    app.listen(PORT, () => {
      console.log(
        `Server is running on port ${PORT}.`
      );
    });
  })
  .catch((err) => {
    console.error(
      "Error al conectar base de datos:",
      err
    );
  });