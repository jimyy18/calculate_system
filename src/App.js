import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState(""); // To store the input value
  const [result, setResult] = useState(null); // To store the result (number, reciprocal, and difference)

  // Handle input change and only allow integers
  function handleInputChange(e) {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
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
          onChange={handleInputChange} // Update the input as the user types
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
