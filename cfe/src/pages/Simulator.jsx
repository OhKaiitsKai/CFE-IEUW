import React from "react";
import Header from "../components/Header";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer";
import SimuladorRecibo from "../components/SimuladorRecibo";

const Simulator = () => {
    return(
       <>
       <Header/>
       <SimuladorRecibo />
       <Prefooter/>
       <Footer/>
       </>
    );
};
export default Simulator;