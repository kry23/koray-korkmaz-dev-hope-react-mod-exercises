import React from "react";
import Age from "./Age";
export class Welcome extends React.Component {
  static defaultProps = {
    name: "John",
  };

  state = {};
  render() {
    return (
      <>
        <p>Welcome, {this.props.name}!</p>
        <Age age={19}></Age>
      </>
    );
  }
}
