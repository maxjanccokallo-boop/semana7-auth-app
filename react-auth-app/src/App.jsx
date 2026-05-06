import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* =========================
   ADMIN
========================= */
import AdminBoard from "./pages/AdminBoard";

import Configuracion from "./pages/admin/Configuracion";
import Logs from "./pages/admin/Logs";
import ReportesAdmin from "./pages/admin/Reportes";
import Seguridad from "./pages/admin/Seguridad";
import Usuarios from "./pages/admin/Usuarios";

/* =========================
   MOD
========================= */
import ModBoard from "./pages/ModBoard";

import Contenido from "./pages/mod/Contenido";
import Reportes from "./pages/mod/Reportes";

/* =========================
   USER
========================= */
import UserBoard from "./pages/UserBoard";

/* =========================
   PROTECTED
========================= */
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Routes>

          {/* =========================================
              RUTAS PUBLICAS
          ========================================= */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* =========================================
              ADMIN
          ========================================= */}

          {/* PANEL PRINCIPAL */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="ROLE_ADMIN">
                <AdminBoard />
              </ProtectedRoute>
            }
          />

          {/* CONFIGURACION */}
          <Route
            path="/admin/configuracion"
            element={
              <ProtectedRoute role="ROLE_ADMIN">
                <Configuracion />
              </ProtectedRoute>
            }
          />

          {/* LOGS */}
          <Route
            path="/admin/logs"
            element={
              <ProtectedRoute role="ROLE_ADMIN">
                <Logs />
              </ProtectedRoute>
            }
          />

          {/* REPORTES */}
          <Route
            path="/admin/reportes"
            element={
              <ProtectedRoute role="ROLE_ADMIN">
                <ReportesAdmin />
              </ProtectedRoute>
            }
          />

          {/* SEGURIDAD */}
          <Route
            path="/admin/seguridad"
            element={
              <ProtectedRoute role="ROLE_ADMIN">
                <Seguridad />
              </ProtectedRoute>
            }
          />

          {/* USUARIOS */}
          <Route
            path="/admin/usuarios"
            element={
              <ProtectedRoute role="ROLE_ADMIN">
                <Usuarios />
              </ProtectedRoute>
            }
          />

          {/* =========================================
              MODERADOR
          ========================================= */}

          {/* PANEL MOD */}
          <Route
            path="/mod"
            element={
              <ProtectedRoute role="ROLE_MODERATOR">
                <ModBoard />
              </ProtectedRoute>
            }
          />

          {/* CONTENIDO */}
          <Route
            path="/mod/contenido"
            element={
              <ProtectedRoute role="ROLE_MODERATOR">
                <Contenido />
              </ProtectedRoute>
            }
          />

          {/* REPORTES MOD */}
          <Route
            path="/mod/reportes"
            element={
              <ProtectedRoute role="ROLE_MODERATOR">
                <Reportes />
              </ProtectedRoute>
            }
          />

          {/* =========================================
              USER
          ========================================= */}

          <Route
            path="/user"
            element={
              <ProtectedRoute role="ROLE_USER">
                <UserBoard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </main>
    </>
  );
}

export default App;