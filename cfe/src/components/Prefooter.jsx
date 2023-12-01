import React from "react";
//import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import CFElogo1 from "../img/CFE1.png";
//import AppleStore from '../img/applestore.png';
//import GooglePlay from '../img/gplay.png';
import "../App.scss";

const Prefooter = () => {
  return (
    <footer className="prefooter">
      <div className="prefooter__columns">
        <div className="prefooter__column">
          <img src={CFElogo1} alt="CFE"/>
          
        </div>
        <div className="prefooter__column">
          <h3>Columna 2</h3>
          <ul>
            <li>Enlace 4</li>
            <li>Enlace 5</li>
            <li>Enlace 6</li>
          </ul>
        </div>
        <div className="prefooter__column">
          <h3>Columna 3</h3>
          <ul>
            <li>Enlace 7</li>
            <li>Enlace 8</li>
            <li>Enlace 9</li>
          </ul>
        </div>
        <div className="prefooter__column">
          <h3>Columna 4</h3>
          <ul>
            <li>Enlace 10</li>
            <li>Enlace 11</li>
            <li>Enlace 12</li>
          </ul>
        </div>
      </div>
    </footer>
  );
    
  };
  
  export default Prefooter;