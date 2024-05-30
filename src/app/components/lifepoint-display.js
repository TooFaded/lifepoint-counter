"use client";
import { useState } from "react";
import { Literata } from "next/font/google";
import { FaCheck } from "react-icons/fa";

const literata = Literata({ subsets: ["latin"], style: ["normal", "italic"] });

export default function LifepointDisplay() {
  const [lifePoints1, setLifePoints1] = useState(8000);
  const [lifePoints2, setLifePoints2] = useState(8000);
  const [tempLifePoints1, setTempLifePoints1] = useState(0);
  const [tempLifePoints2, setTempLifePoints2] = useState(0);

  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [isEditingPlayer1, setIsEditingPlayer1] = useState(false);
  const [isEditingPlayer2, setIsEditingPlayer2] = useState(false);

  const [winner, setWinner] = useState(null);

  const lifePointSound = new Audio("/points-drop.mp3");

  const animateLifePointsChange = (setLifePoints, targetValue, player) => {
    const startValue = player === "Player 1" ? lifePoints1 : lifePoints2;
    const steps = 50;
    const stepValue = (targetValue - startValue) / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setLifePoints((prev) => {
        const newValue = prev + stepValue;
        if (currentStep >= steps) {
          clearInterval(interval);
          const finalValue = Math.max(targetValue, 0);
          if (finalValue === 0) {
            setWinner(player === "Player 1" ? player2Name : player1Name);
          }
          return finalValue;
        }
        return Math.max(newValue, 0);
      });
    }, 50);
  };

  // Handlers to accumulate changes
  const handleAccumulateChange = (setTempLifePoints, amount) => {
    setTempLifePoints((prev) => prev + amount);
  };

  // Handler to apply changes
  const handleApplyChanges = (
    setLifePoints,
    tempLifePoints,
    setTempLifePoints
  ) => {
    const currentLifePoints =
      setLifePoints === setLifePoints1 ? lifePoints1 : lifePoints2;
    const newLifePoints = Math.max(
      Math.round(currentLifePoints + tempLifePoints),
      0
    ); // Ensure new life points are at least 0
    animateLifePointsChange(setLifePoints, newLifePoints);
    lifePointSound.play();
    setTempLifePoints(0);
  };

  return (
    <div className=" relative flex justify-between w-full max-w-6xl mx-auto flex-wrap">
      {winner && (
        <div
          className={`absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-4 text-3xl rounded-lg ${literata.className} `}
        >
          {winner} is the winner!
        </div>
      )}
      <div className="flex flex-col items-center">
        {/* Player1Name */}
        <div className="flex space-x-2 text-white text-2xl mb-2">
          {isEditingPlayer1 ? (
            <>
              <input
                value={player1Name}
                onChange={(e) => setPlayer1Name(e.target.value)}
                className="px-2 text-black rounded"
              />
              <button
                onClick={() => setIsEditingPlayer1(false)}
                className="px-2 text-black bg-blue-200 rounded"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <h1>{player1Name}</h1>
              <button
                onClick={() => setIsEditingPlayer1(true)}
                className="px-2 text-black bg-blue-200 rounded"
              >
                Edit
              </button>
            </>
          )}
        </div>
        <div
          className={`h-[370px] w-[514px] md:w-[450px] lg:w-[514px] bg-custom-image bg-cover bg-center bg-no-repeat flex justify-center items-center text-9xl text-yellow-300 rounded-[32px] ${literata.className} text-stroke-black italic font-medium shadow-lg`}
        >
          {Math.round(lifePoints1)}
        </div>
        <div
          className={`flex items-center text-3xl ${literata.className} text-yellow-300 mt-2`}
        >
          {/* Lifepoints to be applied to player 1 */}
          {tempLifePoints1 !== 0
            ? tempLifePoints1 > 0
              ? `+${tempLifePoints1}`
              : tempLifePoints1
            : ""}
          {tempLifePoints1 !== 0 && (
            <div className="text-lg ml-2">
              <button
                onClick={() =>
                  handleApplyChanges(
                    setLifePoints1,
                    tempLifePoints1,
                    setTempLifePoints1
                  )
                }
                className="p-2 bg-green-500 text-white rounded"
              >
                <FaCheck />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center space-y-2 mt-4">
          <div className="flex space-x-6 mb-2">
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints1, 50)}
              className={`w-20 h-12 text-lg bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
            >
              +50
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints1, 100)}
              className={`w-20 h-12 text-lg bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
            >
              +100
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints1, 500)}
              className={`w-20 h-12 text-lg bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
            >
              +500
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints1, 1000)}
              className={`w-20 h-12 text-lg bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
            >
              +1000
            </button>
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints1, -50)}
              className={`w-20 h-12 text-lg bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
            >
              -50
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints1, -100)}
              className={`w-20 h-12 text-lg bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
            >
              -100
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints1, -500)}
              className={`w-20 h-12 text-lg bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
            >
              -500
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints1, -1000)}
              className={`w-20 h-12 text-lg bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
            >
              -1000
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center sm:mt-2 mt-0">
        <div className="flex space-x-2 text-white text-2xl mb-2">
          {/* Player2Name */}
          {isEditingPlayer2 ? (
            <>
              <input
                value={player2Name}
                onChange={(e) => setPlayer2Name(e.target.value)}
                className="px-2 text-black rounded"
              />
              <button
                onClick={() => setIsEditingPlayer2(false)}
                className="px-2 text-black bg-blue-200 rounded"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <h1>{player2Name}</h1>
              <button
                onClick={() => setIsEditingPlayer2(true)}
                className="px-2 text-black bg-blue-200 rounded"
              >
                Edit
              </button>
            </>
          )}
        </div>
        <div
          className={`h-[370px] w-[514px] md:w-[450px] lg:w-[514px] bg-custom-image bg-cover bg-center bg-no-repeat flex justify-center items-center text-9xl text-yellow-300 rounded-[32px] ${literata.className} text-stroke-black italic font-medium shadow-lg`}
        >
          {Math.round(lifePoints2)}
        </div>
        {/* Lifepoints to be applied to player 2 */}
        <div
          className={`flex items-center text-3xl ${literata.className} text-yellow-300 mt-2`}
        >
          {tempLifePoints2 !== 0
            ? tempLifePoints2 > 0
              ? `+${tempLifePoints2}`
              : tempLifePoints2
            : ""}
          {tempLifePoints2 !== 0 && (
            <div className="text-lg ml-2">
              <button
                onClick={() =>
                  handleApplyChanges(
                    setLifePoints2,
                    tempLifePoints2,
                    setTempLifePoints2
                  )
                }
                className="p-2 bg-green-500 text-white rounded"
              >
                <FaCheck />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center space-y-2 mt-4">
          <div className="flex space-x-6 mb-2">
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints2, 50)}
              className={`w-20 h-12 text-lg bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
            >
              +50
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints2, 100)}
              className={`w-20 h-12 text-lg bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
            >
              +100
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints2, 500)}
              className={`w-20 h-12 text-lg bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
            >
              +500
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints2, 1000)}
              className={`w-20 h-12 text-lg bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
            >
              +1000
            </button>
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints2, -50)}
              className={`w-20 h-12 text-lg bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
            >
              -50
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints2, -100)}
              className={`w-20 h-12 text-lg bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
            >
              -100
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints2, -500)}
              className={`w-20 h-12 text-lg bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
            >
              -500
            </button>
            <button
              onClick={() => handleAccumulateChange(setTempLifePoints2, -1000)}
              className={`w-20 h-12 text-lg bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
            >
              -1000
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
