import React, { useState } from "react";

const Accordions = () => {
  const [accordions, setAccordions] = useState([
    { id: 1, isOpen: false, title: "Hogar", 
    description: "El servicio de energía eléctrica de la CFE es esencial para el hogar mexicano, proporcionando electricidad confiable y accesible para iluminar nuestros espacios, alimentar electrodomésticos y mantenernos conectados. La CFE se compromete a brindar un servicio seguro y eficiente, contribuyendo al bienestar de los hogares alrededor del país." },
    { id: 2, isOpen: false, title: "Negocio", 
    description: "La energía eléctrica es un elemento vital para el funcionamiento de cualquier negocio, y la Comisión Federal de Electricidad (CFE) ofrece soluciones confiables y adaptadas a las necesidades de empresas de todos los tamaños. Con su compromiso por proporcionar un suministro eléctrico estable y eficiente, la CFE apoya el desarrollo empresarial al mantener operativos los equipos, sistemas y procesos fundamentales para el éxito comercial." },
    { id: 3, isOpen: false, title: "Industria", 
    description: "La industria requiere un suministro eléctrico robusto y confiable para impulsar sus operaciones. La Comisión Federal de Electricidad (CFE) ofrece soluciones energéticas adaptadas a las demandas específicas de la industria, proporcionando un suministro estable y eficiente para alimentar maquinaria, líneas de producción y procesos clave. Con un enfoque en la calidad y la continuidad del servicio, la CFE es un aliado fundamental para el crecimiento y la productividad en el sector industrial mexicano." },
    { id: 4, isOpen: false, title: "Agrícola y Servicios", 
    description: "En el sector agrícola, así como en el de servicios, la energía eléctrica es esencial para impulsar actividades fundamentales. La Comisión Federal de Electricidad (CFE) ofrece soluciones energéticas adaptadas a las necesidades específicas de estas áreas, brindando un suministro confiable y eficiente que respalda las labores agrícolas, riego, sistemas de refrigeración y otras operaciones esenciales. Con un compromiso hacia la calidad del servicio y la satisfacción del cliente, la CFE juega un papel crucial en el desarrollo y la sostenibilidad de estas actividades vitales para la economía mexicana." },
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
