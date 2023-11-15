import React from "react";
import CFElogo from "../img/cfelogo.png";
import "../App.scss";

const Header = () => {
  return (
    <div className="principalHeader">
      <div className="headerContainer">
        <span className="logoh">
          <img src={CFElogo} alt="" />
        </span>
        <button className="LogInbtn">Iniciar sesión</button>
        <button className="SignUpbtn">Crear una cuenta</button>
      </div>
    </div>
  );
};

export default Header;
