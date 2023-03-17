import React from "react";
export class Welcome extends React.Component {
  static defaultProps = {
    name: "John",
  };

  state = {};
  render() {
    return <p>Welcome, {this.props.name}!</p>;
  }
}
