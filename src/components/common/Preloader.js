import React, { useState, useEffect } from 'react';

const Preloader = ({ onLoadComplete }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <svg
        className="w-32 h-32"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="8"
        />
        {/* Animated arc */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#22C55E"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="283"
          strokeDashoffset="283"
          className="animate-[dash_1.5s_ease-in-out_infinite]"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Inner logo */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl font-bold fill-green-600"
        >
          Tasks Zetu
        </text>
      </svg>
    </div>
  );
};