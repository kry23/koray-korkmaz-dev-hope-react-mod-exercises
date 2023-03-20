import { useCallback, useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(0);

  const handleDesc = useCallback(function handleDesc() {
    setCount((count) => count - 1);
  }, []);
  const handleInc = useCallback(function handleInc() {
    setCount((count) => count + 1);
  }, []);
  const handleReset = useCallback(
    function handleReset() {
      setCount(initialValue);
    },
    [initialValue]
  );

  return {
    count: count,
    onDecrement: handleDesc,
    onIncrement: handleInc,
    onReset: handleReset,
  };
}
