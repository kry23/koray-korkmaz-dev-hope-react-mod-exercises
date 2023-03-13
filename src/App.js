import { Hello } from "./Hello";
import { Message } from "./Message";
import React from "react";
export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello></Hello>
        <Message></Message>
      </div>
    );
  }
}
