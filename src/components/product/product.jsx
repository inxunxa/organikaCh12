import React, { Component } from "react";
import QuantityPicker from "../quantityPicker/quantityPicker";
import "./product.css";

class Product extends Component {
  state = {};

  render() {
    return (
      <div className="product">
        <img src="https://picsum.photos/150/200"></img>

        <h4>Title here</h4>

        <div className="prices">
          <h5>Total: $999</h5>
          <h6>Price: $99</h6>
        </div>

        <div className="controls">
          <QuantityPicker></QuantityPicker>
          <button className="btn btn-sm btn-info">Add</button>
        </div>
      </div>
    );
  }
}

export default Product;
