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
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ClickCounter from "./ClickCounter";
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
  const navigate = useNavigate();
  const navi = () => {
    navigate("/hello");
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
      <Routes>
        <Route path="/" element={<Welcome name={"koray"} />} />
      </Routes>
      <button onClick={navi}>GO</button>
    </div>
  );
}

export default App;
