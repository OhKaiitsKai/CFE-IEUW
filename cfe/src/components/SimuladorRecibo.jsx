import React, { useState } from 'react';

const TarifasPorTipo = {
  "1": { primeros100: 1, entre100y200: 1.5, masDe200: 2 },
  "1A": { primeros100: 1.2, entre100y200: 1.7, masDe200: 2.2 },
  // ... Otros tipos de tarifa y sus precios por kWh
};

const SimuladorRecibo = () => {
  const [consumo, setConsumo] = useState(0);
  const [tipoTarifa, setTipoTarifa] = useState("1"); // Tipo de tarifa por defecto

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue >= 0) {
      setConsumo(inputValue);
    }
  };

  const handleTipoTarifaChange = (event) => {
    setTipoTarifa(event.target.value);
  };

  const calcularCosto = () => {
    let costo = 0;
    const consumoNumero = parseFloat(consumo);

    const tarifas = TarifasPorTipo[tipoTarifa];

    if (tarifas) {
      if (consumoNumero <= 100) {
        costo = consumoNumero * tarifas.primeros100;
      } else if (consumoNumero <= 200) {
        costo = 100 * tarifas.primeros100 + (consumoNumero - 100) * tarifas.entre100y200;
      } else {
        costo = 100 * tarifas.primeros100 + 100 * tarifas.entre100y200 + (consumoNumero - 200) * tarifas.masDe200;
      }
    }

    return costo.toFixed(2);
  };

  const calcularIVA = () => {
    const costo = parseFloat(calcularCosto());
    const iva = costo * 0.16; // Suponiendo un IVA del 16%
    return iva.toFixed(2);
  };

  const calcularCostoTotal = () => {
    const costo = parseFloat(calcularCosto());
    const iva = parseFloat(calcularIVA());
    const costoTotal = costo + iva;
    return costoTotal.toFixed(2);
  };

  return (
    <div>
      <h1 className='Simulador'>Simulador de Recibo de Luz</h1>
      <p className='SimuladorDesc'>
        Este simulador te permite calcular el costo estimado de tu recibo de luz de la Comisión Federal de Electricidad (CFE)
        basado en tu consumo de kilovatios-hora (kWh) y el tipo de tarifa seleccionada. Ingresa tu consumo y elige tu tipo de
        tarifa para obtener un cálculo aproximado del costo total.
      </p>
      <form className='Formulario'>
        <label className='Consumo'>
          Ingrese consumo en kWh:
          <input type="number" value={consumo} onChange={handleInputChange} />
        </label>
        <label className='TipoTarifa'>
          Tipo de tarifa:
          <select value={tipoTarifa} onChange={handleTipoTarifaChange}>
            <option value="1">Tarifa 1</option>
            <option value="1A">Tarifa 1A</option>
            {/* Agregar más opciones de tipo de tarifa si es necesario */}
          </select>
        </label>
      </form>
      <h2 className='Costo'>Costo: ${calcularCosto()}</h2>
      <h2 className='IVA'>IVA: ${calcularIVA()}</h2>
      <h2 className='Total'>Costo Total con IVA: ${calcularCostoTotal()}</h2>
    </div>
  );
};

export default SimuladorRecibo;
