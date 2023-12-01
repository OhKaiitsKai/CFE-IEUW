import React, { useState, useEffect } from "react";
import "../App.scss";
import CFElogo1 from "../img/CFE1.png";
import CFElogo3 from "../img/CFE3.jpeg";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
      'https://via.placeholder.com/400x200/FF0000/FFFFFF',
      'https://via.placeholder.com/400x200/00FF00/FFFFFF',
      'https://via.placeholder.com/400x200/0000FF/FFFFFF',
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