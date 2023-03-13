import React from "react";
class App extends React.Component {
  state = {};
  handleName(name) {
    return <h1>Hello, {name}</h1>;
  }
  render() {
    return this.handleName("kry");
  }
}

export default App;
