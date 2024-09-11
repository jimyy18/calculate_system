import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  // Handle input change and only allow integers
  function handleInputChange(e) {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setInput(value);
  }

  // Logic to calculate reciprocal and difference
  function handleInput() {
    if (!input) {
      alert("Please enter a valid number");
      return;
    }

    const number = parseInt(input);
    const reciprocal = parseInt(input.split("").reverse().join(""));
    const difference = Math.abs(number - reciprocal);

    setResult({
      number,
      reciprocal,
      difference,
    });
  }

  return (
    <div className="App">
      <div>
        Number:{" "}
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
        />
        <button onClick={handleInput}>Submit</button>
      </div>

      {/* Display the result */}
      {result && (
        <div>
          <p>Original Number: {result.number}</p>
          <p>Reciprocal: {result.reciprocal}</p>
          <p>Difference: {result.difference}</p>
        </div>
      )}
    </div>
  );
}
