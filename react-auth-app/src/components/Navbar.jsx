import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Cerrar menú al cambiar ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <style>{`
        :root{
          --navbar-height:72px;
        }

        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          padding-top:var(--navbar-height);
          font-family:'Inter',sans-serif;
          background:#020617;
        }

        /* NAVBAR */
        .navbar{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:var(--navbar-height);

          z-index:99999;

          background:
            linear-gradient(
              135deg,
              rgba(2,6,23,0.92),
              rgba(15,23,42,0.92)
            );

          backdrop-filter:blur(16px);

          border-bottom:1px solid rgba(255,255,255,0.06);

          box-shadow:
            0 10px 30px rgba(0,0,0,0.35),
            inset 0 -1px 0 rgba(255,255,255,0.03);
        }

        /* LINEA */
        .navbar::before{
          content:"";
          position:absolute;
          bottom:0;
          left:0;

          width:100%;
          height:1px;

          background:linear-gradient(
            90deg,
            transparent,
            rgba(59,130,246,0.35),
            rgba(139,92,246,0.35),
            transparent
          );
        }

        .nav-container{
          max-width:1400px;
          height:100%;

          margin:auto;
          padding:0 24px;

          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        /* LEFT */
        .nav-left{
          display:flex;
          align-items:center;
          gap:18px;
        }

        /* LOGO */
        .nav-brand-group{
          display:flex;
          align-items:center;
          gap:14px;

          text-decoration:none;
        }

        .nav-icon{
          width:42px;
          height:42px;

          border-radius:14px;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:1.2rem;

          background:linear-gradient(
            135deg,
            #2563eb,
            #7c3aed
          );

          box-shadow:
            0 10px 25px rgba(37,99,235,0.35);

          transition:0.3s;
        }

        .nav-brand-group:hover .nav-icon{
          transform:rotate(-6deg) scale(1.05);
        }

        .nav-brand{
          font-size:1.45rem;
          font-weight:900;
          letter-spacing:-1px;

          color:white;
        }

        .nav-brand span{
          background:linear-gradient(
            90deg,
            #60a5fa,
            #a78bfa
          );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        /* CENTER LINKS */
        .nav-links{
          display:none;
          align-items:center;
          gap:10px;
        }

        .nav-link{
          position:relative;

          padding:11px 16px;

          border-radius:12px;

          color:#cbd5e1;
          text-decoration:none;
          font-size:0.95rem;
          font-weight:600;

          transition:0.3s;
        }

        .nav-link:hover{
          color:white;
          background:rgba(255,255,255,0.04);
        }

        .nav-link.active{
          color:white;
          background:rgba(59,130,246,0.12);
          border:1px solid rgba(59,130,246,0.18);
        }

        /* ROLE */
        .role-link{
          padding:10px 15px;

          border-radius:999px;

          text-decoration:none;

          font-size:0.82rem;
          font-weight:700;

          transition:0.3s;
        }

        .role-admin{
          background:rgba(239,68,68,0.12);
          color:#fca5a5;
          border:1px solid rgba(239,68,68,0.18);
        }

        .role-admin:hover{
          background:rgba(239,68,68,0.18);
        }

        .role-mod{
          background:rgba(245,158,11,0.12);
          color:#fcd34d;
          border:1px solid rgba(245,158,11,0.18);
        }

        .role-mod:hover{
          background:rgba(245,158,11,0.18);
        }

        .role-user{
          background:rgba(59,130,246,0.12);
          color:#93c5fd;
          border:1px solid rgba(59,130,246,0.18);
        }

        .role-user:hover{
          background:rgba(59,130,246,0.18);
        }

        /* RIGHT */
        .nav-right{
          display:none;
          align-items:center;
          gap:14px;
        }

        /* USER */
        .user-box{
          display:flex;
          align-items:center;
          gap:12px;

          padding:8px 10px;

          border-radius:16px;

          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.06);
        }

        .avatar{
          width:38px;
          height:38px;

          border-radius:12px;

          display:flex;
          align-items:center;
          justify-content:center;

          background:linear-gradient(
            135deg,
            #2563eb,
            #7c3aed
          );

          color:white;
          font-weight:800;
          font-size:0.9rem;
        }

        .user-info{
          display:flex;
          flex-direction:column;
        }

        .user-name{
          color:white;
          font-size:0.82rem;
          font-weight:700;
        }

        .user-role{
          color:#64748b;
          font-size:0.72rem;
        }

        /* BUTTONS */
        .btn-login{
          color:#cbd5e1;
          text-decoration:none;
          font-weight:600;

          transition:0.3s;
        }

        .btn-login:hover{
          color:white;
        }

        .btn-register{
          padding:12px 18px;

          border-radius:14px;

          text-decoration:none;
          font-size:0.9rem;
          font-weight:700;

          color:white;

          background:linear-gradient(
            135deg,
            #2563eb,
            #7c3aed
          );

          box-shadow:
            0 10px 25px rgba(37,99,235,0.25);

          transition:0.3s;
        }

        .btn-register:hover{
          transform:translateY(-3px);
          box-shadow:
            0 15px 35px rgba(37,99,235,0.35);
        }

        .btn-logout{
          padding:10px 14px;

          border:none;
          border-radius:12px;

          background:rgba(239,68,68,0.12);
          border:1px solid rgba(239,68,68,0.16);

          color:#fca5a5;

          font-size:0.8rem;
          font-weight:700;

          cursor:pointer;

          transition:0.3s;
        }

        .btn-logout:hover{
          background:rgba(239,68,68,0.18);
        }

        /* MOBILE BTN */
        .nav-mobile-btn{
          width:44px;
          height:44px;

          border:none;
          border-radius:14px;

          display:flex;
          align-items:center;
          justify-content:center;

          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.06);

          color:white;
          font-size:1.2rem;

          cursor:pointer;

          transition:0.3s;
        }

        .nav-mobile-btn:hover{
          background:rgba(255,255,255,0.08);
        }

        /* MOBILE MENU */
        .mobile-menu{
          position:absolute;
          top:var(--navbar-height);
          left:0;

          width:100%;

          padding:18px;

          background:
            linear-gradient(
              180deg,
              rgba(2,6,23,0.98),
              rgba(15,23,42,0.98)
            );

          border-bottom:1px solid rgba(255,255,255,0.06);

          display:flex;
          flex-direction:column;
          gap:12px;

          animation:menuAnimation 0.25s ease;
        }

        @keyframes menuAnimation{
          from{
            opacity:0;
            transform:translateY(-10px);
          }

          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .mobile-link{
          padding:14px 16px;

          border-radius:14px;

          text-decoration:none;

          color:#e2e8f0;
          font-weight:600;

          background:rgba(255,255,255,0.03);
          border:1px solid rgba(255,255,255,0.05);

          transition:0.3s;
        }

        .mobile-link:hover{
          background:rgba(255,255,255,0.06);
        }

        .mobile-user{
          margin-top:10px;

          padding:16px;

          border-radius:18px;

          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.06);
        }

        .mobile-user-top{
          display:flex;
          align-items:center;
          gap:12px;

          margin-bottom:14px;
        }

        .mobile-actions{
          display:flex;
          gap:12px;
        }

        /* RESPONSIVE */
        @media(min-width:768px){

          .nav-links{
            display:flex;
          }

          .nav-right{
            display:flex;
          }

          .nav-mobile-btn{
            display:none;
          }

          .mobile-menu{
            display:none;
          }

        }

        @media(max-width:768px){

          .nav-brand{
            font-size:1.2rem;
          }

          .nav-container{
            padding:0 16px;
          }

        }
      `}</style>

      <nav className="navbar">

        <div className="nav-container">

          {/* LEFT */}
          <div className="nav-left">

            {/* LOGO */}
            <Link
              to="/"
              className="nav-brand-group"
            >
              <div className="nav-icon">
                🔐
              </div>

              <div className="nav-brand">
                Auth<span>App</span>
              </div>
            </Link>

            {/* LINKS */}
            <div className="nav-links">

              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>

              {user?.roles.includes("ROLE_ADMIN") && (
                <Link
                  to="/admin"
                  className="role-link role-admin"
                >
                  ADMIN
                </Link>
              )}

              {user?.roles.includes("ROLE_MODERATOR") && (
                <Link
                  to="/mod"
                  className="role-link role-mod"
                >
                  MODERATOR
                </Link>
              )}

              {user?.roles.includes("ROLE_USER") && (
                <Link
                  to="/user"
                  className="role-link role-user"
                >
                  USER
                </Link>
              )}

            </div>

          </div>

          {/* RIGHT */}
          <div className="nav-right">

            {user ? (
              <>

                <div className="user-box">

                  <div className="avatar">
                    {user.username?.charAt(0).toUpperCase()}
                  </div>

                  <div className="user-info">

                    <div className="user-name">
                      @{user.username}
                    </div>

                    <div className="user-role">
                      {user.roles?.[0]}
                    </div>

                  </div>

                </div>

                <button
                  onClick={logout}
                  className="btn-logout"
                >
                  Cerrar sesión
                </button>

              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn-login"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="btn-register"
                >
                  Registrarse
                </Link>
              </>
            )}

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-mobile-btn"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="mobile-menu">

            <Link
              to="/"
              className="mobile-link"
            >
              🏠 Home
            </Link>

            {user ? (
              <>
                {user.roles.includes("ROLE_ADMIN") && (
                  <Link
                    to="/admin"
                    className="mobile-link"
                  >
                    👑 Panel Admin
                  </Link>
                )}

                {user.roles.includes("ROLE_MODERATOR") && (
                  <Link
                    to="/mod"
                    className="mobile-link"
                  >
                    🛡 Panel Moderador
                  </Link>
                )}

                {user.roles.includes("ROLE_USER") && (
                  <Link
                    to="/user"
                    className="mobile-link"
                  >
                    👤 Panel Usuario
                  </Link>
                )}

                <div className="mobile-user">

                  <div className="mobile-user-top">

                    <div className="avatar">
                      {user.username?.charAt(0).toUpperCase()}
                    </div>

                    <div className="user-info">

                      <div className="user-name">
                        @{user.username}
                      </div>

                      <div className="user-role">
                        {user.roles?.[0]}
                      </div>

                    </div>

                  </div>

                  <div className="mobile-actions">

                    <button
                      onClick={logout}
                      className="btn-logout"
                    >
                      Cerrar sesión
                    </button>

                  </div>

                </div>

              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="mobile-link"
                >
                  🔑 Iniciar Sesión
                </Link>

                <Link
                  to="/register"
                  className="mobile-link"
                >
                  ✨ Crear Cuenta
                </Link>
              </>
            )}

          </div>
        )}

      </nav>
    </>
  );
}