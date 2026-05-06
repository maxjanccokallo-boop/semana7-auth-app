import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UserBoard() {
  const { token } = useContext(AuthContext);

  const [profile, setProfile] = useState(null);
  const [activity, setActivity] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [stats, setStats] = useState({
    sesiones: 0,
    acciones: 0,
    alertas: 0
  });

  useEffect(() => {
    fetchProfile();
    fetchActivity();
    fetchSessions();
  }, []);

  const fetchProfile = async () => {
    const res = await fetch("/api/user/me", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setProfile(data);
  };

  const fetchActivity = async () => {
    const res = await fetch("/api/user/activity", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();

    setActivity(data);

    setStats({
      sesiones: data.filter(a => a.type === "LOGIN").length,
      acciones: data.length,
      alertas: data.filter(a => a.type === "ALERT").length
    });
  };

  const fetchSessions = async () => {
    const res = await fetch("/api/user/sessions", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setSessions(data);
  };

  const handleChangePassword = async () => {
    const pass = prompt("Nueva contraseña:");
    if (!pass) return;

    await fetch("/api/user/change-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ password: pass })
    });

    alert("Contraseña actualizada correctamente");
  };

  const handleCloseSessions = async () => {
    await fetch("/api/user/logout-all", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    });

    alert("Todas las sesiones han sido cerradas");
    fetchSessions();
  };

  return (
    <>
      <style>{`
        .container {
          padding: 30px;
          min-height: calc(100vh - 70px);
          background: linear-gradient(135deg, #020617, #0f172a);
          color: white;
          font-family: 'Inter', sans-serif;
        }

        .header {
          margin-bottom: 25px;
        }

        .header h1 {
          font-size: 2rem;
        }

        .header p {
          color: #94a3b8;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .card {
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .title {
          font-weight: bold;
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .desc {
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 10px;
        }

        .btn {
          margin-top: 10px;
          padding: 8px 12px;
          border: none;
          border-radius: 8px;
          background: #6366f1;
          color: white;
          cursor: pointer;
        }

        .badge {
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.75rem;
          background: #22c55e;
        }

        .warning {
          background: #f59e0b;
        }

        .danger {
          background: #ef4444;
        }

        .log, .session {
          font-size: 0.8rem;
          color: #94a3b8;
          margin-bottom: 6px;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <h1>🔐 Panel de Seguridad del Usuario</h1>
          <p>
            Este panel te permite monitorear tu actividad, proteger tu cuenta
            y revisar accesos recientes dentro del sistema.
          </p>
        </div>

        <div className="grid">

          {/* PERFIL */}
          <div className="card">
            <div className="title">👤 Información del Usuario</div>
            <div className="desc">
              Aquí puedes visualizar los datos principales asociados a tu cuenta.
            </div>

            {profile && (
              <>
                <p><b>Usuario:</b> {profile.username}</p>
                <p><b>Email:</b> {profile.email}</p>
                <p><b>Rol:</b> {profile.roles?.join(", ")}</p>
                <p><b>Registro:</b> {new Date(profile.createdAt).toLocaleDateString()}</p>
              </>
            )}
          </div>

          {/* SEGURIDAD */}
          <div className="card">
            <div className="title">🔐 Configuración de Seguridad</div>
            <div className="desc">
              Administra las opciones críticas para proteger tu cuenta contra accesos no autorizados.
            </div>

            <p>
              Nivel de seguridad:
              <span className="badge"> ALTO </span>
            </p>

            <p>
              Autenticación 2FA:
              <span className={`badge ${profile?.twoFactor ? "" : "warning"}`}>
                {profile?.twoFactor ? "ACTIVA" : "INACTIVA"}
              </span>
            </p>

            <button className="btn" onClick={handleChangePassword}>
              Cambiar contraseña
            </button>

            <button className="btn" onClick={handleCloseSessions}>
              Cerrar todas las sesiones
            </button>
          </div>

          {/* ESTADÍSTICAS */}
          <div className="card">
            <div className="title">📊 Resumen de Actividad</div>
            <div className="desc">
              Métricas generadas a partir de tu uso reciente del sistema.
            </div>

            <p>Sesiones iniciadas: {stats.sesiones}</p>
            <p>Acciones realizadas: {stats.acciones}</p>
            <p>Eventos de alerta: {stats.alertas}</p>
          </div>

          {/* SESIONES */}
          <div className="card">
            <div className="title">💻 Dispositivos Conectados</div>
            <div className="desc">
              Lista de sesiones activas detectadas en diferentes dispositivos o ubicaciones.
            </div>

            {sessions.length === 0 ? (
              <p className="log">No hay sesiones activas registradas.</p>
            ) : (
              sessions.map((s, i) => (
                <div key={i} className="session">
                  {s.device} | {s.ip} <br />
                  {new Date(s.date).toLocaleString()}
                </div>
              ))
            )}
          </div>

          {/* ACTIVIDAD */}
          <div className="card">
            <div className="title">🕒 Historial de Actividad</div>
            <div className="desc">
              Registro de eventos recientes dentro de tu cuenta.
            </div>

            {activity.slice(0, 6).map((a, i) => (
              <div key={i} className="log">
                {a.type} - {new Date(a.date).toLocaleString()}
              </div>
            ))}
          </div>

          {/* ALERTAS */}
          <div className="card">
            <div className="title">🚨 Estado de Seguridad</div>
            <div className="desc">
              Evaluación automática basada en comportamientos sospechosos detectados.
            </div>

            {stats.alertas > 0 ? (
              <p className="danger">
                ⚠️ Se detectaron {stats.alertas} eventos sospechosos.
              </p>
            ) : (
              <p className="badge">Cuenta segura</p>
            )}
          </div>

        </div>
      </div>
    </>
  );
}