// Modal.js
import React from "react";

export default function WinnerModal({ isOpen, winner, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-custom-gradient p-8 rounded-lg text-center">
        <h2 className="text-2xl text-white font-bold mb-4">
          {winner} is the winner!
        </h2>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
