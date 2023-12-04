import React, { useState } from "react";

const Accordions = () => {
  const [accordions, setAccordions] = useState([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
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
      {accordions.map((accordion) => (
        <div className="accordion" key={accordion.id}>
          <div
            className={`accordion-header ${accordion.isOpen ? "open" : ""}`}
            onClick={() => toggleAccordion(accordion.id)}
          >
            <h2>Accordion Title {accordion.id}</h2>
            <span className={`icon ${accordion.isOpen ? "open" : ""}`}>&#x25BC;</span>
          </div>
          {accordion.isOpen && (
            <div className="accordion-content">
              <p>Accordion Content Goes Here {accordion.id}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordions;
