import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert("Completa los campos");
      return;
    }

    try {
      const res = await login(form);

      // REDIRECCIÓN SEGÚN ROL
      if (res.roles.includes("ROLE_ADMIN")) {
        navigate("/admin");
      } else if (res.roles.includes("ROLE_MODERATOR")) {
        navigate("/mod");
      } else {
        navigate("/user");
      }

    } catch (err) {
      console.error(err);
      alert("Error en login");
    }
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
          background:#020617;
        }

        .login-page{
          min-height:calc(100vh - 70px);
          display:flex;
          align-items:center;
          justify-content:center;
          position:relative;
          overflow:hidden;
          padding:30px;

          background:
            radial-gradient(circle at top left, rgba(59,130,246,0.14), transparent 25%),
            radial-gradient(circle at bottom right, rgba(139,92,246,0.12), transparent 25%),
            linear-gradient(135deg,#020617,#0f172a,#111827);
        }

        /* EFECTOS */
        .glow{
          position:absolute;
          width:350px;
          height:350px;
          border-radius:50%;
          filter:blur(90px);
          z-index:1;
        }

        .glow-1{
          top:-120px;
          left:-100px;
          background:rgba(59,130,246,0.12);
        }

        .glow-2{
          bottom:-140px;
          right:-100px;
          background:rgba(139,92,246,0.10);
        }

        .circle{
          position:absolute;
          border-radius:50%;
          border:1px solid rgba(255,255,255,0.05);
          z-index:1;
        }

        .circle-1{
          width:500px;
          height:500px;
          top:-250px;
          right:-200px;
        }

        .circle-2{
          width:400px;
          height:400px;
          bottom:-200px;
          left:-120px;
        }

        /* CARD */
        .login-card{
          position:relative;
          z-index:5;

          width:100%;
          max-width:1050px;

          display:grid;
          grid-template-columns:1fr 1fr;

          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);

          backdrop-filter:blur(18px);

          border-radius:32px;

          overflow:hidden;

          box-shadow:
            0 25px 50px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.04);
        }

        /* LEFT */
        .login-left{
          padding:70px;
          display:flex;
          flex-direction:column;
          justify-content:center;

          border-right:1px solid rgba(255,255,255,0.06);
        }

        .top-badge{
          width:max-content;

          padding:10px 18px;
          border-radius:999px;

          background:rgba(59,130,246,0.12);
          border:1px solid rgba(59,130,246,0.22);

          color:#93c5fd;

          font-size:0.78rem;
          font-weight:700;
          letter-spacing:1px;

          margin-bottom:28px;
        }

        .login-title{
          margin:0;

          font-size:3.4rem;
          line-height:1.1;

          font-weight:900;
          letter-spacing:-2px;

          color:white;
        }

        .gradient-text{
          background:linear-gradient(90deg,#60a5fa,#a78bfa);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .login-subtitle{
          margin-top:24px;

          color:#94a3b8;
          line-height:1.9;
          font-size:1.02rem;

          max-width:520px;
        }

        /* FEATURES */
        .features{
          margin-top:40px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:18px;
        }

        .feature{
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.06);

          border-radius:18px;

          padding:20px;

          transition:0.3s;
        }

        .feature:hover{
          transform:translateY(-5px);
          border-color:rgba(59,130,246,0.25);
        }

        .feature-icon{
          font-size:1.5rem;
        }

        .feature-title{
          margin-top:12px;
          color:white;
          font-weight:700;
        }

        .feature-text{
          margin-top:10px;
          color:#94a3b8;
          font-size:0.88rem;
          line-height:1.7;
        }

        /* RIGHT */
        .login-right{
          padding:60px;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .form-box{
          width:100%;
          max-width:380px;
        }

        .form-top{
          margin-bottom:30px;
        }

        .form-top h2{
          margin:0;
          color:white;
          font-size:2rem;
          font-weight:800;
        }

        .form-top p{
          margin-top:10px;
          color:#94a3b8;
          line-height:1.7;
          font-size:0.95rem;
        }

        /* INPUTS */
        .input-group{
          margin-bottom:22px;
        }

        .input-label{
          display:block;
          margin-bottom:10px;

          color:#cbd5e1;
          font-size:0.9rem;
          font-weight:600;
        }

        .input-control{
          width:100%;

          padding:16px 18px;

          border-radius:16px;

          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);

          color:white;
          font-size:1rem;

          outline:none;

          transition:0.3s;
        }

        .input-control::placeholder{
          color:#64748b;
        }

        .input-control:focus{
          border-color:#3b82f6;
          box-shadow:0 0 0 4px rgba(59,130,246,0.10);
        }

        /* OPTIONS */
        .options{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:10px;

          margin-bottom:28px;

          flex-wrap:wrap;
        }

        .remember{
          display:flex;
          align-items:center;
          gap:10px;

          color:#94a3b8;
          font-size:0.88rem;
        }

        .forgot{
          color:#60a5fa;
          text-decoration:none;
          font-size:0.88rem;
        }

        .forgot:hover{
          color:#93c5fd;
        }

        /* BUTTON */
        .login-button{
          width:100%;

          padding:16px;

          border:none;
          border-radius:16px;

          background:linear-gradient(135deg,#2563eb,#4f46e5);

          color:white;
          font-size:1rem;
          font-weight:700;

          cursor:pointer;

          transition:0.3s;

          box-shadow:0 15px 35px rgba(37,99,235,0.35);
        }

        .login-button:hover{
          transform:translateY(-3px);
          box-shadow:0 20px 40px rgba(37,99,235,0.45);
        }

        /* FOOTER */
        .form-footer{
          margin-top:28px;

          text-align:center;

          color:#94a3b8;
          font-size:0.92rem;
        }

        .register-link{
          color:#60a5fa;
          text-decoration:none;
          font-weight:700;
        }

        .register-link:hover{
          color:#93c5fd;
        }

        /* SECURITY BOX */
        .security-box{
          margin-top:30px;

          padding:18px;

          border-radius:18px;

          background:rgba(34,197,94,0.10);
          border:1px solid rgba(34,197,94,0.18);
        }

        .security-title{
          color:#86efac;
          font-weight:700;
          font-size:0.92rem;
        }

        .security-text{
          margin-top:10px;

          color:#bbf7d0;
          font-size:0.85rem;
          line-height:1.7;
        }

        /* RESPONSIVE */
        @media(max-width:950px){

          .login-card{
            grid-template-columns:1fr;
          }

          .login-left{
            border-right:none;
            border-bottom:1px solid rgba(255,255,255,0.06);
          }

        }

        @media(max-width:768px){

          .login-page{
            padding:20px;
          }

          .login-left,
          .login-right{
            padding:35px 25px;
          }

          .login-title{
            font-size:2.5rem;
          }

          .features{
            grid-template-columns:1fr;
          }

        }
      `}</style>

      <div className="login-page">

        {/* EFECTOS */}
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>

        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>

        {/* CARD */}
        <div className="login-card">

          {/* LEFT */}
          <div className="login-left">

            <div className="top-badge">
              AUTH SECURITY ACCESS
            </div>

            <h1 className="login-title">
              Acceso
              <br />
              <span className="gradient-text">
                Seguro
              </span>
            </h1>

            <p className="login-subtitle">
              Ingresa a la plataforma y administra usuarios,
              sesiones y permisos mediante un sistema moderno
              de autenticación y supervisión avanzada.
            </p>

            {/* FEATURES */}
            <div className="features">

              <div className="feature">
                <div className="feature-icon">🛡</div>

                <div className="feature-title">
                  Protección Avanzada
                </div>

                <div className="feature-text">
                  Sistema protegido con validaciones inteligentes y monitoreo.
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">⚡</div>

                <div className="feature-title">
                  Acceso Rápido
                </div>

                <div className="feature-text">
                  Inicio de sesión optimizado y seguro en tiempo real.
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">🔐</div>

                <div className="feature-title">
                  Control de Roles
                </div>

                <div className="feature-text">
                  Gestión segura de usuarios ADMIN, MOD y USER.
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">📊</div>

                <div className="feature-title">
                  Monitoreo
                </div>

                <div className="feature-text">
                  Supervisión completa de actividad y sesiones activas.
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="login-right">

            <div className="form-box">

              <div className="form-top">

                <h2>Iniciar Sesión</h2>

                <p>
                  Accede con tus credenciales para continuar dentro del sistema.
                </p>

              </div>

              <form onSubmit={handleSubmit}>

                <div className="input-group">

                  <label className="input-label">
                    Usuario
                  </label>

                  <input
                    className="input-control"
                    placeholder="Ingresa tu usuario..."
                    value={form.username}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        username: e.target.value
                      })
                    }
                  />

                </div>

                <div className="input-group">

                  <label className="input-label">
                    Contraseña
                  </label>

                  <input
                    className="input-control"
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password: e.target.value
                      })
                    }
                  />

                </div>

                <div className="options">

                  <div className="remember">
                    <input type="checkbox" />
                    Recordarme
                  </div>

                  <a href="#" className="forgot">
                    ¿Olvidaste tu contraseña?
                  </a>

                </div>

                <button
                  type="submit"
                  className="login-button"
                >
                  Ingresar al Sistema
                </button>

              </form>

              <div className="form-footer">

                ¿No tienes una cuenta?{" "}

                <Link
                  to="/register"
                  className="register-link"
                >
                  Crear cuenta
                </Link>

              </div>

              <div className="security-box">

                <div className="security-title">
                  🔒 Acceso Protegido
                </div>

                <div className="security-text">
                  Todas las sesiones y accesos son monitoreados
                  automáticamente para garantizar seguridad avanzada.
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}