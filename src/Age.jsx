import React from "react";
export class Age extends React.Component {
  state = {};
  render() {
    return <p>Your age is {this.props.age}.</p>;
  }
}

export default Age;
