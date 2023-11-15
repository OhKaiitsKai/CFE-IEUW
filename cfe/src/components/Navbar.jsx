import React, { useState } from "react";
import "../App.scss";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la acción de búsqueda
    console.log("Realizar búsqueda:", searchQuery);
    setSearchQuery("");
  };

  return (
    <nav className="navbar">
      <div className="nav-menu">
        <ul>
          <li className="nav-item">Inicio</li>
          <li className="nav-item">Acerca</li>
          <li className="nav-item">Servicios</li>
          <li className="nav-item">Contacto</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
