import React from "react";
class App extends React.Component {
  handleSum(a, b) {
    return <h1>{a + b}</h1>;
  }
  render() {
    return this.handleSum(1, 2);
  }
}

export default App;
