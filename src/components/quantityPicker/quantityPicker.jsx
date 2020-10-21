import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
    minimum: 1,
  };

  render() {
    return (
      <div className="quantityPicker">
        <button
          disabled={this.state.quantity === this.state.minimum}
          onClick={this.decrease}
          className="btn btn-sm btn-info"
        >
          -
        </button>
        <label className="quantity">{this.state.quantity}</label>
        <button onClick={this.increase} className="btn btn-sm btn-info">
          +
        </button>
      </div>
    );
  }

  decrease = () => {
    let current = this.state.quantity;
    if (current !== this.state.minimum) {
      current -= 1;
      this.setState({ quantity: current });
    }
  };

  increase = () => {
    let current = this.state.quantity;
    current += 1;

    this.setState({ quantity: current });
  };
}

export default QuantityPicker;

// this
