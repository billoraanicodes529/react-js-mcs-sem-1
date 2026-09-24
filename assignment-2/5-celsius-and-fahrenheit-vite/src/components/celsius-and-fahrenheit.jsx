import { useState } from "react";
import React from "react";

function CelsiusAndFahrenheit() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertToFahrenheit = () => {
    const value = parseFloat(celsius);

    if (isNaN(value)) {
      setFahrenheit("");
      return;
    }

    const fah = (value * 9) / 5 + 32;
    setFahrenheit(fah.toFixed(2));
  };

  const convertToCelsius = () => {
    const value = parseFloat(fahrenheit);

    if (isNaN(value)) {
      setCelsius("");
      return;
    }

    const cel = ((value - 32) * 5) / 9;
    setCelsius(cel.toFixed(2));
  };

  return (
    <div>
      <h3>Temperature Converter</h3>

      <hr />

      <h3>Celsius to Fahrenheit</h3>

      <input
        type="number"
        placeholder="Enter Celsius Value..."
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />
        &emsp;
      <button onClick={convertToFahrenheit}>
        Convert Fah.
      </button>

      <p>Fahrenheit: {fahrenheit}</p>

      <hr />

      <h3>Fahrenheit to Celsius</h3>

      <input
        type="number"
        placeholder="Enter Fahrenheit Value..."
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}
      />
        &emsp;
      <button onClick={convertToCelsius}>
        Convert Cel.
      </button>

      <p>Celsius: {celsius}</p>

      <hr />
    </div>
  );
}

export default CelsiusAndFahrenheit;
