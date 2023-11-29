import React from "react";
import "../App.scss";

const Navbar = () => {
  

  return (
    <nav className="navbar">
      <div className="nav-menu">
        <ul>
          <li className="nav-item">Acerca</li>
          <li className="nav-item">Servicios</li>
          <li className="nav-item">Simulador de consumo</li>
          <li className="nav-item">Localización</li>
          <li className="nav-item">Contacto</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
