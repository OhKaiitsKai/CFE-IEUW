import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import AppleStore from '../img/applestore.png';
import GooglePlay from '../img/gplay.png';
import "../App.scss";

const Prefooter = () => {
    return (
      <div className="prefooter">
        <div className="prefooter__info">
          <h3>CFE</h3>
          <p>
            Oficinas Nacionales: <br />
            Av. Paseo de la Reforma 164, <br />
            Col. Juárez, C.P. 06600, <br />
            Ciudad de México. México
          </p>
          <p>Contacto: 55 5229 4400</p>
          <h4>ATENCIÓN AL CLIENTE:</h4>
          <p>MARCA 071</p>
          <div className="prefooter__downloads">
            <p>Descargas:</p>
            <div className="prefooter__download-icons">
               <img src={AppleStore} alt="Apple Store" /> 
               <img src={GooglePlay} alt="Google Play Store" /> 
            </div>
          </div>
        </div>
        <div className="prefooter__social">
          <h3>Síguenos en redes sociales:</h3>
          <div className="prefooter__social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            {/* Agrega más íconos si es necesario */}
          </div>
        </div>
        <div className="prefooter__legal">
          <h4>Legal:</h4>
          <ul>
            <li><a href="#">Aviso de privacidad</a></li>
            <li><a href="#">Términos y condiciones</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Prefooter;