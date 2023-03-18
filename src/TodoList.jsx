import React, { useState } from "react";

function TodoList({ todos }) {
  const [items, setItems] = useState(["123", "asdad", "dasd"]);
  const [inputVal, setInputVal] = useState("");

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const addToList = () => {
    setItems([...items, inputVal]);
    setInputVal("");
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input type="text" id="input" value={inputVal} onChange={handleInput} />
      <button onClick={addToList}>Send</button>
      <button onClick={clearList}>Reset</button>
    </>
  );
}

export default TodoList;
