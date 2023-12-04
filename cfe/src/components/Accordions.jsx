import React, { useState } from "react";

const Accordions = () => {
  const [accordions, setAccordions] = useState([
    { id: 1, isOpen: false, title: "Hogar", description: "Servicios para el hogar proporcionados por la CFE." },
    { id: 2, isOpen: false, title: "Negocio", description: "Servicios para negocios ofrecidos por la CFE." },
    { id: 3, isOpen: false, title: "Industria", description: "Servicios industriales proporcionados por la CFE." },
    { id: 4, isOpen: false, title: "Agrícola y Servicios", description: "Servicios agrícolas y otros proporcionados por la CFE." },
    // Agrega más objetos aquí si necesitas más acordeones
  ]);

  const toggleAccordion = (accordionId) => {
    setAccordions((prevAccordions) =>
      prevAccordions.map((accordion) =>
        accordion.id === accordionId ? { ...accordion, isOpen: !accordion.isOpen } : accordion
      )
    );
  };

  return (
    <div className="accordions-container">
      <h1 className="accordions-Servicios">Servicios</h1>
      {accordions.map((accordion) => (
        <div className="accordion" key={accordion.id}>
          <div
            className={`accordion-header ${accordion.isOpen ? "open" : ""}`}
            onClick={() => toggleAccordion(accordion.id)}
          >
            <h2 className="accordion-title">{accordion.title}</h2>
            <span className={`icon ${accordion.isOpen ? "open" : ""}`}>&#x25BC;</span>
          </div>
          {accordion.isOpen && (
            <div className="accordion-content">
              <p>{accordion.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordions;
