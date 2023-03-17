import React from "react";
import Age from "./Age";
import ClickCounter from "./ClickCounter";
// import Counter from "./Counter";
export class Welcome extends React.Component {
  static defaultProps = {
    name: "John",
  };

  state = {};
  render() {
    let age = 1;
    // let ageComponent = null;

    // if (age >= 18 && age < 65) {
    //   ageComponent = <Age age={age}></Age>;
    // }

    return (
      <>
        {this.props.name === "John" && <p>Welcome, {this.props.name}!</p>}
        <Age age={age}></Age>
        {/* <Counter initVal={11} incInt={1000} incVal={3}></Counter> */}
        <ClickCounter />
      </>
    );
  }
}
