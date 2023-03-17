import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  componentDidMount() {
    this.intervalId = setInterval(this.handleIncrement, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  handleIncrement() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default Counter;
/*
Can we do this without component cycle methods ?
*/
