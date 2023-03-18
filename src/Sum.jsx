import React from "react";

function Sum({ numbers }) {
  const sum = numbers.reduce((x, y) => x + y);
  return <h1>{sum}</h1>;
}

export default Sum;
