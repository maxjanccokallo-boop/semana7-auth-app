import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Seguridad() {
  const navigate = useNavigate();

  const [security, setSecurity] = useState({
    firewall: true,
    encryption: true,
    twoFactor: true,
    suspiciousIPs: 4,
    blockedAttacks: 38,
    activeSessions: 124,
  });

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    setAlerts([
      {
        id: 1,
        title: "Intentos de acceso sospechosos",
        level: "CRÍTICO",
        description:
          "Se detectaron múltiples intentos de autenticación fallidos desde IPs externas.",
        date: "05 Mayo 2026 - 15:40",
      },
      {
        id: 2,
        title: "Actividad inusual detectada",
        level: "ALTO",
        description:
          "El sistema registró comportamiento irregular en sesiones activas.",
        date: "05 Mayo 2026 - 13:15",
      },
      {
        id: 3,
        title: "Protección de firewall estable",
        level: "NORMAL",
        description:
          "El firewall continúa bloqueando tráfico malicioso automáticamente.",
        date: "05 Mayo 2026 - 11:00",
      },
    ]);
  }, []);

  const toggle = (key) => {
    setSecurity({
      ...security,
      [key]: !security[key],
    });
  };

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
            radial-gradient(circle at top left, rgba(34,197,94,0.15), transparent 25%),
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
          background:linear-gradient(90deg,#22c55e,#4ade80);
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
          background:rgba(34,197,94,0.12);
          border:1px solid rgba(34,197,94,0.25);
          color:#86efac;
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

        /* GRID */
        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(340px,1fr));
          gap:25px;
        }

        /* CARD */
        .card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          overflow:hidden;
          backdrop-filter:blur(12px);
          transition:0.3s;
        }

        .card:hover{
          transform:translateY(-5px);
          box-shadow:0 15px 35px rgba(0,0,0,0.35);
        }

        .card-header{
          padding:25px;
          border-bottom:1px solid rgba(255,255,255,0.06);
        }

        .card-title{
          font-size:1.2rem;
          font-weight:800;
        }

        .card-desc{
          margin-top:10px;
          color:#94a3b8;
          line-height:1.6;
        }

        .card-content{
          padding:25px;
        }

        /* SWITCH */
        .switch-row{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:20px;
        }

        .switch-label{
          color:#e2e8f0;
          font-size:0.95rem;
        }

        .switch{
          width:60px;
          height:30px;
          border-radius:999px;
          background:#334155;
          position:relative;
          cursor:pointer;
          transition:0.3s;
        }

        .switch.active{
          background:#22c55e;
        }

        .switch-circle{
          width:24px;
          height:24px;
          border-radius:50%;
          background:white;
          position:absolute;
          top:3px;
          left:3px;
          transition:0.3s;
        }

        .switch.active .switch-circle{
          left:33px;
        }

        /* ALERTS */
        .alerts-grid{
          display:grid;
          gap:20px;
        }

        .alert-card{
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.06);
          border-radius:18px;
          padding:20px;
        }

        .alert-title{
          font-size:1rem;
          font-weight:700;
        }

        .alert-desc{
          margin-top:10px;
          color:#cbd5e1;
          line-height:1.6;
        }

        .alert-date{
          margin-top:12px;
          color:#94a3b8;
          font-size:0.8rem;
        }

        .level{
          display:inline-block;
          margin-top:15px;
          padding:7px 14px;
          border-radius:999px;
          font-size:0.75rem;
          font-weight:700;
        }

        .critical{
          background:rgba(239,68,68,0.15);
          color:#f87171;
        }

        .high{
          background:rgba(245,158,11,0.15);
          color:#fbbf24;
        }

        .normal{
          background:rgba(34,197,94,0.15);
          color:#4ade80;
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

        .scan-btn{
          background:linear-gradient(135deg,#22c55e,#16a34a);
        }

        .block-btn{
          background:linear-gradient(135deg,#ef4444,#dc2626);
        }

        .back-btn{
          background:linear-gradient(135deg,#475569,#334155);
        }

        /* ALERT BOX */
        .main-alert{
          margin-top:35px;
          background:rgba(239,68,68,0.12);
          border:1px solid rgba(239,68,68,0.2);
          border-radius:20px;
          padding:25px;
        }

        .main-alert-title{
          font-size:1.1rem;
          font-weight:700;
          color:#f87171;
        }

        .main-alert-text{
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

        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <div className="header">

          <div className="header-left">
            <h1>🛡 Centro de Seguridad</h1>

            <p>
              Supervisa amenazas, administra protección avanzada,
              monitorea sesiones activas y detecta actividades sospechosas
              dentro de la infraestructura del sistema.
            </p>
          </div>

          <div className="badge">
            SECURITY CENTER
          </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">🚫</div>
            <div className="stat-number">{security.blockedAttacks}</div>
            <div className="stat-label">
              Ataques bloqueados
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🌐</div>
            <div className="stat-number">{security.suspiciousIPs}</div>
            <div className="stat-label">
              IPs sospechosas
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">{security.activeSessions}</div>
            <div className="stat-label">
              Sesiones activas
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🛡</div>
            <div className="stat-number">99%</div>
            <div className="stat-label">
              Nivel de protección
            </div>
          </div>

        </div>

        {/* GRID */}
        <div className="grid">

          {/* CONFIG */}
          <div className="card">

            <div className="card-header">

              <div className="card-title">
                Configuración de Protección
              </div>

              <div className="card-desc">
                Activa o desactiva mecanismos avanzados de seguridad.
              </div>

            </div>

            <div className="card-content">

              <div className="switch-row">

                <div className="switch-label">
                  Firewall inteligente
                </div>

                <div
                  className={`switch ${security.firewall ? "active" : ""}`}
                  onClick={() => toggle("firewall")}
                >
                  <div className="switch-circle"></div>
                </div>

              </div>

              <div className="switch-row">

                <div className="switch-label">
                  Encriptación avanzada
                </div>

                <div
                  className={`switch ${security.encryption ? "active" : ""}`}
                  onClick={() => toggle("encryption")}
                >
                  <div className="switch-circle"></div>
                </div>

              </div>

              <div className="switch-row">

                <div className="switch-label">
                  Autenticación 2FA
                </div>

                <div
                  className={`switch ${security.twoFactor ? "active" : ""}`}
                  onClick={() => toggle("twoFactor")}
                >
                  <div className="switch-circle"></div>
                </div>

              </div>

            </div>

          </div>

          {/* ALERTS */}
          <div className="card">

            <div className="card-header">

              <div className="card-title">
                Alertas de Seguridad
              </div>

              <div className="card-desc">
                Eventos detectados automáticamente por el sistema.
              </div>

            </div>

            <div className="card-content">

              <div className="alerts-grid">

                {alerts.map((alert) => (
                  <div className="alert-card" key={alert.id}>

                    <div className="alert-title">
                      {alert.title}
                    </div>

                    <div className="alert-desc">
                      {alert.description}
                    </div>

                    <div className="alert-date">
                      {alert.date}
                    </div>

                    <div
                      className={`level ${
                        alert.level === "CRÍTICO"
                          ? "critical"
                          : alert.level === "ALTO"
                          ? "high"
                          : "normal"
                      }`}
                    >
                      {alert.level}
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="buttons">

          <button className="btn scan-btn">
            🔍 Ejecutar Escaneo Completo
          </button>

          <button className="btn block-btn">
            🚫 Bloquear IPs Sospechosas
          </button>

          <button
            className="btn back-btn"
            onClick={() => navigate("/admin")}
          >
            ⬅ Volver al Panel Admin
          </button>

        </div>

        {/* ALERT */}
        <div className="main-alert">

          <div className="main-alert-title">
            ⚠️ Supervisión Permanente
          </div>

          <div className="main-alert-text">
            El sistema de seguridad se encuentra monitoreando actividad
            en tiempo real. Se recomienda revisar alertas críticas y validar
            accesos sospechosos detectados durante las últimas horas.
          </div>

        </div>

      </div>
    </>
  );
}