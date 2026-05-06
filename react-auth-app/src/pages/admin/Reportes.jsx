import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReportesAdmin() {
  const navigate = useNavigate();

  const [reports, setReports] = useState([]);

  useEffect(() => {
    setReports([
      {
        id: 1,
        title: "Incremento de tráfico sospechoso",
        category: "Seguridad",
        priority: "CRÍTICA",
        description:
          "Se detectó un aumento inusual de peticiones desde múltiples IPs externas.",
        date: "05 Mayo 2026 - 14:20",
        status: "EN INVESTIGACIÓN",
      },
      {
        id: 2,
        title: "Errores en autenticación",
        category: "Sistema",
        priority: "MEDIA",
        description:
          "Usuarios reportaron fallos al iniciar sesión desde dispositivos móviles.",
        date: "05 Mayo 2026 - 11:05",
        status: "PENDIENTE",
      },
      {
        id: 3,
        title: "Actividad ofensiva reportada",
        category: "Moderación",
        priority: "ALTA",
        description:
          "Moderadores detectaron múltiples publicaciones que incumplen las normas.",
        date: "04 Mayo 2026 - 22:10",
        status: "RESUELTO",
      },
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
            radial-gradient(circle at top left, rgba(59,130,246,0.15), transparent 25%),
            radial-gradient(circle at bottom right, rgba(245,158,11,0.12), transparent 25%),
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
          background:linear-gradient(90deg,#3b82f6,#60a5fa);
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
          background:rgba(59,130,246,0.12);
          border:1px solid rgba(59,130,246,0.25);
          color:#93c5fd;
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

        /* REPORT GRID */
        .reports-grid{
          display:grid;
          gap:25px;
        }

        /* CARD */
        .report-card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          overflow:hidden;
          backdrop-filter:blur(12px);
          transition:0.3s;
        }

        .report-card:hover{
          transform:translateY(-4px);
          box-shadow:0 15px 35px rgba(0,0,0,0.35);
        }

        .report-header{
          padding:25px;
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:20px;
          flex-wrap:wrap;
          border-bottom:1px solid rgba(255,255,255,0.06);
        }

        .report-title{
          font-size:1.2rem;
          font-weight:800;
        }

        .report-category{
          margin-top:8px;
          color:#94a3b8;
          font-size:0.9rem;
        }

        .report-content{
          padding:25px;
        }

        .report-description{
          color:#cbd5e1;
          line-height:1.7;
        }

        .details-grid{
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
        .priority{
          padding:8px 14px;
          border-radius:999px;
          font-size:0.75rem;
          font-weight:700;
        }

        .critica{
          background:rgba(239,68,68,0.15);
          color:#f87171;
        }

        .alta{
          background:rgba(245,158,11,0.15);
          color:#fbbf24;
        }

        .media{
          background:rgba(59,130,246,0.15);
          color:#60a5fa;
        }

        .status{
          display:inline-block;
          margin-top:18px;
          padding:8px 14px;
          border-radius:999px;
          font-size:0.75rem;
          font-weight:700;
        }

        .pending{
          background:rgba(245,158,11,0.15);
          color:#fbbf24;
        }

        .resolved{
          background:rgba(34,197,94,0.15);
          color:#4ade80;
        }

        .investigation{
          background:rgba(239,68,68,0.15);
          color:#f87171;
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

        .export-btn{
          background:linear-gradient(135deg,#22c55e,#16a34a);
        }

        .generate-btn{
          background:linear-gradient(135deg,#3b82f6,#2563eb);
        }

        .back-btn{
          background:linear-gradient(135deg,#475569,#334155);
        }

        /* ALERT */
        .alert-box{
          margin-top:35px;
          background:rgba(245,158,11,0.12);
          border:1px solid rgba(245,158,11,0.2);
          border-radius:20px;
          padding:25px;
        }

        .alert-title{
          font-size:1.1rem;
          font-weight:700;
          color:#fbbf24;
        }

        .alert-text{
          margin-top:12px;
          color:#fde68a;
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

          .report-header{
            flex-direction:column;
            align-items:flex-start;
          }

        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <div className="header">

          <div className="header-left">
            <h1>📊 Centro de Reportes</h1>

            <p>
              Analiza eventos críticos, reportes administrativos,
              métricas de actividad y comportamientos detectados dentro
              de la plataforma en tiempo real.
            </p>
          </div>

          <div className="badge">
            ADMIN REPORTS
          </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">📄</div>
            <div className="stat-number">248</div>
            <div className="stat-label">
              Reportes generados
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🚨</div>
            <div className="stat-number">12</div>
            <div className="stat-label">
              Casos críticos
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🛡</div>
            <div className="stat-number">41</div>
            <div className="stat-label">
              Eventos de seguridad
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✔</div>
            <div className="stat-number">198</div>
            <div className="stat-label">
              Casos resueltos
            </div>
          </div>

        </div>

        {/* REPORTS */}
        <div className="reports-grid">

          {reports.map((report) => (
            <div className="report-card" key={report.id}>

              <div className="report-header">

                <div>
                  <div className="report-title">
                    {report.title}
                  </div>

                  <div className="report-category">
                    Categoría: {report.category}
                  </div>
                </div>

                <div
                  className={`priority ${
                    report.priority === "CRÍTICA"
                      ? "critica"
                      : report.priority === "ALTA"
                      ? "alta"
                      : "media"
                  }`}
                >
                  {report.priority}
                </div>

              </div>

              <div className="report-content">

                <div className="report-description">
                  {report.description}
                </div>

                <div className="details-grid">

                  <div className="detail-box">
                    <div className="detail-title">
                      Fecha
                    </div>

                    <div className="detail-value">
                      {report.date}
                    </div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-title">
                      Estado actual
                    </div>

                    <div className="detail-value">
                      {report.status}
                    </div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-title">
                      Sistema
                    </div>

                    <div className="detail-value">
                      Registro validado
                    </div>
                  </div>

                </div>

                <div
                  className={`status ${
                    report.status === "RESUELTO"
                      ? "resolved"
                      : report.status === "PENDIENTE"
                      ? "pending"
                      : "investigation"
                  }`}
                >
                  {report.status}
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* BUTTONS */}
        <div className="buttons">

          <button className="btn export-btn">
            ⬇ Exportar Reportes
          </button>

          <button className="btn generate-btn">
            📊 Generar Informe Global
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
            ⚠️ Supervisión Administrativa
          </div>

          <div className="alert-text">
            El sistema mantiene monitoreo activo sobre eventos críticos,
            accesos administrativos y comportamiento de usuarios.
            Se recomienda revisar reportes prioritarios periódicamente.
          </div>

        </div>

      </div>
    </>
  );
}