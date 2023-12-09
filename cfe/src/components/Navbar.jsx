import React from "react";
import CFElogo1 from "../img/cfelogotr.png";
import "../App.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-menu">
        <span className="logonav">
          <img src={CFElogo1} alt="Logo CFE" />
        </span>
        <ul className="nav-part">
          <li className="nav-item">Inicio</li>
          <li className="nav-item">Pago de Recibo</li>
          <li className="nav-item">Factura</li>
          <li className="nav-item">Movimientos</li>
          <li className="nav-item">Notificaciones</li>
        </ul>
        <ul className="nav-part">
          <li className="nav-op">Ajustes</li>
          <li className="nav-op">Cerrar sesión</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

