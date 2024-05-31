"use client";
import { useState } from "react";

export default function Coin() {
  const [flipping, setFlipping] = useState(false);
  const [coinResult, setCoinResult] = useState(null);

  const flipCoin = () => {
    setFlipping(true);
    setCoinResult(null);

    setTimeout(() => {
      const result = Math.random() < 0.5 ? "Heads" : "Tails";
      setCoinResult(result);
      setFlipping(false);
    }, 1000); // Duration of the flip animation
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={flipCoin}
        className="w-20 h-20 bg-gray-800 text-white rounded-full flex items-center justify-center text-lg mb-4"
        disabled={flipping}
      >
        {flipping ? "Flipping..." : "Flip"}
      </button>
      <div className={`coin ${flipping ? "flipping" : ""}`}>
        {!flipping && coinResult}
      </div>
    </div>
  );
}
