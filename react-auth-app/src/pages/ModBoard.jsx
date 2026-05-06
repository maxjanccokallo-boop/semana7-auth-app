import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ModBoard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    pendientes: 0,
    reportes: 0,
    revisados: 0,
    suspendidos: 0,
    alertas: 0,
  });

  useEffect(() => {
    // 🔥 Simulación backend
    setStats({
      pendientes: 12,
      reportes: 5,
      revisados: 30,
      suspendidos: 3,
      alertas: 7,
    });
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
            radial-gradient(circle at top left, rgba(245,158,11,0.15), transparent 25%),
            radial-gradient(circle at bottom right, rgba(251,191,36,0.12), transparent 25%),
            linear-gradient(135deg,#0f172a,#1e293b);
          color:white;
          overflow:hidden;
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
          font-size:2.8rem;
          font-weight:800;
          background:linear-gradient(90deg,#f59e0b,#fbbf24);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .header-left p{
          margin-top:10px;
          max-width:750px;
          color:#94a3b8;
          line-height:1.7;
          font-size:0.95rem;
        }

        .moderator-badge{
          padding:12px 18px;
          border-radius:14px;
          background:rgba(245,158,11,0.12);
          border:1px solid rgba(245,158,11,0.25);
          color:#fbbf24;
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
          backdrop-filter:blur(10px);
          border-radius:22px;
          padding:24px;
          position:relative;
          overflow:hidden;
          transition:0.3s;
        }

        .stat-card:hover{
          transform:translateY(-6px);
          box-shadow:0 15px 35px rgba(0,0,0,0.35);
        }

        .stat-card::before{
          content:"";
          position:absolute;
          width:120px;
          height:120px;
          background:rgba(255,255,255,0.05);
          border-radius:50%;
          top:-30px;
          right:-30px;
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

        /* MAIN GRID */
        .main-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:25px;
        }

        /* CARDS */
        .card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          overflow:hidden;
          transition:0.3s;
          backdrop-filter:blur(12px);
        }

        .card:hover{
          transform:translateY(-6px);
          box-shadow:0 15px 35px rgba(0,0,0,0.35);
        }

        .card-banner{
          height:140px;
          background:linear-gradient(135deg,#f59e0b,#fbbf24);
          position:relative;
        }

        .card-icon{
          width:75px;
          height:75px;
          border-radius:20px;
          background:white;
          color:#f59e0b;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:2rem;
          position:absolute;
          bottom:-35px;
          left:25px;
          border:5px solid #0f172a;
          box-shadow:0 10px 25px rgba(0,0,0,0.25);
        }

        .card-content{
          padding:50px 25px 25px;
        }

        .card-title{
          font-size:1.3rem;
          font-weight:800;
        }

        .card-desc{
          margin-top:10px;
          color:#cbd5e1;
          line-height:1.7;
          font-size:0.95rem;
        }

        .card-extra{
          margin-top:18px;
          padding:14px;
          border-radius:14px;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.06);
          color:#94a3b8;
          font-size:0.88rem;
          line-height:1.6;
        }

        /* BUTTONS */
        .btn{
          margin-top:20px;
          width:100%;
          padding:13px;
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

        .content-btn{
          background:linear-gradient(135deg,#3b82f6,#2563eb);
        }

        .report-btn{
          background:linear-gradient(135deg,#ef4444,#dc2626);
        }

        .security-btn{
          background:linear-gradient(135deg,#22c55e,#16a34a);
        }

        /* ALERT SECTION */
        .alert-box{
          margin-top:30px;
          background:rgba(239,68,68,0.1);
          border:1px solid rgba(239,68,68,0.25);
          padding:20px;
          border-radius:18px;
        }

        .alert-title{
          font-size:1.1rem;
          font-weight:700;
          color:#f87171;
        }

        .alert-text{
          margin-top:10px;
          color:#fecaca;
          line-height:1.6;
        }

        /* RESPONSIVE */
        @media(max-width:768px){

          .container{
            padding:20px;
          }

          .header-left h1{
            font-size:2rem;
          }

          .card-banner{
            height:120px;
          }

          .card-content{
            padding:45px 20px 20px;
          }

        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <div className="header">

          <div className="header-left">
            <h1>🛡 Centro de Moderación</h1>

            <p>
              Supervisa el comportamiento de los usuarios, revisa publicaciones,
              responde reportes y protege la estabilidad de la plataforma mediante
              herramientas avanzadas de moderación y control de actividad.
            </p>
          </div>

          <div className="moderator-badge">
            MODERATOR ACCESS
          </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">📄</div>
            <div className="stat-number">{stats.pendientes}</div>
            <div className="stat-label">
              Publicaciones pendientes de revisión
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⚠️</div>
            <div className="stat-number">{stats.reportes}</div>
            <div className="stat-label">
              Reportes enviados por usuarios
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✔</div>
            <div className="stat-number">{stats.revisados}</div>
            <div className="stat-label">
              Casos revisados exitosamente
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🚫</div>
            <div className="stat-number">{stats.suspendidos}</div>
            <div className="stat-label">
              Usuarios suspendidos temporalmente
            </div>
          </div>

        </div>

        {/* MAIN */}
        <div className="main-grid">

          {/* CONTENT */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                🔍
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Moderación de Contenido
              </div>

              <div className="card-desc">
                Analiza publicaciones recientes, detecta contenido sospechoso
                y aplica acciones correctivas para mantener la calidad de la comunidad.
              </div>

              <div className="card-extra">
                • Revisión de publicaciones <br/>
                • Eliminación de spam <br/>
                • Validación de contenido <br/>
                • Detección de lenguaje ofensivo
              </div>

              <button
                className="btn content-btn"
                onClick={() => navigate("/mod/contenido")}
              >
                Ir al Centro de Contenido
              </button>

            </div>
          </div>

          {/* REPORTS */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                ⚠️
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Gestión de Reportes
              </div>

              <div className="card-desc">
                Atiende denuncias enviadas por usuarios y responde ante
                actividades sospechosas detectadas automáticamente.
              </div>

              <div className="card-extra">
                • Reportes por spam <br/>
                • Denuncias de comportamiento <br/>
                • Revisión manual de incidentes <br/>
                • Sanciones temporales
              </div>

              <button
                className="btn report-btn"
                onClick={() => navigate("/mod/reportes")}
              >
                Abrir Reportes
              </button>

            </div>
          </div>

          {/* SECURITY */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                🛡
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Seguridad de Plataforma
              </div>

              <div className="card-desc">
                Monitorea accesos sospechosos y actividad anormal dentro
                del sistema para prevenir abuso o ataques.
              </div>

              <div className="card-extra">
                • Verificación de actividad <br/>
                • Monitoreo de IPs <br/>
                • Alertas automáticas <br/>
                • Protección contra abuso
              </div>

              <button className="btn security-btn">
                Ver Estado de Seguridad
              </button>

            </div>
          </div>

        </div>

        {/* ALERTS */}
        <div className="alert-box">

          <div className="alert-title">
            🚨 Alertas del Sistema
          </div>

          <div className="alert-text">
            Se detectaron {stats.alertas} eventos potencialmente sospechosos
            durante las últimas 24 horas. Se recomienda revisar los reportes
            prioritarios y validar las actividades recientes de los usuarios.
          </div>

        </div>

      </div>
    </>
  );
}