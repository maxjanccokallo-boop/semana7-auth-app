import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Register() {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    roles: ["user"]
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      alert("Completa todos los campos");
      return;
    }

    try {
      await register(form);
      alert("Usuario registrado correctamente");
    } catch (err) {
      console.error(err);
      alert("Error al registrar");
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

        .register-page{
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
          width:360px;
          height:360px;
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
          top:-240px;
          right:-200px;
        }

        .circle-2{
          width:420px;
          height:420px;
          bottom:-220px;
          left:-140px;
        }

        /* CARD */
        .register-card{
          position:relative;
          z-index:5;

          width:100%;
          max-width:1150px;

          display:grid;
          grid-template-columns:1.05fr 0.95fr;

          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);

          backdrop-filter:blur(18px);

          border-radius:34px;

          overflow:hidden;

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

          border-right:1px solid rgba(255,255,255,0.06);
        }

        .top-badge{
          width:max-content;

          padding:10px 18px;
          border-radius:999px;

          background:rgba(139,92,246,0.12);
          border:1px solid rgba(139,92,246,0.22);

          color:#c4b5fd;

          font-size:0.78rem;
          font-weight:700;
          letter-spacing:1px;

          margin-bottom:28px;
        }

        .register-title{
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

        .register-subtitle{
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
          border-color:rgba(139,92,246,0.25);
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
        .right-side{
          padding:60px;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .form-box{
          width:100%;
          max-width:420px;
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
          border-color:#8b5cf6;
          box-shadow:0 0 0 4px rgba(139,92,246,0.10);
        }

        select.input-control{
          appearance:none;
          cursor:pointer;
        }

        option{
          background:#0f172a;
          color:white;
        }

        /* PASSWORD */
        .password-info{
          margin-top:10px;

          color:#64748b;
          font-size:0.8rem;
          line-height:1.6;
        }

        /* BUTTON */
        .register-button{
          width:100%;

          padding:16px;

          border:none;
          border-radius:16px;

          background:linear-gradient(135deg,#7c3aed,#4f46e5);

          color:white;
          font-size:1rem;
          font-weight:700;

          cursor:pointer;

          transition:0.3s;

          box-shadow:0 15px 35px rgba(124,58,237,0.35);

          margin-top:10px;
        }

        .register-button:hover{
          transform:translateY(-3px);
          box-shadow:0 20px 40px rgba(124,58,237,0.45);
        }

        /* FOOTER */
        .form-footer{
          margin-top:28px;

          text-align:center;

          color:#94a3b8;
          font-size:0.92rem;
        }

        .login-link{
          color:#a78bfa;
          text-decoration:none;
          font-weight:700;
        }

        .login-link:hover{
          color:#c4b5fd;
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
        @media(max-width:980px){

          .register-card{
            grid-template-columns:1fr;
          }

          .left-side{
            border-right:none;
            border-bottom:1px solid rgba(255,255,255,0.06);
          }

        }

        @media(max-width:768px){

          .register-page{
            padding:20px;
          }

          .left-side,
          .right-side{
            padding:35px 25px;
          }

          .register-title{
            font-size:2.5rem;
          }

          .features{
            grid-template-columns:1fr;
          }

        }
      `}</style>

      <div className="register-page">

        {/* EFECTOS */}
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>

        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>

        {/* CARD */}
        <div className="register-card">

          {/* LEFT */}
          <div className="left-side">

            <div className="top-badge">
              CREATE SECURE ACCOUNT
            </div>

            <h1 className="register-title">
              Crear una
              <br />
              <span className="gradient-text">
                Nueva Cuenta
              </span>
            </h1>

            <p className="register-subtitle">
              Regístrate dentro de la plataforma y accede
              a un sistema moderno de autenticación,
              monitoreo y administración segura.
            </p>

            {/* FEATURES */}
            <div className="features">

              <div className="feature">
                <div className="feature-icon">🔐</div>

                <div className="feature-title">
                  Seguridad Inteligente
                </div>

                <div className="feature-text">
                  Protección avanzada para usuarios y sesiones activas.
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">⚡</div>

                <div className="feature-title">
                  Acceso Instantáneo
                </div>

                <div className="feature-text">
                  Registro rápido y optimizado dentro del sistema.
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">🛡</div>

                <div className="feature-title">
                  Roles Protegidos
                </div>

                <div className="feature-text">
                  Gestión segura de permisos ADMIN, MOD y USER.
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">📊</div>

                <div className="feature-title">
                  Plataforma Moderna
                </div>

                <div className="feature-text">
                  Arquitectura moderna con monitoreo continuo.
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="right-side">

            <div className="form-box">

              <div className="form-top">

                <h2>Crear Cuenta</h2>

                <p>
                  Completa tu información para registrarte
                  dentro del sistema.
                </p>

              </div>

              <form onSubmit={handleSubmit}>

                {/* USERNAME */}
                <div className="input-group">

                  <label className="input-label">
                    Usuario
                  </label>

                  <input
                    className="input-control"
                    placeholder="Ej. max_admin"
                    value={form.username}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        username: e.target.value
                      })
                    }
                  />

                </div>

                {/* EMAIL */}
                <div className="input-group">

                  <label className="input-label">
                    Correo Electrónico
                  </label>

                  <input
                    className="input-control"
                    type="email"
                    placeholder="usuario@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value
                      })
                    }
                  />

                </div>

                {/* PASSWORD */}
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

                  <div className="password-info">
                    Usa una contraseña segura con letras,
                    números y símbolos.
                  </div>

                </div>

                {/* ROLE */}
                <div className="input-group">

                  <label className="input-label">
                    Rol del Sistema
                  </label>

                  <select
                    className="input-control"
                    value={form.roles[0]}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        roles: [e.target.value]
                      })
                    }
                  >
                    <option value="user">
                      Usuario Estándar
                    </option>

                    <option value="moderator">
                      Moderador
                    </option>

                    <option value="admin">
                      Administrador
                    </option>
                  </select>

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="register-button"
                >
                  Crear Cuenta
                </button>

              </form>

              {/* FOOTER */}
              <div className="form-footer">

                ¿Ya tienes una cuenta?{" "}

                <Link
                  to="/login"
                  className="login-link"
                >
                  Iniciar sesión
                </Link>

              </div>

              {/* SECURITY */}
              <div className="security-box">

                <div className="security-title">
                  🔒 Registro Seguro
                </div>

                <div className="security-text">
                  Toda la información es protegida mediante
                  protocolos de seguridad y validación avanzada.
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}