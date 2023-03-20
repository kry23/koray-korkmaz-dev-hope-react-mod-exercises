import React, { useState } from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";

import { Welcome } from "./Welcome";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import TodoList from "./TodoList";
import Container from "./Container";
import DisplayLanguage from "./DisplayLanguage";
import LanguageContext from "./LanguageContext";
import Sum from "./Sum";
import "./basic.css";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import HookClickCounter from "./HookClickCounter";
import UserForm from "./UserForm";
import HookGithubUser from "./HookGithubUser";
import CarDetails from "./CarDetails";
import FillteredList from "./FillteredList";
function App() {
  const [language, setLanguage] = useState("en");
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };
  const numbers = [12, 13, 14, 15];
  const initialdata = {
    model: "fiat",
    year: 1905,
    color: "yeloow",
  };

  const list = [
    {
      id: 1,
      name: "kry",
      age: 35,
    },
    {
      id: 2,
      name: "koray",
      age: 23,
    },
    {
      id: 3,
      name: "koko",
      age: 44,
    },
    {
      id: 4,
      name: "kokrk",
      age: 17,
    },
    {
      id: 5,
      name: "kokrk",
      age: 17,
    },
  ];
  return (
    <div>
      {/* <CarDetails initialdata={initialdata} /> */}
      {/* <HookGithubUser username={"kry23"} /> */}
      {/* <UserForm /> */}
      {/* <HookClickCounter /> */}
      <FillteredList list={list} />
      {/* <Welcome name="koray" /> */}
      {/* <GithubUserList /> */}
      {/* <Sum /> */}
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
      {/* <select value={language} onChange={handleLanguage}>
        <option value="en">EN</option>
        <option value="tr">TR</option>
        <option value="it">IT</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider> */}
      {/* <Container title={"where is my mind ?"} /> */}
    </div>
  );
}

export default App;
