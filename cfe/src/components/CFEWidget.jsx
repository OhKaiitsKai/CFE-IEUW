import React, { useState } from 'react';

const CFEWidget = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="cfe-widget">
      <div className="cfe-header" style={{ backgroundColor: '#07905c' }}>
        <h2>Comisión Federal de Electricidad</h2>
        <p>Empresa Productiva del Estado</p>
        <button className={`dropdown-btn ${dropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          {dropdownOpen ? 'Cerrar' : 'Ver más'}
        </button>
      </div>
      <div className={`cfe-content ${dropdownOpen ? 'open' : ''}`}>
        <div className="mission-vision">
          <h3>Misión:</h3>
          <p>Proporcionar servicios de energía eléctrica segura, confiable, sustentable y accesible para contribuir al desarrollo nacional.</p>
          <h3>Visión:</h3>
          <p>Ser una empresa líder, reconocida por su eficiencia operativa, innovación tecnológica y compromiso con el medio ambiente y la sociedad.</p>
        </div>
      </div>
    </div>
  );
};

export default CFEWidget;

