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

  const removeItem = (it) => {
    setItems(items.filter((item, index) => index !== it));
  };

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => removeItem(index)}
              style={{ marginLeft: "20px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input type="text" id="input" value={inputVal} onChange={handleInput} />
      <button onClick={addToList}>Send</button>
      <button onClick={clearList}>Reset</button>
    </>
  );
}

export default TodoList;
