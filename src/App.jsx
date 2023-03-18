import React, { useState } from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";
import "./basic.css";
import { Welcome } from "./Welcome";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import TodoList from "./TodoList";
import Container from "./Container";
import DisplayLanguage from "./DisplayLanguage";
import LanguageContext from "./LanguageContext";
function App() {
  const [language, setLanguage] = useState("en");
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <div>
      {/* <Welcome /> */}
      {/*  <Hello></Hello>
    <Message></Message> */}
      {/* <InteractiveWelcome /> */}
      {/* <Login handleSubmit={this.handleSubmit} /> */}
      {/* <TodoList
      render={(items, removeItem) => {
        return items.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button
                className="bg-red-200 rounded-md p-2 ml-2"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </li>
          );
        });
      }}
    ></TodoList> */}
      <select value={language} onChange={handleLanguage}>
        <option value="en">EN</option>
        <option value="tr">TR</option>
        <option value="it">IT</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
      {/* <Container title={"where is my mind ?"} /> */}
    </div>
  );
}

export default App;
