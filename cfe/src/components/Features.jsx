import React from "react";
import Iconbilling from "../img/billing.png";
import Iconmoney from "../img/money.png";
import Iconpayment from "../img/payment.png";
import Iconnotification from "../img/notification.png";

  const Features = () => {
    return (
      <section className="features">
        <div className="feature">
        <img src={Iconpayment} alt="" />
        <h2>Consulta y Pago de Recibos Eléctricos</h2>
        <p>
          Realiza consultas y pagos de tus recibos eléctricos de manera rápida y
          sencilla.
        </p>
        </div>
        <div className="feature">
        <img src={Iconbilling} alt="" />
          <h2>Consulta en línea</h2>
          <p>Accede a tu información de recibos desde cualquier lugar.</p>
        </div>
        <div className="feature">
        <img src={Iconmoney} alt="" />
          <h2>Pagos seguros</h2>
          <p>Realiza pagos seguros en línea con múltiples opciones de pago.</p>
        </div>
        <div className="feature">
        <img src={Iconnotification} alt="" />
          <h2>Notificaciones automáticas</h2>
          <p>Recibe recordatorios y alertas sobre tus recibos pendientes.</p>
        </div>
      </section>
    );
  };
  export default Features;