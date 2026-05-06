import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contenido() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      {
        id: 1,
        user: "juan_dev",
        text: "Publicación sospechosa detectada por el sistema.",
        status: "PENDIENTE",
        category: "Spam",
        date: "Hace 5 min"
      },
      {
        id: 2,
        user: "ana_code",
        text: "Contenido validado automáticamente.",
        status: "APROBADO",
        category: "Normal",
        date: "Hace 20 min"
      },
      {
        id: 3,
        user: "max_admin",
        text: "Comentario ofensivo reportado.",
        status: "REVISIÓN",
        category: "Toxicidad",
        date: "Hace 1 hora"
      }
    ]);
  }, []);

  const aprobar = (id) => {
    setPosts(
      posts.map((p) =>
        p.id === id ? { ...p, status: "APROBADO" } : p
      )
    );
  };

  const eliminar = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
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
          margin-bottom: 35px;
          flex-wrap: wrap;
          gap: 15px;
        }

        .title-section h1 {
          margin: 0;
          font-size: 2.3rem;
          font-weight: 800;
          background: linear-gradient(90deg, #f59e0b, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-section p {
          margin-top: 8px;
          color: #94a3b8;
          max-width: 700px;
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

        /* POSTS */
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
        }

        .post-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          overflow: hidden;
          transition: 0.3s;
          backdrop-filter: blur(12px);
        }

        .post-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.35);
        }

        .post-banner {
          height: 140px;
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          position: relative;
        }

        .post-avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: white;
          color: #f59e0b;
          font-size: 1.8rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: -35px;
          left: 25px;
          border: 4px solid #0f172a;
        }

        .post-content {
          padding: 50px 25px 25px;
        }

        .post-user {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .post-category {
          margin-top: 6px;
          color: #fbbf24;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .post-text {
          margin-top: 15px;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .status {
          display: inline-block;
          margin-top: 18px;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .pending {
          background: rgba(245,158,11,0.2);
          color: #fbbf24;
        }

        .approved {
          background: rgba(34,197,94,0.2);
          color: #4ade80;
        }

        .review {
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

        .approve-btn {
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: white;
        }

        .delete-btn {
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

          .post-banner {
            height: 120px;
          }
        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <div className="top-bar">
          <div className="title-section">
            <h1>🔍 Moderación de Contenido</h1>
            <p>
              Supervisa publicaciones recientes, analiza actividad sospechosa
              y mantén la calidad del contenido dentro de la plataforma.
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
            <div className="stat-title">Publicaciones Pendientes</div>
            <div className="stat-number">12</div>
          </div>

          <div className="stat-card">
            <div className="stat-title">Contenido Aprobado Hoy</div>
            <div className="stat-number">38</div>
          </div>

          <div className="stat-card">
            <div className="stat-title">Reportes Detectados</div>
            <div className="stat-number">5</div>
          </div>

        </div>

        {/* POSTS */}
        <div className="posts-grid">
          {posts.map((p) => (
            <div className="post-card" key={p.id}>

              <div className="post-banner">
                <div className="post-avatar">
                  {p.user.charAt(0).toUpperCase()}
                </div>
              </div>

              <div className="post-content">

                <div className="post-user">@{p.user}</div>

                <div className="post-category">
                  Categoría: {p.category}
                </div>

                <div className="post-text">
                  {p.text}
                </div>

                <div
                  className={`status ${
                    p.status === "APROBADO"
                      ? "approved"
                      : p.status === "REVISIÓN"
                      ? "review"
                      : "pending"
                  }`}
                >
                  {p.status}
                </div>

                <div className="date">
                  🕒 {p.date}
                </div>

                <div className="actions">
                  <button
                    className="btn approve-btn"
                    onClick={() => aprobar(p.id)}
                  >
                    ✔ Aprobar
                  </button>

                  <button
                    className="btn delete-btn"
                    onClick={() => eliminar(p.id)}
                  >
                    ✖ Eliminar
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