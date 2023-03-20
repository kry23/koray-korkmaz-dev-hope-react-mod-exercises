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
import Counter from "./Counter";
import NotFound from "./NotFound";
function App() {
  const [language, setLanguage] = useState("en");
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };
  const handleCounterChange = (count) => {
    console.log("counter value changed to ", count);
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
        <Route
          path="/counter"
          element={<Counter initVal={11} incInt={1000} incVal={3}></Counter>}
        />
        <Route path="users/:username" element={<GithubUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Link to="/" className="mx-3">
        Home
      </Link>
      <Link to="/counter" className="mx-3">
        Counter
      </Link>
      <Link to="/users/kry23" className="mx-3">
        User
      </Link>
      {/* <button onClick={navi}>GO</button> */}
    </div>
  );
}

export default App;
