import React, { useState } from "react";
import CFElogo3 from "../img/CFE3.jpeg";
import Menubar from "../img/menu.png";
import { Link } from 'react-router-dom';
import "../App.scss";
//
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
            <li className="headernav-item"><Link to="/cfedesc">Acerca</Link></li>
            <li className="headernav-item"><Link to="/servicios">Servicios</Link></li>
            <li className="headernav-item"><Link to="/simulator">Simulador de consumo</Link></li>
            <li className="headernav-item"><Link to="/location">Localización</Link></li>
          </ul>
        </div>
        <div className="LogSignbtns">
        <Link to="/signuplogin">
         <button className="LogInbtn">Iniciar sesión</button>
          </Link>
        <Link to="/signuplogin">
          <button className="SignUpbtn">Crear una cuenta</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;


