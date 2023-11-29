import React, {useState, useEffect} from 'react';
import "../App.scss";

const Carousel = () => {
    const items = [
      'Elemento 1',
      'Elemento 2',
      'Elemento 3',
      // ... más elementos aquí
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };
  
    // Función para cambiar automáticamente el índice cada cierto tiempo
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
      }, 3000); // Cambia cada 3 segundos (ajusta este valor según lo necesites)
  
      return () => {
        clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
      };
    }, [items.length]);
  
    return (
      <div className="carousel">
        <button className="control prev" onClick={goToPrev}>
          Prev
        </button>
        <div className="viewport">
          <div className="carousel-list" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {items.map((item, index) => (
              <div key={index} className="carousel-item">
                {item}
              </div>
            ))}
          </div>
        </div>
        <button className="control next" onClick={goToNext}>
          Next
        </button>
      </div>
    );
  };
  
  export default Carousel;
