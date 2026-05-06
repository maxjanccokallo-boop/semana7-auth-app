import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logs() {
  const navigate = useNavigate();

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs([
      {
        id: 1,
        type: "ERROR",
        title: "Intento fallido de acceso",
        user: "admin_root",
        date: "2026-05-05 14:32",
        ip: "192.168.1.10",
        description:
          "Se detectó un intento fallido de autenticación desde una IP desconocida."
      },
      {
        id: 2,
        type: "SUCCESS",
        title: "Inicio de sesión exitoso",
        user: "max_admin",
        date: "2026-05-05 13:18",
        ip: "192.168.1.25",
        description:
          "El administrador accedió correctamente al panel principal."
      },
      {
        id: 3,
        type: "WARNING",
        title: "Uso elevado de CPU",
        user: "SYSTEM",
        date: "2026-05-05 12:50",
        ip: "SERVIDOR",
        description:
          "El servidor alcanzó un uso del 91% durante los últimos 3 minutos."
      },
      {
        id: 4,
        type: "SECURITY",
        title: "Actividad sospechosa",
        user: "unknown_user",
        date: "2026-05-05 11:47",
        ip: "201.25.84.12",
        description:
          "Se detectaron múltiples peticiones consecutivas desde una misma dirección IP."
      }
    ]);
  }, []);

  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          font-family:'Inter',sans-serif;
        }

        .container{
          min-height:calc(100vh - 70px);
          padding:40px;
          background:
            radial-gradient(circle at top left, rgba(239,68,68,0.12), transparent 25%),
            radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 25%),
            linear-gradient(135deg,#020617,#111827);
          color:white;
        }

        /* HEADER */
        .header{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
          flex-wrap:wrap;
          margin-bottom:35px;
        }

        .header-left h1{
          margin:0;
          font-size:2.7rem;
          font-weight:800;
          background:linear-gradient(90deg,#ef4444,#f97316);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .header-left p{
          margin-top:12px;
          color:#94a3b8;
          line-height:1.7;
          max-width:850px;
        }

        .badge{
          padding:12px 18px;
          border-radius:14px;
          background:rgba(239,68,68,0.12);
          border:1px solid rgba(239,68,68,0.25);
          color:#fca5a5;
          font-weight:700;
          backdrop-filter:blur(10px);
        }

        /* STATS */
        .stats-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:20px;
          margin-bottom:30px;
        }

        .stat-card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:22px;
          padding:24px;
          backdrop-filter:blur(12px);
          transition:0.3s;
        }

        .stat-card:hover{
          transform:translateY(-6px);
          box-shadow:0 15px 35px rgba(0,0,0,0.35);
        }

        .stat-icon{
          font-size:1.8rem;
        }

        .stat-number{
          margin-top:15px;
          font-size:2rem;
          font-weight:800;
        }

        .stat-label{
          margin-top:5px;
          color:#94a3b8;
          font-size:0.9rem;
        }

        /* LOG GRID */
        .logs-grid{
          display:grid;
          gap:25px;
        }

        /* CARD */
        .log-card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          overflow:hidden;
          backdrop-filter:blur(12px);
          transition:0.3s;
        }

        .log-card:hover{
          transform:translateY(-4px);
          box-shadow:0 15px 35px rgba(0,0,0,0.35);
        }

        .log-header{
          padding:25px;
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:20px;
          flex-wrap:wrap;
          border-bottom:1px solid rgba(255,255,255,0.06);
        }

        .log-title{
          font-size:1.2rem;
          font-weight:800;
        }

        .log-user{
          margin-top:8px;
          color:#94a3b8;
          font-size:0.9rem;
        }

        .log-content{
          padding:25px;
        }

        .log-description{
          color:#cbd5e1;
          line-height:1.7;
        }

        .log-details{
          margin-top:20px;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:15px;
        }

        .detail-box{
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.06);
          border-radius:14px;
          padding:15px;
        }

        .detail-title{
          color:#94a3b8;
          font-size:0.8rem;
        }

        .detail-value{
          margin-top:8px;
          font-weight:700;
        }

        /* BADGES */
        .badge-type{
          padding:8px 14px;
          border-radius:999px;
          font-size:0.75rem;
          font-weight:700;
        }

        .error{
          background:rgba(239,68,68,0.15);
          color:#f87171;
        }

        .success{
          background:rgba(34,197,94,0.15);
          color:#4ade80;
        }

        .warning{
          background:rgba(245,158,11,0.15);
          color:#fbbf24;
        }

        .security{
          background:rgba(59,130,246,0.15);
          color:#60a5fa;
        }

        /* BUTTONS */
        .buttons{
          margin-top:35px;
          display:grid;
          gap:15px;
        }

        .btn{
          width:100%;
          padding:14px;
          border:none;
          border-radius:14px;
          font-weight:700;
          cursor:pointer;
          transition:0.3s;
          color:white;
        }

        .btn:hover{
          transform:scale(1.02);
        }

        .download-btn{
          background:linear-gradient(135deg,#22c55e,#16a34a);
        }

        .clear-btn{
          background:linear-gradient(135deg,#ef4444,#dc2626);
        }

        .back-btn{
          background:linear-gradient(135deg,#475569,#334155);
        }

        /* ALERT */
        .alert-box{
          margin-top:35px;
          background:rgba(239,68,68,0.12);
          border:1px solid rgba(239,68,68,0.2);
          border-radius:20px;
          padding:25px;
        }

        .alert-title{
          font-size:1.1rem;
          font-weight:700;
          color:#f87171;
        }

        .alert-text{
          margin-top:12px;
          color:#fecaca;
          line-height:1.7;
        }

        /* RESPONSIVE */
        @media(max-width:768px){

          .container{
            padding:20px;
          }

          .header-left h1{
            font-size:2rem;
          }

          .log-header{
            flex-direction:column;
            align-items:flex-start;
          }

        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <div className="header">

          <div className="header-left">
            <h1>📄 Logs del Sistema</h1>

            <p>
              Supervisa eventos críticos, errores del servidor, accesos
              administrativos y actividades sospechosas registradas en tiempo real.
            </p>
          </div>

          <div className="badge">
            SYSTEM LOGS
          </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">📄</div>
            <div className="stat-number">824</div>
            <div className="stat-label">
              Eventos registrados
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🚨</div>
            <div className="stat-number">9</div>
            <div className="stat-label">
              Alertas críticas
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🛡</div>
            <div className="stat-number">14</div>
            <div className="stat-label">
              Eventos de seguridad
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⚠️</div>
            <div className="stat-number">21</div>
            <div className="stat-label">
              Advertencias detectadas
            </div>
          </div>

        </div>

        {/* LOGS */}
        <div className="logs-grid">

          {logs.map((log) => (
            <div className="log-card" key={log.id}>

              <div className="log-header">

                <div>
                  <div className="log-title">
                    {log.title}
                  </div>

                  <div className="log-user">
                    Usuario: {log.user}
                  </div>
                </div>

                <div
                  className={`badge-type ${
                    log.type === "ERROR"
                      ? "error"
                      : log.type === "SUCCESS"
                      ? "success"
                      : log.type === "WARNING"
                      ? "warning"
                      : "security"
                  }`}
                >
                  {log.type}
                </div>

              </div>

              <div className="log-content">

                <div className="log-description">
                  {log.description}
                </div>

                <div className="log-details">

                  <div className="detail-box">
                    <div className="detail-title">
                      Dirección IP
                    </div>

                    <div className="detail-value">
                      {log.ip}
                    </div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-title">
                      Fecha del evento
                    </div>

                    <div className="detail-value">
                      {log.date}
                    </div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-title">
                      Estado del sistema
                    </div>

                    <div className="detail-value">
                      Registrado correctamente
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* BUTTONS */}
        <div className="buttons">

          <button className="btn download-btn">
            ⬇ Descargar Logs
          </button>

          <button className="btn clear-btn">
            🗑 Limpiar Registros
          </button>

          <button
            className="btn back-btn"
            onClick={() => navigate("/admin")}
          >
            ⬅ Volver al Panel Admin
          </button>

        </div>

        {/* ALERT */}
        <div className="alert-box">

          <div className="alert-title">
            ⚠️ Monitoreo Activo
          </div>

          <div className="alert-text">
            El sistema continúa registrando actividad en tiempo real.
            Se recomienda revisar eventos críticos y validar intentos
            de acceso sospechosos para evitar riesgos de seguridad.
          </div>

        </div>

      </div>
    </>
  );
}