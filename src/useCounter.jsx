import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(0);

  const handleDesc = () => {
    setCount((count) => count - 1);
  };
  const handleInc = () => {
    setCount((count) => count + 1);
  };
  const handleReset = () => {
    setCount(initialValue);
  };

  return {
    count: count,
    onDecrement: handleDesc,
    onIncrement: handleInc,
    onReset: handleReset,
  };
}
