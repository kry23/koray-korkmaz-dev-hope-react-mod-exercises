import React, { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

function HookClickCounter({ initialValue = 0 }) {
  const { count, onDecrement, onIncrement, onReset } = useCounter(initialValue);
  return (
    <div
      style={{ display: "block", marginBottom: 30 }}
      className="space-x-3 flex items-center mt-5"
    >
      <button
        className="bg-green-200 text-white  px-3 pt-1 pb-2 text-xl rounded-md"
        onClick={onIncrement}
      >
        +
      </button>
      <span className="bg-blue-400  px-5 pt-3 pb-3 rounded-md text-white">
        {count}
      </span>
      <button
        className="bg-red-200 text-white  px-4 pt-1 pb-2 text-xl rounded-md"
        onClick={onDecrement}
      >
        -
      </button>
      <button
        className="bg-yellow-400 text-white  px-4 pt-1 pb-2 text-xl rounded-md"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}

export default HookClickCounter;
