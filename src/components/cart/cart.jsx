import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCartCounter } from "../../store/actions/actions";
import ProductInCart from "../productInCart/productInCart";
import "./cart.css";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className="cart-container">
        {this.props.cart.map((p) => (
          <ProductInCart data={p} key={p.product.id}></ProductInCart>
        ))}
      </div>
    );
  }

  handleButtonClick = () => {
    console.log("Clicked!!!!");
    this.props.incrementCartCounter(); // dispatch the action
  };
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { incrementCartCounter })(Cart);
