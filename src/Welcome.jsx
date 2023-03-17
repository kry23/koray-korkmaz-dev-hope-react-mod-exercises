import React from "react";
export class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <p>Welcome, {this.props.name}!</p>;
  }
}
