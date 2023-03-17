import React from "react";
class ClickTracker extends React.Component {
  state = {
    clickedBtn: null,
  };
  constructor(props) {
    super(props);
    this.trackBtn = this.trackBtn.bind(this);
  }
  trackBtn(event) {
    const clickedBtn = event.target.textContent;
    this.setState({ clickedBtn });
  }
  render() {
    return (
      <div className="buttons-tracker">
        <button onClick={this.trackBtn} style={{ backgroundColor: "red" }}>
          1
        </button>
        <button onClick={this.trackBtn} style={{ backgroundColor: "green" }}>
          2
        </button>
        <button onClick={this.trackBtn} style={{ backgroundColor: "blue" }}>
          3
        </button>

        <h1>{this.state.clickedBtn}</h1>
      </div>
    );
  }
}

export default ClickTracker;
