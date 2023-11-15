import React, { useState } from "react";
import faker from "faker";

const ReciboGenerador = () => {
  const [reciboGenerado, setReciboGenerado] = useState(null);

  const generarRecibo = () => {
    const nombreCliente = faker.name.findName();
    const direccionCliente = faker.address.streetAddress();
    const numeroCuenta = faker.random.number({ min: 1000000, max: 9999999 });
    const periodoFacturacion = faker.date.month();
    const consumoKwh = faker.random.number({ min: 100, max: 1000 });
    const montoTotal = faker.random.number({ min: 100, max: 1000 });

    const recibo = {
      nombreCliente,
      direccionCliente,
      numeroCuenta,
      periodoFacturacion,
      consumoKwh,
      montoTotal,
    };

    setReciboGenerado(recibo);
  };

  return (
    <div>
      <h2>Generador de Recibos</h2>
      <button onClick={generarRecibo}>Generar Recibo</button>

      {reciboGenerado && (
        <div>
          <h3>Recibo Generado:</h3>
          <p>
            <strong>Cliente:</strong> {reciboGenerado.nombreCliente}
          </p>
          <p>
            <strong>Dirección:</strong> {reciboGenerado.direccionCliente}
          </p>
          <p>
            <strong>Número de Cuenta:</strong> {reciboGenerado.numeroCuenta}
          </p>
          <p>
            <strong>Periodo de Facturación:</strong>{" "}
            {reciboGenerado.periodoFacturacion}
          </p>
          <p>
            <strong>Consumo kWh:</strong> {reciboGenerado.consumoKwh}
          </p>
          <p>
            <strong>Monto Total:</strong> ${reciboGenerado.montoTotal}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReciboGenerador;
