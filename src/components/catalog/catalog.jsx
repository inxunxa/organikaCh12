import React, { Component } from "react";
import Product from "../product/product";

class Catalog extends Component {
  state = {};
  render() {
    return (
      <div className="catalog-page">
        <div>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
    );
  }
}

export default Catalog;
