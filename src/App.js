import { Hello } from "./Hello";
import { Message } from "./Message";
import React from "react";
import "./basic.css";
import { Welcome } from "./Welcome";
export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello></Hello>
        <Message></Message>
        <Welcome name={"John"}></Welcome>
      </div>
    );
  }
}
