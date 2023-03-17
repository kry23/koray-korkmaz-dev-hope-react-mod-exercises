import React, { useState } from "react";
import { Welcome } from "./Welcome";
function InteractiveWelcome() {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <form>
      <input onChange={handleChange} type="text" value={name} />
      <Welcome name={name} />
    </form>
  );
}

export default InteractiveWelcome;
