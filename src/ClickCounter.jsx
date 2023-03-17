import React from "react";
class ClickCounter extends React.Component {
  state = {
    count: 0,
  };
  constructor(props) {
    super(props);
    this.handleInc = this.handleInc.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
  }
  handleDesc() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }
  handleInc() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <>
        <button onClick={this.handleInc}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleDesc}>-</button>
      </>
    );
  }
}

export default ClickCounter;
