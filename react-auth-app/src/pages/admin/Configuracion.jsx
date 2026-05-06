import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Configuracion() {
  const navigate = useNavigate();

  const [config, setConfig] = useState({
    mantenimiento: false,
    registros: true,
    seguridad2FA: true,
    notificaciones: true,
    apiPublica: false,
    maxUsuarios: 5000,
    version: "v2.4.1",
    servidor: "ONLINE",
  });

  const toggle = (key) => {
    setConfig({
      ...config,
      [key]: !config[key],
    });
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
            radial-gradient(circle at top left, rgba(139,92,246,0.15), transparent 25%),
            radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 25%),
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
          background:linear-gradient(90deg,#8b5cf6,#3b82f6);
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
          background:rgba(139,92,246,0.12);
          border:1px solid rgba(139,92,246,0.25);
          color:#c4b5fd;
          font-weight:700;
          backdrop-filter:blur(10px);
        }

        /* GRID */
        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(340px,1fr));
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
          height:130px;
          background:linear-gradient(135deg,#8b5cf6,#3b82f6);
          position:relative;
        }

        .card-icon{
          width:75px;
          height:75px;
          border-radius:20px;
          background:white;
          color:#7c3aed;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:2rem;
          position:absolute;
          bottom:-35px;
          left:25px;
          border:5px solid #020617;
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

        .info-box{
          margin-top:18px;
          padding:14px;
          border-radius:14px;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.06);
          color:#94a3b8;
          line-height:1.7;
          font-size:0.88rem;
        }

        /* SWITCH */
        .switch-row{
          margin-top:18px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:15px;
        }

        .switch-label{
          font-size:0.95rem;
          color:#e2e8f0;
        }

        .switch{
          width:60px;
          height:30px;
          border-radius:999px;
          background:#334155;
          position:relative;
          cursor:pointer;
          transition:0.3s;
        }

        .switch.active{
          background:#22c55e;
        }

        .switch-circle{
          width:24px;
          height:24px;
          border-radius:50%;
          background:white;
          position:absolute;
          top:3px;
          left:3px;
          transition:0.3s;
        }

        .switch.active .switch-circle{
          left:33px;
        }

        /* INPUT */
        .input{
          width:100%;
          margin-top:15px;
          padding:14px;
          border:none;
          border-radius:14px;
          background:rgba(255,255,255,0.06);
          color:white;
          border:1px solid rgba(255,255,255,0.08);
          outline:none;
        }

        .input::placeholder{
          color:#94a3b8;
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

        .save-btn{
          background:linear-gradient(135deg,#22c55e,#16a34a);
        }

        .danger-btn{
          background:linear-gradient(135deg,#ef4444,#dc2626);
        }

        .back-btn{
          background:linear-gradient(135deg,#475569,#334155);
        }

        /* STATUS */
        .status{
          margin-top:18px;
          display:inline-block;
          padding:8px 14px;
          border-radius:999px;
          font-size:0.8rem;
          font-weight:700;
        }

        .online{
          background:rgba(34,197,94,0.15);
          color:#4ade80;
        }

        /* ALERT */
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
            height:110px;
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
            <h1>⚙️ Configuración Global</h1>

            <p>
              Administra parámetros críticos de la plataforma, controla la
              seguridad del sistema y ajusta configuraciones avanzadas del entorno.
            </p>
          </div>

          <div className="badge">
            SYSTEM SETTINGS
          </div>

        </div>

        {/* GRID */}
        <div className="grid">

          {/* SEGURIDAD */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                🛡
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Seguridad del Sistema
              </div>

              <div className="card-desc">
                Controla mecanismos avanzados de protección y validación.
              </div>

              <div className="switch-row">
                <div className="switch-label">
                  Autenticación 2FA
                </div>

                <div
                  className={`switch ${config.seguridad2FA ? "active" : ""}`}
                  onClick={() => toggle("seguridad2FA")}
                >
                  <div className="switch-circle"></div>
                </div>
              </div>

              <div className="switch-row">
                <div className="switch-label">
                  API Pública
                </div>

                <div
                  className={`switch ${config.apiPublica ? "active" : ""}`}
                  onClick={() => toggle("apiPublica")}
                >
                  <div className="switch-circle"></div>
                </div>
              </div>

              <div className="info-box">
                Estado actual de protección:
                <br/>
                • Firewall activo
                <br/>
                • Encriptación habilitada
                <br/>
                • Protección anti ataques activa
              </div>

            </div>
          </div>

          {/* SISTEMA */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                💻
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Estado del Servidor
              </div>

              <div className="card-desc">
                Información general del entorno y recursos activos.
              </div>

              <div className="status online">
                {config.servidor}
              </div>

              <div className="info-box">
                • CPU: 38% uso
                <br/>
                • RAM: 62% disponible
                <br/>
                • Base de datos: conectada
                <br/>
                • Tiempo activo: 14 días
              </div>

              <input
                className="input"
                value={config.version}
                readOnly
              />

            </div>
          </div>

          {/* USUARIOS */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                👥
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Límites de Usuarios
              </div>

              <div className="card-desc">
                Define la capacidad máxima de usuarios permitidos.
              </div>

              <input
                className="input"
                value={config.maxUsuarios}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    maxUsuarios: e.target.value,
                  })
                }
              />

              <div className="info-box">
                Actualmente existen 1,240 usuarios registrados.
                El sistema mantiene un monitoreo automático de crecimiento.
              </div>

            </div>
          </div>

          {/* REGISTROS */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                📄
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Logs y Registros
              </div>

              <div className="card-desc">
                Activa el monitoreo de eventos internos del sistema.
              </div>

              <div className="switch-row">
                <div className="switch-label">
                  Logs automáticos
                </div>

                <div
                  className={`switch ${config.registros ? "active" : ""}`}
                  onClick={() => toggle("registros")}
                >
                  <div className="switch-circle"></div>
                </div>
              </div>

              <div className="switch-row">
                <div className="switch-label">
                  Notificaciones admin
                </div>

                <div
                  className={`switch ${config.notificaciones ? "active" : ""}`}
                  onClick={() => toggle("notificaciones")}
                >
                  <div className="switch-circle"></div>
                </div>
              </div>

              <div className="info-box">
                Último evento crítico detectado:
                <br/>
                Intento fallido de acceso administrativo.
              </div>

            </div>
          </div>

          {/* MANTENIMIENTO */}
          <div className="card">

            <div className="card-banner">
              <div className="card-icon">
                🔧
              </div>
            </div>

            <div className="card-content">

              <div className="card-title">
                Modo Mantenimiento
              </div>

              <div className="card-desc">
                Activa restricciones temporales mientras se realizan cambios críticos.
              </div>

              <div className="switch-row">
                <div className="switch-label">
                  Mantenimiento global
                </div>

                <div
                  className={`switch ${config.mantenimiento ? "active" : ""}`}
                  onClick={() => toggle("mantenimiento")}
                >
                  <div className="switch-circle"></div>
                </div>
              </div>

              <div className="info-box">
                Cuando este modo está activo:
                <br/>
                • Usuarios no podrán ingresar
                <br/>
                • APIs quedarán limitadas
                <br/>
                • Solo ADMIN podrá acceder
              </div>

            </div>
          </div>

        </div>

        {/* BUTTONS */}
        <div style={{ marginTop: "30px", display: "grid", gap: "15px" }}>

          <button className="btn save-btn">
            💾 Guardar Configuración
          </button>

          <button
            className="btn back-btn"
            onClick={() => navigate("/admin")}
          >
            ⬅ Volver al Panel Admin
          </button>

          <button className="btn danger-btn">
            🚨 Reiniciar Servicios
          </button>

        </div>

        {/* ALERT */}
        <div className="alert-box">

          <div className="alert-title">
            ⚠️ Advertencia Administrativa
          </div>

          <div className="alert-text">
            Los cambios realizados en esta sección afectan directamente
            el funcionamiento del sistema y la seguridad de la plataforma.
            Se recomienda validar cada modificación antes de aplicarla.
          </div>

        </div>

      </div>
    </>
  );
}