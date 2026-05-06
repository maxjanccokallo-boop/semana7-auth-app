import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Usuarios() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      {
        id: 1,
        username: "max_admin",
        email: "max@authapp.com",
        role: "ADMIN",
        status: "ACTIVO",
        sessions: 12,
        joined: "12 Enero 2026",
      },
      {
        id: 2,
        username: "ana_mod",
        email: "ana@authapp.com",
        role: "MODERATOR",
        status: "ACTIVO",
        sessions: 8,
        joined: "05 Febrero 2026",
      },
      {
        id: 3,
        username: "juan_user",
        email: "juan@authapp.com",
        role: "USER",
        status: "SUSPENDIDO",
        sessions: 2,
        joined: "28 Marzo 2026",
      },
    ]);
  }, []);

  const cambiarEstado = (id) => {
    setUsers(
      users.map((u) =>
        u.id === id
          ? {
              ...u,
              status: u.status === "ACTIVO" ? "SUSPENDIDO" : "ACTIVO",
            }
          : u
      )
    );
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
            radial-gradient(circle at top left, rgba(59,130,246,0.15), transparent 25%),
            radial-gradient(circle at bottom right, rgba(139,92,246,0.12), transparent 25%),
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
          background:linear-gradient(90deg,#3b82f6,#8b5cf6);
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

        /* USER GRID */
        .users-grid{
          display:grid;
          gap:25px;
        }

        /* USER CARD */
        .user-card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          overflow:hidden;
          backdrop-filter:blur(12px);
          transition:0.3s;
        }

        .user-card:hover{
          transform:translateY(-5px);
          box-shadow:0 15px 35px rgba(0,0,0,0.35);
        }

        .user-header{
          padding:25px;
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:20px;
          flex-wrap:wrap;
          border-bottom:1px solid rgba(255,255,255,0.06);
        }

        .user-left{
          display:flex;
          align-items:center;
          gap:18px;
        }

        .avatar{
          width:70px;
          height:70px;
          border-radius:20px;
          background:linear-gradient(135deg,#3b82f6,#8b5cf6);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:1.8rem;
          font-weight:800;
        }

        .username{
          font-size:1.2rem;
          font-weight:800;
        }

        .email{
          margin-top:8px;
          color:#94a3b8;
          font-size:0.9rem;
        }

        /* BADGES */
        .role{
          padding:8px 14px;
          border-radius:999px;
          font-size:0.75rem;
          font-weight:700;
        }

        .admin{
          background:rgba(239,68,68,0.15);
          color:#f87171;
        }

        .moderator{
          background:rgba(245,158,11,0.15);
          color:#fbbf24;
        }

        .user{
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

        .active{
          background:rgba(34,197,94,0.15);
          color:#4ade80;
        }

        .suspended{
          background:rgba(239,68,68,0.15);
          color:#f87171;
        }

        /* CONTENT */
        .user-content{
          padding:25px;
        }

        .details-grid{
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

        /* BUTTONS */
        .actions{
          margin-top:20px;
          display:flex;
          gap:15px;
          flex-wrap:wrap;
        }

        .btn{
          flex:1;
          min-width:180px;
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

        .edit-btn{
          background:linear-gradient(135deg,#3b82f6,#2563eb);
        }

        .suspend-btn{
          background:linear-gradient(135deg,#ef4444,#dc2626);
        }

        .activate-btn{
          background:linear-gradient(135deg,#22c55e,#16a34a);
        }

        .back-btn{
          margin-top:35px;
          width:100%;
          padding:14px;
          border:none;
          border-radius:14px;
          font-weight:700;
          cursor:pointer;
          transition:0.3s;
          color:white;
          background:linear-gradient(135deg,#475569,#334155);
        }

        .back-btn:hover{
          transform:scale(1.02);
        }

        /* ALERT */
        .alert-box{
          margin-top:35px;
          background:rgba(59,130,246,0.12);
          border:1px solid rgba(59,130,246,0.2);
          border-radius:20px;
          padding:25px;
        }

        .alert-title{
          font-size:1.1rem;
          font-weight:700;
          color:#93c5fd;
        }

        .alert-text{
          margin-top:12px;
          color:#bfdbfe;
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

          .user-left{
            flex-direction:column;
            align-items:flex-start;
          }

          .actions{
            flex-direction:column;
          }

        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <div className="header">

          <div className="header-left">
            <h1>👥 Gestión de Usuarios</h1>

            <p>
              Administra cuentas registradas, controla permisos,
              monitorea sesiones activas y supervisa el estado
              general de los usuarios del sistema.
            </p>
          </div>

          <div className="badge">
            USER MANAGEMENT
          </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">1,240</div>
            <div className="stat-label">
              Usuarios registrados
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👑</div>
            <div className="stat-number">5</div>
            <div className="stat-label">
              Administradores activos
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🛡</div>
            <div className="stat-number">18</div>
            <div className="stat-label">
              Moderadores activos
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🚫</div>
            <div className="stat-number">7</div>
            <div className="stat-label">
              Cuentas suspendidas
            </div>
          </div>

        </div>

        {/* USERS */}
        <div className="users-grid">

          {users.map((user) => (
            <div className="user-card" key={user.id}>

              <div className="user-header">

                <div className="user-left">

                  <div className="avatar">
                    {user.username.charAt(0).toUpperCase()}
                  </div>

                  <div>

                    <div className="username">
                      @{user.username}
                    </div>

                    <div className="email">
                      {user.email}
                    </div>

                    <div
                      className={`status ${
                        user.status === "ACTIVO"
                          ? "active"
                          : "suspended"
                      }`}
                    >
                      {user.status}
                    </div>

                  </div>

                </div>

                <div
                  className={`role ${
                    user.role === "ADMIN"
                      ? "admin"
                      : user.role === "MODERATOR"
                      ? "moderator"
                      : "user"
                  }`}
                >
                  {user.role}
                </div>

              </div>

              <div className="user-content">

                <div className="details-grid">

                  <div className="detail-box">

                    <div className="detail-title">
                      Fecha de registro
                    </div>

                    <div className="detail-value">
                      {user.joined}
                    </div>

                  </div>

                  <div className="detail-box">

                    <div className="detail-title">
                      Sesiones activas
                    </div>

                    <div className="detail-value">
                      {user.sessions}
                    </div>

                  </div>

                  <div className="detail-box">

                    <div className="detail-title">
                      Estado del sistema
                    </div>

                    <div className="detail-value">
                      Cuenta monitoreada
                    </div>

                  </div>

                </div>

                <div className="actions">

                  <button className="btn edit-btn">
                    ✏ Editar Usuario
                  </button>

                  <button
                    className={`btn ${
                      user.status === "ACTIVO"
                        ? "suspend-btn"
                        : "activate-btn"
                    }`}
                    onClick={() => cambiarEstado(user.id)}
                  >
                    {user.status === "ACTIVO"
                      ? "🚫 Suspender"
                      : "✔ Activar"}
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* BACK */}
        <button
          className="back-btn"
          onClick={() => navigate("/admin")}
        >
          ⬅ Volver al Panel Admin
        </button>

        {/* ALERT */}
        <div className="alert-box">

          <div className="alert-title">
            ⚠️ Supervisión Administrativa
          </div>

          <div className="alert-text">
            El sistema mantiene monitoreo constante sobre sesiones,
            accesos y comportamiento de usuarios para garantizar
            estabilidad y seguridad dentro de la plataforma.
          </div>

        </div>

      </div>
    </>
  );
}   