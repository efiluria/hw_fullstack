import React, { Component } from "react";

export default class Gallery extends Component {
  state = { counter: 0 };
  pics_ar = ["cake1.jpg", "cake2.jpg", "cake3.jpg", "cake4.jpg"];

  onNextClick = () => {
    let counter = this.state.counter;
    this.setState({
      counter: counter < this.pics_ar.length - 1 ? counter + 1 : 0,
    });
  };

  onBackClick = () => {
    let counter = this.state.counter;
    this.setState({
      counter: counter > 0 ? counter - 1 : this.pics_ar.length - 1,
    });
  };

  render() {
    return (
      <div className="text-center   py-3">
        {" "}
        <img
          src={"/images/" + this.pics_ar[this.state.counter]}
          alt="cake"
          className="col-md-4"
        />
        <br />
        <button onClick={this.onBackClick}>back</button>
        <button onClick={this.onNextClick}>next</button>{" "}
      </div>
    );
  }
}
