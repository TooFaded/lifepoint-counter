"use client";
import { useState } from "react";
import { Literata } from "next/font/google";

const literata = Literata({ subsets: ["latin"] });

export default function LifepointDisplay() {
  const [lifePoints1, setLifePoints1] = useState(8000);
  const [lifePoints2, setLifePoints2] = useState(8000);

  const animateLifePointsChange = (setLifePoints, targetValue) => {
    const startValue = targetValue > lifePoints1 ? lifePoints1 : lifePoints2;
    const steps = 20;
    const stepValue = (targetValue - startValue) / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setLifePoints((prev) => {
        const newValue = prev + stepValue;
        if (currentStep >= steps) {
          clearInterval(interval);
          return targetValue;
        }
        return newValue;
      });
    }, 20);
  };

  // Handlers to modify life points
  const handleIncrease = (setLifePoints, amount) => {
    const newLifePoints = Math.round(
      (setLifePoints === setLifePoints1 ? lifePoints1 : lifePoints2) + amount
    );
    animateLifePointsChange(setLifePoints, newLifePoints);
  };

  const handleDecrease = (setLifePoints, amount) => {
    const newLifePoints = Math.round(
      (setLifePoints === setLifePoints1 ? lifePoints1 : lifePoints2) - amount
    );
    animateLifePointsChange(setLifePoints, newLifePoints);
  };

  return (
    <>
      <div className="flex justify-between w-full max-w-6xl mx-auto flex-wrap">
        <div className="flex flex-col items-center">
          <div
            className={`h-[370px] w-[514px] md:w-[450px] lg:w-[514px] bg-custom-image bg-cover bg-center bg-no-repeat flex justify-center items-center text-9xl text-yellow-300 rounded-[32px] ${literata.className} text-stroke-black`}
          >
            {lifePoints1}
          </div>

          <div className="flex flex-col justify-center space-y-2 mt-4">
            <div className="flex space-x-6 mb-2">
              <button
                onClick={() => handleIncrease(setLifePoints1, 50)}
                className={`w-20 h-12 bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
              >
                +50
              </button>
              <button
                onClick={() => handleIncrease(setLifePoints1, 100)}
                className={`w-20 h-12 bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
              >
                +100
              </button>
              <button
                onClick={() => handleIncrease(setLifePoints1, 500)}
                className={`w-20 h-12 bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
              >
                +500
              </button>
              <button
                onClick={() => handleIncrease(setLifePoints1, 1000)}
                className={`w-20 h-12 bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
              >
                +1000
              </button>
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => handleDecrease(setLifePoints1, 50)}
                className={`w-20 h-12 bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
              >
                -50
              </button>
              <button
                onClick={() => handleDecrease(setLifePoints1, 100)}
                className={`w-20 h-12 bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
              >
                -100
              </button>
              <button
                onClick={() => handleDecrease(setLifePoints1, 500)}
                className={`w-20 h-12 bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
              >
                -500
              </button>
              <button
                onClick={() => handleDecrease(setLifePoints1, 1000)}
                className={`w-20 h-12 bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
              >
                -1000
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center sm:mt-2 mt-0">
          <div
            className={`h-[370px] w-[514px] md:w-[450px] lg:w-[514px] bg-custom-image bg-cover bg-center bg-no-repeat flex justify-center items-center text-9xl text-yellow-300 rounded-[32px] ${literata.className} text-stroke-black`}
          >
            {lifePoints2}
          </div>

          <div className="flex flex-col justify-center space-y-2 mt-4">
            <div className="flex space-x-6 mb-2">
              <button
                onClick={() => handleIncrease(setLifePoints2, 50)}
                className={`w-20 h-12 bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
              >
                +50
              </button>
              <button
                onClick={() => handleIncrease(setLifePoints2, 100)}
                className={`w-20 h-12 bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
              >
                +100
              </button>
              <button
                onClick={() => handleIncrease(setLifePoints2, 500)}
                className={`w-20 h-12 bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
              >
                +500
              </button>
              <button
                onClick={() => handleIncrease(setLifePoints2, 1000)}
                className={`w-20 h-12 bg-green-500 border-2 border-green-400 text-white ${literata.className} rounded`}
              >
                +1000
              </button>
            </div>
            <div className="flex space-x-6 mt-2">
              <button
                onClick={() => handleDecrease(setLifePoints2, 50)}
                className={`w-20 h-12 bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
              >
                -50
              </button>
              <button
                onClick={() => handleDecrease(setLifePoints2, 100)}
                className={`w-20 h-12 bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
              >
                -100
              </button>
              <button
                onClick={() => handleDecrease(setLifePoints2, 500)}
                className={`w-20 h-12 bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
              >
                -500
              </button>
              <button
                onClick={() => handleDecrease(setLifePoints2, 1000)}
                className={`w-20 h-12 bg-red-500 border-2 border-red-400 text-white ${literata.className} rounded`}
              >
                -1000
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
