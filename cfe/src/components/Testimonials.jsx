import React from "react";

const Testimonials = () => {
    return (
      <section className="testimonials">
        <h2>Testimonios</h2>
        <div className="testimonial">
          <p>
            "Gracias a esta plataforma, puedo consultar y pagar mis recibos de
            manera rápida y sin complicaciones. ¡Altamente recomendado!"
          </p>
          <p className="testimonial-author">- Juan Pérez</p>
        </div>
        <div className="testimonial">
          <p>
            "La mejor forma de mantenerme al día con mis pagos de electricidad.
            ¡Excelente servicio!"
          </p>
          <p className="testimonial-author">- María Gómez</p>
        </div>
      </section>
    );
  };
  export default Testimonials;