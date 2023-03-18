import React, { useState } from "react";

function TodoList({ render }) {
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
      <ul>{render(items, removeItem)}</ul>
      <div className="flex flex-col w-40 space-y-2">
        <input
          type="text"
          id="input"
          value={inputVal}
          className="grow-0"
          onChange={handleInput}
        />
        <button
          className="bg-green-300 text-white p-1 rounded-md grow-0"
          onClick={addToList}
        >
          Send
        </button>
        <button
          className=" grow-0 bg-red-300 text-white  p-1 rounded-md "
          onClick={clearList}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default TodoList;
