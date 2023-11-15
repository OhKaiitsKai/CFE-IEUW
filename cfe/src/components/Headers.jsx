import React, {useContext} from "react";
import CFElogo from "../img/cfelogo.png";
import "../App.scss";
//import {signOut} from "firebase/auth"
//import { auth } from '../firebase'
//import { AuthContext } from '../context/AuthContext'

const Headers = () => {
    //const {currentUser} = useContext(AuthContext)
  return (
    <div className="principalHeaders">
      <div className="headersContainer">
        <span className="logohs">
          <img src={CFElogo} alt="" />
        </span>
        <span className="userL">Intentp</span>
        <button className="SignUpbtn"> Cerrar sesión </button>
      </div>
    </div>
  );
};

export default Headers;