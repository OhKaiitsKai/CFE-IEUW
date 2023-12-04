import React, { useState } from "react";

const Accordions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className={`accordion-header ${isOpen ? "open" : ""}`} onClick={toggleAccordion}>
        <h2>Accordion Title</h2>
        <span className={`icon ${isOpen ? "open" : ""}`}>&#x25BC;</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>Accordion Content Goes Here</p>
        </div>
      )}
    </div>
  );
};

export default Accordions;
