import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminBoard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    usuarios: 0,
    admins: 0,
    logs: 0,
    alertas: 0,
    reportes: 0,
  });

  useEffect(() => {
    // 🔥 Simulación backend
    setStats({
      usuarios: 1240,
      admins: 5,
      logs: 824,
      alertas: 9,
      reportes: 21,
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
            radial-gradient(circle at top left, rgba(239,68,68,0.15), transparent 25%),
            radial-gradient(circle at bottom right, rgba(220,38,38,0.12), transparent 25%),
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
          font-size:2.8rem;
          font-weight:800;
          background:linear-gradient(90deg,#ef4444,#f87171);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .header-left p{
          margin-top:12px;
          color:#94a3b8;
          line-height:1.7;
          max-width:850px;
        }

        .admin-badge{
          padding:12px 18px;
          border-radius:14px;
          background:rgba(239,68,68,0.12);
          border:1px solid rgba(239,68,68,0.25);
          color:#f87171;
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
          position:relative;
          overflow:hidden;
          backdrop-filter:blur(12px);
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
          border-radius:50%;
          background:rgba(255,255,255,0.04);
          top:-30px;
          right:-30px;
        }

        .stat-icon{
          font-size:1.9rem;
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
          grid-template-columns:repeat(auto-fit,minmax(330px,1fr));
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
          transform:translateY(-6px);
          box-shadow:0 15px 35px rgba(0,0,0,0.35);
        }

        .card-banner{
          height:145px;
          background:linear-gradient(135deg,#ef4444,#dc2626);
          position:relative;
        }

        .card-icon{
          width:80px;
          height:80px;
          border-radius:20px;
          background:white;
          color:#dc2626;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:2rem;
          position:absolute;
          bottom:-40px;
          left:25px;
          border:5px solid #020617;
          box-shadow:0 10px 25px rgba(0,0,0,0.25);
        }

        .card-content{
          padding:55px 25px 25px;
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
          padding:15px;
          border-radius:14px;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.06);
          color:#94a3b8;
          line-height:1.7;
          font-size:0.88rem;
        }

        /* BUTTONS */
        .btn{
          width:100%;
          margin-top:20px;
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

        .users-btn{
          background:linear-gradient(135deg,#3b82f6,#2563eb);
        }

        .settings-btn{
          background:linear-gradient(135deg,#8b5cf6,#7c3aed);
        }

        .reports-btn{
          background:linear-gradient(135deg,#f59e0b,#d97706);
        }

        .security-btn{
          background:linear-gradient(135deg,#22c55e,#16a34a);
        }

        .logs-btn{
          background:linear-gradient(135deg,#ef4444,#dc2626);
        }

        /* ALERT BOX */
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

          .card-banner{
            height:120px;
          }

          .card-content{
            padding:50px 20px 20px;
          }

        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <div className="header">

          <div className="header-left">
            <h1>👑 Centro Administrativo</h1>

            <p>
              Gestiona usuarios, controla la seguridad del sistema,
              supervisa reportes y administra configuraciones globales
              desde un único panel centralizado con acceso de nivel máximo.
            </p>
          </div>

          <div className="admin-badge">
            ADMIN ACCESS
          </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">{stats.usuarios}</div>
            <div className="stat-label">
              Usuarios registrados
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👑</div>
            <div className="stat-number">{stats.admins}</div>
            <div className="stat-label">
              Administradores activos
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📄</div>
            <div className="stat-number">{stats.logs}</div>
            <div className="stat-label">
              Registros del sistema
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🚨</div>
            <div className="stat-number">{stats.alertas}</div>
            <div className="stat-label">
              Alertas críticas detectadas
            </div>
          </div>

        </div>

        {/* MAIN */}
        <div className="main-grid">

          {/* USERS */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                👥
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Gestión de Usuarios
              </div>

              <div className="card-desc">
                Administra cuentas registradas, controla roles,
                bloquea accesos y supervisa la actividad de usuarios.
              </div>

              <div className="card-extra">
                • Control de roles <br/>
                • Suspensión de cuentas <br/>
                • Gestión de accesos <br/>
                • Estadísticas de usuarios
              </div>

              <button
                className="btn users-btn"
                onClick={() => navigate("/admin/usuarios")}
              >
                Administrar Usuarios
              </button>

            </div>
          </div>

          {/* SETTINGS */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                ⚙️
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Configuración Global
              </div>

              <div className="card-desc">
                Ajusta parámetros críticos del sistema y modifica
                configuraciones generales de la plataforma.
              </div>

              <div className="card-extra">
                • Variables de entorno <br/>
                • Configuración de seguridad <br/>
                • Ajustes del servidor <br/>
                • Preferencias globales
              </div>

              <button
                className="btn settings-btn"
                onClick={() => navigate("/admin/configuracion")}
              >
                Abrir Configuración
              </button>

            </div>
          </div>

          {/* REPORTS */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                📊
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Reportes y Métricas
              </div>

              <div className="card-desc">
                Analiza estadísticas del sistema, actividad de usuarios
                y rendimiento general de la plataforma.
              </div>

              <div className="card-extra">
                • Reportes de actividad <br/>
                • Métricas del sistema <br/>
                • Análisis de uso <br/>
                • Datos en tiempo real
              </div>

              <button
                className="btn reports-btn"
                onClick={() => navigate("/admin/reportes")}
              >
                Ver Reportes
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
                Centro de Seguridad
              </div>

              <div className="card-desc">
                Supervisa amenazas, revisa accesos sospechosos
                y protege la infraestructura del sistema.
              </div>

              <div className="card-extra">
                • Monitoreo de IPs <br/>
                • Protección avanzada <br/>
                • Alertas automáticas <br/>
                • Control de sesiones
              </div>

              <button
                className="btn security-btn"
                onClick={() => navigate("/admin/seguridad")}
              >
                Abrir Seguridad
              </button>

            </div>
          </div>

          {/* LOGS */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                📄
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Logs del Sistema
              </div>

              <div className="card-desc">
                Visualiza eventos internos, errores críticos y
                actividad detallada registrada por la plataforma.
              </div>

              <div className="card-extra">
                • Logs en tiempo real <br/>
                • Errores del sistema <br/>
                • Auditoría completa <br/>
                • Historial de eventos
              </div>

              <button
                className="btn logs-btn"
                onClick={() => navigate("/admin/logs")}
              >
                Ver Logs
              </button>

            </div>
          </div>

        </div>

        {/* ALERTS */}
        <div className="alert-box">

          <div className="alert-title">
            🚨 Estado Crítico del Sistema
          </div>

          <div className="alert-text">
            Se detectaron {stats.alertas} alertas críticas durante las últimas
            24 horas. Se recomienda revisar los logs recientes y validar
            la actividad de seguridad para evitar riesgos operativos.
          </div>

        </div>

      </div>
    </>
  );
}