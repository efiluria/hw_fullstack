import React, { Component } from "react";

export default class SelectCake extends Component {
  state = { cake: "cake1.jpg" };
  cakeRef = React.createRef();

  onCakehange = () => {
    this.setState({ cake: this.cakeRef.current.value });
  };

  render() {
    return (
      <div className="row text-center py-3 justify-content-center align-items-center">
        <h2>selected cake:</h2>
        <div className=" col-md-4 ">
          <select
            ref={this.cakeRef}
            onChange={this.onCakehange}
            className="form-select"
          >
            <option value="cake1.jpg">cake 1</option>
            <option value="cake2.jpg">cake 2</option>
            <option value="cake3.jpg">cake 3</option>
            <option value="cake4.jpg">cake 4</option>
          </select>
          <img
            src={"/images/" + this.state.cake}
            alt="cake"
            className="col-md-4 py-2"
          />
          <br />
        </div>
      </div>
    );
  }
}
