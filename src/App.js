import { Hello } from "./Hello";
import { Message } from "./Message";
import React from "react";
import "./basic.css";
import { Welcome } from "./Welcome";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import TodoList from "./TodoList";
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(name, password, event) {
    event.preventDefault();
    console.log(name, password);
  }
  render() {
    return (
      <div>
        {/* <Hello></Hello>
        <Message></Message>
        <InteractiveWelcome /> */}
        {/* <Login handleSubmit={this.handleSubmit} /> */}
        <TodoList />
      </div>
    );
  }
}
