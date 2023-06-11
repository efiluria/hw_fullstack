import React, { Component } from "react";

export default class Counter extends Component {
  state = { counter: 0 };
  colors_ar = ["red", "blue", "green", "brown"];

  add = () => {
    if (this.state.counter == 5) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  };

  minus = () => {
    this.setState({ counter: this.state.counter - 1 });
    if (this.state.counter + 1 >= 40) {
      this.setState({ user: "jack" });
    }
  };

  render() {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ color: this.colors_ar[this.state.counter] }}
      >
        <h2>Counter: {this.state.counter}</h2>
        <div className="">
          <button onClick={this.add}> + {this.state.user}</button>
          <button onClick={this.minus}> - {this.state.user}</button>
        </div>
      </div>
    );
  }
}
