import React, { useState, useEffect } from "react";
import "../App.scss";
import slideri4 from "../img/slider4.jpg";
import slideri5 from "../img/slider5.jpg";
import slideri6 from "../img/slider6.jpg";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
      slideri4, // Reemplazar con la ruta correcta de tu imagen
      slideri5, // Reemplazar con la ruta correcta de tu imagen
      slideri6, // Reemplazar con la ruta correcta de tu imagen
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Cambiar cada 5 segundos (5000ms)
  
      return () => clearInterval(interval);
    }, [slides.length]);
  
    return (
      <div className="slider">
        <div
          className="slides-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Slider;
