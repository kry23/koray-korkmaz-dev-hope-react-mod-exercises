import React from "react";
import Age from "./Age";
export function Welcome({ name = "John" }) {
  let age = 19;

  return (
    <div className="welcome">
      <p className="text-2xl font-bold">Welcome, {name}!</p>
      <Age age={age}></Age>

      {/* <Counter initVal={11} incInt={1000} incVal={3}></Counter> */}
      {/* <ClickCounter />
    <ClickTracker /> */}
    </div>
  );
}
