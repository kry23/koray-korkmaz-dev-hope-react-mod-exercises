import { Hello } from "./Hello";
import { Message } from "./Message";
import React from "react";
import "./basic.css";
import { Welcome } from "./Welcome";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Hello></Hello>
        <Message></Message>
        <InteractiveWelcome /> */}
        <Login />
      </div>
    );
  }
}
