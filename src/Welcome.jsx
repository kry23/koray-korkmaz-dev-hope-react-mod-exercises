import React from "react";
import Age from "./Age";
export class Welcome extends React.Component {
  static defaultProps = {
    name: "John",
  };

  state = {};
  render() {
    const age = 5;
    let ageComponent = null;

    if (age >= 18) {
      ageComponent = <Age age={age}></Age>;
    }
    return (
      <>
        <p>Welcome, {this.props.name}!</p>
        {ageComponent}
      </>
    );
  }
}
