import React, { Component } from "react";

export default class SelectColor extends Component {
  state = { color: "white" };
  amountRef = React.createRef();
  currencyRef = React.createRef();
  colorRef = React.createRef();

  //   onColorChange = () => {
  //     let total = this.amountRef.current.value * this.currencyRef.current.value;
  //     this.setState({ total: total.toLocaleString() });
  //   };

  onColorChange = () => {
    this.setState({ color: this.colorRef.current.value });
  };

  render() {
    return (
      <div className="row text-center py-3 justify-content-center align-items-center">
        <h2>selected color:{this.state.color}</h2>
        <div className=" col-md-4 ">
          <select
            ref={this.colorRef}
            onChange={this.onColorChange}
            className="form-select"
          >
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="orange">orange</option>
          </select>
        </div>
      </div>
    );
  }
}
