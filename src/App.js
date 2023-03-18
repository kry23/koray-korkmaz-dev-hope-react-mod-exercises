import { Hello } from "./Hello";
import { Message } from "./Message";
import React from "react";
import "./basic.css";
import { Welcome } from "./Welcome";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import TodoList from "./TodoList";
import Container from "./Container";
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
        {/* <Welcome /> */}
        {/*  <Hello></Hello>
        <Message></Message> */}
        {/* <InteractiveWelcome /> */}
        {/* <Login handleSubmit={this.handleSubmit} /> */}
        <TodoList
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
        ></TodoList>
        {/* <Container title={"where is my mind ?"} /> */}
      </div>
    );
  }
}
