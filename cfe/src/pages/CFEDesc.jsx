import React from "react";
import Header from "../components/Header";
import CFEWidget from "../components/CFEWidget";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer";

const CFEDesc = () => {
     return(
        <>
        <Header/>
        <CFEWidget/> 
        <Prefooter/>
        <Footer/>
        </>
     );
};
export default CFEDesc;