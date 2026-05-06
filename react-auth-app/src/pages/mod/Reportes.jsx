import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Reportes() {
  const navigate = useNavigate();

  const [reports, setReports] = useState([]);

  useEffect(() => {
    setReports([
      {
        id: 1,
        motivo: "Spam masivo",
        user: "juan123",
        severity: "ALTA",
        description:
          "El usuario publicó múltiples mensajes repetitivos en menos de 2 minutos.",
        date: "Hace 10 minutos"
      },
      {
        id: 2,
        motivo: "Lenguaje ofensivo",
        user: "ana456",
        severity: "MEDIA",
        description:
          "Se detectaron expresiones ofensivas hacia otros usuarios dentro del chat.",
        date: "Hace 25 minutos"
      },
      {
        id: 3,
        motivo: "Contenido inapropiado",
        user: "devmax",
        severity: "CRÍTICA",
        description:
          "Se reportó contenido que incumple las políticas de convivencia.",
        date: "Hace 1 hora"
      }
    ]);
  }, []);

  const resolver = (id) => {
    setReports(reports.filter((r) => r.id !== id));
  };

  const banear = (user) => {
    alert(`Usuario ${user} suspendido temporalmente`);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
        }

        .container {
          min-height: calc(100vh - 70px);
          padding: 40px;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 35px;
        }

        .title-section h1 {
          margin: 0;
          font-size: 2.4rem;
          font-weight: 800;
          background: linear-gradient(90deg, #ef4444, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-section p {
          margin-top: 8px;
          color: #94a3b8;
          max-width: 750px;
          line-height: 1.6;
        }

        .back-btn {
          padding: 12px 18px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #334155, #475569);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .back-btn:hover {
          transform: translateY(-2px);
        }

        /* STATS */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 20px;
          backdrop-filter: blur(10px);
        }

        .stat-title {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .stat-number {
          margin-top: 10px;
          font-size: 2rem;
          font-weight: 800;
        }

        /* REPORTS */
        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 25px;
        }

        .report-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          overflow: hidden;
          transition: 0.3s;
          backdrop-filter: blur(12px);
        }

        .report-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.35);
        }

        .report-banner {
          height: 120px;
          background: linear-gradient(135deg, #ef4444, #f97316);
          position: relative;
        }

        .report-avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: white;
          color: #ef4444;
          font-size: 1.7rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: -35px;
          left: 25px;
          border: 4px solid #0f172a;
        }

        .report-content {
          padding: 50px 25px 25px;
        }

        .report-user {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .report-reason {
          margin-top: 8px;
          color: #fca5a5;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .report-description {
          margin-top: 15px;
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .severity {
          display: inline-block;
          margin-top: 18px;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .alta {
          background: rgba(245,158,11,0.2);
          color: #fbbf24;
        }

        .media {
          background: rgba(59,130,246,0.2);
          color: #60a5fa;
        }

        .critica {
          background: rgba(239,68,68,0.2);
          color: #f87171;
        }

        .date {
          margin-top: 10px;
          color: #94a3b8;
          font-size: 0.8rem;
        }

        /* BUTTONS */
        .actions {
          margin-top: 20px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .btn {
          flex: 1;
          min-width: 120px;
          padding: 11px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn:hover {
          transform: scale(1.03);
        }

        .resolve-btn {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
        }

        .ban-btn {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .container {
            padding: 20px;
          }

          .title-section h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <div className="top-bar">
          <div className="title-section">
            <h1>⚠️ Centro de Reportes</h1>
            <p>
              Administra denuncias enviadas por usuarios, revisa actividades
              sospechosas y aplica medidas de moderación para mantener la
              seguridad y estabilidad de la plataforma.
            </p>
          </div>

          <button
            className="back-btn"
            onClick={() => navigate("/mod")}
          >
            ⬅ Volver al panel
          </button>
        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-title">Reportes Pendientes</div>
            <div className="stat-number">8</div>
          </div>

          <div className="stat-card">
            <div className="stat-title">Usuarios Suspendidos</div>
            <div className="stat-number">3</div>
          </div>

          <div className="stat-card">
            <div className="stat-title">Casos Resueltos Hoy</div>
            <div className="stat-number">24</div>
          </div>

        </div>

        {/* REPORTS */}
        <div className="reports-grid">
          {reports.map((r) => (
            <div className="report-card" key={r.id}>

              <div className="report-banner">
                <div className="report-avatar">
                  {r.user.charAt(0).toUpperCase()}
                </div>
              </div>

              <div className="report-content">

                <div className="report-user">
                  @{r.user}
                </div>

                <div className="report-reason">
                  Motivo: {r.motivo}
                </div>

                <div className="report-description">
                  {r.description}
                </div>

                <div
                  className={`severity ${
                    r.severity === "ALTA"
                      ? "alta"
                      : r.severity === "MEDIA"
                      ? "media"
                      : "critica"
                  }`}
                >
                  Prioridad {r.severity}
                </div>

                <div className="date">
                  🕒 {r.date}
                </div>

                <div className="actions">

                  <button
                    className="btn resolve-btn"
                    onClick={() => resolver(r.id)}
                  >
                    ✔ Resolver
                  </button>

                  <button
                    className="btn ban-btn"
                    onClick={() => banear(r.user)}
                  >
                    🚫 Suspender
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}