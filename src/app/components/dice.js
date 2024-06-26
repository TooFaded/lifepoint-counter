"use client";
import { useState } from "react";

export default function Dice() {
  const [rolling, setRolling] = useState(false);
  const [diceResult, setDiceResult] = useState(null);

  const rollDice = () => {
    setRolling(true);
    setDiceResult(null);

    setTimeout(() => {
      const result = Math.floor(Math.random() * 6) + 1;
      setDiceResult(result);
      setRolling(false);
    }, 1000); // Duration of the flip animation
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={rollDice}
        className="w-20 h-20 bg-gray-800 text-white rounded-lg flex items-center justify-center text-lg mb-4"
        disabled={rolling}
      >
        {rolling ? "Rolling..." : "Roll"}
      </button>
      <div className={`dice ${rolling ? "flipping" : ""} face-${diceResult}`}>
        {!rolling &&
          diceResult &&
          Array.from({ length: diceResult }, (_, i) => (
            <div key={i} className="dot"></div>
          ))}
      </div>
    </div>
  );
}
