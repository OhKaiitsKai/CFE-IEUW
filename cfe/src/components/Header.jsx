import React, { useState } from "react";
import CFElogo3 from "../img/CFE3.jpeg";
import Menubar from "../img/menu.png";
import "../App.scss";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`principalHeader ${showMenu ? 'show-menu' : ''}`}>
      <div className="headerContainer">
        <span className="logoh">
          <img src={CFElogo3} alt=""/>
        </span>
        <div className="header-nav">
          <span className="menu-icon" onClick={toggleMenu}>
            <img src={Menubar} alt="Menú" />
          </span>
          <ul className={showMenu ? 'show-menu' : ''}>
            <li className="headernav-item">Acerca</li>
            <li className="headernav-item">Servicios</li>
            <li className="headernav-item">Simulador de consumo</li>
            <li className="headernav-item">Localización</li>
          </ul>
        </div>
        <div className="LogSignbtns">
          <button className="LogInbtn">Iniciar sesión</button>
          <button className="SignUpbtn">Crear una cuenta</button>
        </div>
      </div>
    </div>
  );
};

export default Header;


