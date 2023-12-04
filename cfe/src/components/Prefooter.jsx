import React from "react";
import CFElogo1 from "../img/cfelogotr.png";
import "../App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Prefooter = () => {
  const linkStyle = {
    fontFamily: "'Arial', sans-serif", //font-family: Arial, Helvetica, sans-serif;
    color: "white", // Siempre será blanco
    textDecoration: "none", // Quitar el subrayado
    fontSize: "0.85em", // Tamaño de fuente más pequeño
    fontStyle: "italic", // Texto en cursiva
  };

  const ulStyle = {
    textAlign: "center", // Centrar los enlaces
  };

  const columnTitleStyle = {
    fontFamily: "'Arial', sans-serif",
    color: "white",
    textAlign: "center", // Centrar el texto en las columnas
    fontWeight: "bold", // Negrita para el nombre de las columnas
  };

  const logoStyle = {
    marginTop: "20px", // Ajustar el margen superior del logo
  };

  return (
    <footer className="prefooter" style={{ backgroundColor: "#333", color: "#CCC", borderTopColor: "rgba(0,0,0,0.2)" }}>
      <div className="prefooter__columns">
        <div className="prefooter__column" style={logoStyle}>
          <img src={CFElogo1} alt="CFE" />
        </div>
        <div className="prefooter__column">
          <h3 style={columnTitleStyle}>Ligas De Interés</h3>
          <ul style={ulStyle}>
            <li>
              <a
                href="https://www.cfe.mx/nuestraempresa/Pages/historia.aspx"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                ¿Quiénes Somos?
              </a>
            </li>
            <li>
              <a
                href="https://www.cfe.mx/estructura/Pages/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Nuestra Estructura
              </a>
            </li>
            <li>
              <a
                href="https://www.cfe.mx/transparencia_etica/Pages/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Transparencia
              </a>
            </li>
          </ul>
        </div>
        <div className="prefooter__column">
  <h3 style={columnTitleStyle}>Legal</h3>
  <ul style={ulStyle}>
    <li>
      <a
        href="https://www.example.com/terminos-y-condiciones"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Términos y Condiciones
      </a>
    </li>
    <li>
      <a
        href="https://www.example.com/aviso-de-privacidad"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Aviso de Privacidad
      </a>
    </li>
  </ul>
</div>
<div className="prefooter__column">
  <h3 style={columnTitleStyle}>Redes Sociales</h3>
  <ul style={ulStyle} className="social-icons">
    <li>
      <a
        href="https://www.facebook.com/tucuenta"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <FontAwesomeIcon icon={faFacebook} /> Facebook
      </a>
    </li>
    <li>
      <a
        href="https://www.youtube.com/tucanal"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <FontAwesomeIcon icon={faYoutube} /> YouTube
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/tuinstagram"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <FontAwesomeIcon icon={faInstagram} /> Instagram
      </a>
    </li>
  </ul>
</div>
      </div>
    </footer>
  );
};

export default Prefooter;
