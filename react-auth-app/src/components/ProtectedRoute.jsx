import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const { user, loading } = useContext(AuthContext);

  // 1. ESPERAR: Si el contexto está verificando la sesión, mostramos un spinner animado
  if (loading) {
    return (
      <>
        <style>{`
          .loading-screen {
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(100vh - 70px);
            background-color: #f3f4f6;
          }
          .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #e5e7eb;
            border-top: 5px solid #4338ca;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <div className="loading-screen">
          <div className="spinner"></div>
        </div>
      </>
    );
  }

  // 2. EXPULSAR: Si terminó de cargar y definitivamente no hay usuario, al login
  if (!user) return <Navigate to="/login" />;

  // 3. DENEGAR: Si hay usuario, se requiere un rol, y no lo tiene
  if (role && !user.roles.includes(role)) {
    return (
      <>
        <style>{`
          .forbidden-screen {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: calc(100vh - 70px);
            background-color: #f3f4f6;
            font-family: 'Inter', sans-serif;
            text-align: center;
            padding: 20px;
          }
          .forbidden-card {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            max-width: 400px;
          }
          .forbidden-code {
            font-size: 4rem;
            margin: 0;
            color: #ef4444;
            font-weight: 900;
            line-height: 1;
          }
          .forbidden-title {
            color: #1f2937;
            font-size: 1.5rem;
            margin: 10px 0;
          }
          .forbidden-text {
            color: #6b7280;
            margin-bottom: 20px;
          }
          .btn-back {
            display: inline-block;
            background: #1f2937;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.2s;
          }
          .btn-back:hover {
            background: #374151;
          }
        `}</style>
        <div className="forbidden-screen">
          <div className="forbidden-card">
            <h1 className="forbidden-code">403</h1>
            <h2 className="forbidden-title">Acceso Denegado</h2>
            <p className="forbidden-text">No tienes los permisos necesarios para acceder a esta sección del sistema.</p>
          </div>
        </div>
      </>
    );
  }

  // 4. PERMITIR: Si todo está en orden, mostramos el panel solicitado
  return children;
}