import React from "react";
class CounterDisplay extends React.Component {
  state = {};

  render() {
    return <h1>{this.props.count}</h1>;
  }
}

export default CounterDisplay;
