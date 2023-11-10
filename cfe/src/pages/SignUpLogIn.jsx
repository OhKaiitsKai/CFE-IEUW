import React, { useState, useRef } from "react";
import CFElogo3 from "../img/CFE3.jpeg";

const SignUpLogIn = () => {
  const [showLogin, setShowLogin] = useState(true);
  const formContainer2Ref = useRef(null);

  const toggleForm = () => {
    setShowLogin(!showLogin);
    // Desplazar hacia el formContainer2 cuando se haga clic en "Crea una cuenta"
    if (!showLogin && formContainer2Ref.current) {
      formContainer2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={`formContainer ${showLogin ? "transition" : "hidden"}`}>
        <div className="formWrapper">
          <span className="logo">
            <img src={CFElogo3} alt="" />
          </span>
          <span className="titleforAcc">Inicio de sesión</span>
          <form action="#">
            <input required type="email" placeholder="Correo electrónico" />
            <input required type="password" placeholder="Contraseña" />
            <button>Iniciar sesión</button>
            <p>
              ¿No tienes una cuenta?
              <a href="#" className="signUp-link" onClick={toggleForm}>
                Crea una cuenta
              </a>
            </p>
          </form>
        </div>
      </div>

      <div
        ref={formContainer2Ref}
        className={`formContainer2 ${showLogin ? "hidden" : "transition"}`}
      >
        <div className="formWrapper2">
          <span className="logo">
            <img src={CFElogo3} alt="" />
          </span>
          <span className="titleforAcc">Crea una cuenta</span>
          <form action="#">
            <input required type="firstName" placeholder="Nombre" />
            <input required type="lastName" placeholder="Apellido" />
            <input required type="email" placeholder="Correo electrónico" />
            <input required type="password" placeholder="Contraseña" />
            <button>Registrarse</button>
            <p>
              ¿Ya tienes una cuenta?
              <a href="#" className="logIn-link" onClick={toggleForm}>
                Inicia sesión
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpLogIn;
