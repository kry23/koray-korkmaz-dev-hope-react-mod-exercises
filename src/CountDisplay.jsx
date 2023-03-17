import React from "react";
class CounterDisplay extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.count}</h1>;
  }
}

export default CounterDisplay;
