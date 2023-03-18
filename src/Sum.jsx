import React from "react";

function Sum({ numbers = [13, 15] }) {
  const sum = numbers.reduce((x, y) => x + y);
  return <h1>{sum}</h1>;
}

export default Sum;
