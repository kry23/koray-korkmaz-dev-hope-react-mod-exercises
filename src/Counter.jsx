import React from "react";
import CounterDisplay from "./CountDisplay";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  componentDidMount() {
    if (this.props.initVal) {
      this.setState({
        count: this.props.initVal,
      });
    }
    this.intervalId = setInterval(this.handleIncrement, this.props.incInt);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  handleIncrement() {
    this.setState((prevState) => ({
      count: prevState.count + this.props.incVal,
    }));
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

export default Counter;
/*
Can we do this without component cycle methods ?
I learn it, It could be in constructor but its too late for that now :)
*/
/*State-2 branch is actualy state -3  */
