import React from "react";
import CFElogo3 from "../img/CFE3.jpeg";
import "../Home.scss";

const Header = () => {

    return(
        <div className="principalHeader">
             <div className="headerContainer">
        <span className="logoh">
          <img src={CFElogo3} alt="" />
        </span>
        <button className="LogInbtn">Iniciar sesión</button>
        <button className="SignUpbtn">Crear una cuenta</button>
      </div> 
        </div>

    )
};

export default Header;