import React, { useEffect, useState } from "react";
import CounterDisplay from "./CountDisplay";

function Counter({ incVal, incInt, initVal }) {
  const [count, setCount] = useState(initVal || 0);

  useEffect(() => {
    const handleIncrement = () => {
      setCount((prevCount) => prevCount + incVal);
    };
    const intervalId = setInterval(handleIncrement, incInt);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [incInt, incVal]);

  return <CounterDisplay count={count} />;
}

export default Counter;
