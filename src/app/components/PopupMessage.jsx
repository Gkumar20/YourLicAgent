// src/app/components/PopupMessage.jsx
"use client";
import React from "react";

const PopupMessage = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm text-center">
              <button
        className="flex justify-end items-center w-full  hover:text-lg"
        onClick={onClose}
      >
        ❌
      </button>
        <h3 className="text-lg font-bold text-green-600 mb-2">🎉 Success</h3>
        <p className="text-gray-700 mb-4">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={onClose}
          >
            OK
          </button>

        </div>
      </div>
    </div>
  );
};

export default PopupMessage;
