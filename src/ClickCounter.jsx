import React, { useEffect, useState } from "react";

function ClickCounter({ onCounterChange }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);
  const handleDesc = () => {
    setCount((count) => count - 1);
  };
  const handleInc = () => {
    setCount((count) => count + 1);
  };
  return (
    <div
      style={{ display: "block", marginBottom: 30 }}
      className="space-x-3 flex items-center mt-5"
    >
      <button
        className="bg-green-200 text-white  px-3 pt-1 pb-2 text-xl rounded-md"
        onClick={handleInc}
      >
        +
      </button>
      <span className="bg-blue-400  px-5 pt-3 pb-3 rounded-md text-white">
        {count}
      </span>
      <button
        className="bg-red-200 text-white  px-4 pt-1 pb-2 text-xl rounded-md"
        onClick={handleDesc}
      >
        -
      </button>
    </div>
  );
}

export default ClickCounter;
