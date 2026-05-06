import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          font-family:'Inter',sans-serif;
          background:#020617;
        }

        .home-container{
          min-height:calc(100vh - 70px);
          width:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:40px 20px;
          position:relative;
          overflow:hidden;

          background:
            radial-gradient(circle at top left, rgba(59,130,246,0.12), transparent 25%),
            radial-gradient(circle at bottom right, rgba(139,92,246,0.12), transparent 25%),
            linear-gradient(135deg,#020617,#0f172a,#111827);
        }

        /* EFECTOS */
        .bg-line{
          position:absolute;
          width:500px;
          height:500px;
          border-radius:50%;
          border:1px solid rgba(255,255,255,0.04);
          z-index:1;
        }

        .line-1{
          top:-200px;
          left:-120px;
        }

        .line-2{
          bottom:-250px;
          right:-150px;
        }

        .glow{
          position:absolute;
          width:320px;
          height:320px;
          border-radius:50%;
          filter:blur(90px);
          z-index:1;
        }

        .glow-1{
          top:-80px;
          right:-60px;
          background:rgba(59,130,246,0.12);
        }

        .glow-2{
          bottom:-120px;
          left:-80px;
          background:rgba(139,92,246,0.10);
        }

        /* CARD */
        .home-card{
          position:relative;
          z-index:5;
          width:100%;
          max-width:1180px;
          min-height:650px;

          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);

          backdrop-filter:blur(18px);

          border-radius:34px;

          overflow:hidden;

          display:grid;
          grid-template-columns:1.1fr 0.9fr;

          box-shadow:
            0 25px 50px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.04);
        }

        /* LEFT */
        .left-side{
          padding:70px;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .top-badge{
          width:max-content;
          padding:10px 18px;
          border-radius:999px;

          background:rgba(59,130,246,0.12);
          border:1px solid rgba(59,130,246,0.22);

          color:#93c5fd;
          font-size:0.8rem;
          font-weight:700;
          letter-spacing:1px;

          margin-bottom:28px;
        }

        .home-title{
          margin:0;
          font-size:4rem;
          line-height:1.1;
          font-weight:900;
          color:white;
          letter-spacing:-2px;
        }

        .gradient-text{
          background:linear-gradient(90deg,#60a5fa,#a78bfa);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .home-subtitle{
          margin-top:28px;
          max-width:650px;

          color:#94a3b8;
          font-size:1.08rem;
          line-height:1.9;
        }

        /* FEATURES */
        .features{
          margin-top:40px;
          display:grid;
          grid-template-columns:repeat(2,minmax(180px,1fr));
          gap:18px;
        }

        .feature-card{
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.06);
          border-radius:20px;
          padding:22px;
          transition:0.3s;
        }

        .feature-card:hover{
          transform:translateY(-5px);
          border-color:rgba(59,130,246,0.3);
          box-shadow:0 10px 25px rgba(0,0,0,0.25);
        }

        .feature-icon{
          font-size:1.8rem;
        }

        .feature-title{
          margin-top:14px;
          color:white;
          font-size:1rem;
          font-weight:700;
        }

        .feature-text{
          margin-top:10px;
          color:#94a3b8;
          font-size:0.9rem;
          line-height:1.7;
        }

        /* BUTTONS */
        .btn-group{
          display:flex;
          gap:18px;
          margin-top:45px;
          flex-wrap:wrap;
        }

        .btn-primary,
        .btn-secondary{
          padding:16px 28px;
          border-radius:16px;
          text-decoration:none;
          font-weight:700;
          transition:0.3s;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .btn-primary{
          background:linear-gradient(135deg,#2563eb,#4f46e5);
          color:white;
          box-shadow:0 15px 35px rgba(37,99,235,0.35);
        }

        .btn-primary:hover{
          transform:translateY(-3px);
          box-shadow:0 20px 40px rgba(37,99,235,0.45);
        }

        .btn-secondary{
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);
          color:#e2e8f0;
        }

        .btn-secondary:hover{
          background:rgba(255,255,255,0.08);
          transform:translateY(-3px);
        }

        /* FOOTER */
        .footer{
          margin-top:45px;
          display:flex;
          align-items:center;
          gap:18px;
          flex-wrap:wrap;
        }

        .status{
          display:flex;
          align-items:center;
          gap:10px;

          padding:10px 16px;
          border-radius:999px;

          background:rgba(34,197,94,0.12);
          border:1px solid rgba(34,197,94,0.2);
        }

        .dot{
          width:10px;
          height:10px;
          border-radius:50%;
          background:#4ade80;

          box-shadow:0 0 15px #4ade80;
        }

        .status span{
          color:#86efac;
          font-size:0.8rem;
          font-weight:700;
        }

        .footer-text{
          color:#64748b;
          font-size:0.85rem;
        }

        /* RIGHT SIDE */
        .right-side{
          position:relative;
          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,0.03),
              rgba(255,255,255,0.01)
            );

          border-left:1px solid rgba(255,255,255,0.06);

          display:flex;
          align-items:center;
          justify-content:center;

          padding:40px;
        }

        .security-panel{
          width:100%;
          max-width:380px;

          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);

          border-radius:28px;

          padding:30px;

          backdrop-filter:blur(14px);

          box-shadow:0 20px 40px rgba(0,0,0,0.35);
        }

        .security-top{
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .shield{
          width:70px;
          height:70px;
          border-radius:20px;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:2rem;

          background:linear-gradient(135deg,#2563eb,#7c3aed);

          box-shadow:0 10px 25px rgba(37,99,235,0.35);
        }

        .security-level{
          text-align:right;
        }

        .security-level h3{
          margin:0;
          color:white;
          font-size:1.1rem;
        }

        .security-level p{
          margin-top:6px;
          color:#94a3b8;
          font-size:0.85rem;
        }

        .security-stats{
          margin-top:35px;
          display:grid;
          gap:18px;
        }

        .security-item{
          display:flex;
          justify-content:space-between;
          align-items:center;

          padding:16px 18px;

          border-radius:16px;

          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.06);
        }

        .security-item span{
          color:#cbd5e1;
          font-size:0.95rem;
        }

        .security-item strong{
          color:white;
          font-size:1rem;
        }

        .security-alert{
          margin-top:30px;

          padding:18px;

          border-radius:18px;

          background:rgba(239,68,68,0.10);
          border:1px solid rgba(239,68,68,0.18);
        }

        .security-alert-title{
          color:#f87171;
          font-weight:700;
          font-size:0.95rem;
        }

        .security-alert-text{
          margin-top:10px;
          color:#fecaca;
          font-size:0.88rem;
          line-height:1.7;
        }

        /* RESPONSIVE */
        @media(max-width:1050px){

          .home-card{
            grid-template-columns:1fr;
          }

          .right-side{
            border-left:none;
            border-top:1px solid rgba(255,255,255,0.06);
          }

        }

        @media(max-width:768px){

          .home-container{
            padding:20px;
          }

          .left-side{
            padding:35px 25px;
          }

          .right-side{
            padding:25px;
          }

          .home-title{
            font-size:2.5rem;
          }

          .features{
            grid-template-columns:1fr;
          }

          .btn-group{
            flex-direction:column;
          }

          .btn-primary,
          .btn-secondary{
            width:100%;
          }

          .footer{
            flex-direction:column;
            align-items:flex-start;
          }

        }
      `}</style>

      <div className="home-container">

        {/* EFECTOS */}
        <div className="bg-line line-1"></div>
        <div className="bg-line line-2"></div>

        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>

        {/* CARD */}
        <div className="home-card">

          {/* LEFT */}
          <div className="left-side">

            <div className="top-badge">
              ENTERPRISE SECURITY PLATFORM
            </div>

            <h1 className="home-title">
              Plataforma de
              <br />
              <span className="gradient-text">
                Autenticación Segura
              </span>
            </h1>

            <p className="home-subtitle">
              Administra usuarios, protege accesos y supervisa
              toda la actividad de la plataforma mediante un
              sistema moderno de autenticación y control avanzado.
            </p>

            {/* FEATURES */}
            <div className="features">

              <div className="feature-card">
                <div className="feature-icon">🛡</div>

                <div className="feature-title">
                  Seguridad Avanzada
                </div>

                <div className="feature-text">
                  Protección en tiempo real con monitoreo de accesos
                  y validaciones inteligentes.
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚡</div>

                <div className="feature-title">
                  Alto Rendimiento
                </div>

                <div className="feature-text">
                  Arquitectura optimizada para operaciones rápidas
                  y gestión eficiente del sistema.
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">👥</div>

                <div className="feature-title">
                  Gestión de Usuarios
                </div>

                <div className="feature-text">
                  Control total sobre permisos, roles y sesiones activas.
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>

                <div className="feature-title">
                  Monitoreo Global
                </div>

                <div className="feature-text">
                  Visualiza actividad, reportes y estadísticas en tiempo real.
                </div>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="btn-group">

              <Link to="/login" className="btn-primary">
                Iniciar Sesión
              </Link>

              <Link to="/register" className="btn-secondary">
                Crear Cuenta
              </Link>

            </div>

            {/* FOOTER */}
            <div className="footer">

              <div className="status">
                <div className="dot"></div>
                <span>SERVIDORES ACTIVOS</span>
              </div>

              <div className="footer-text">
                © 2026 Auth Security Platform
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="right-side">

            <div className="security-panel">

              <div className="security-top">

                <div className="shield">
                  🔐
                </div>

                <div className="security-level">
                  <h3>Nivel Alto</h3>
                  <p>Protección activa</p>
                </div>

              </div>

              <div className="security-stats">

                <div className="security-item">
                  <span>Firewall</span>
                  <strong>Activo</strong>
                </div>

                <div className="security-item">
                  <span>2FA</span>
                  <strong>Habilitado</strong>
                </div>

                <div className="security-item">
                  <span>Sesiones Seguras</span>
                  <strong>124</strong>
                </div>

                <div className="security-item">
                  <span>Ataques Bloqueados</span>
                  <strong>38</strong>
                </div>

              </div>

              <div className="security-alert">

                <div className="security-alert-title">
                  Sistema Supervisado
                </div>

                <div className="security-alert-text">
                  La plataforma mantiene monitoreo continuo
                  sobre accesos, sesiones y eventos críticos
                  para garantizar máxima seguridad.
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}