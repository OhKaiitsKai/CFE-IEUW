import React from "react";
import Header from "../components/Header";
//import Carousel from "../components/Carousel";
import Features from "../components/Features";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Slider from "../components/Slider";

const Landing = () => {
  
    return (
      <>
        <Header />
        <Slider />
        <Features />
        <Testimonials />
        <Prefooter />
        <Footer />
      </>
    );
  };
  
    export default Landing;