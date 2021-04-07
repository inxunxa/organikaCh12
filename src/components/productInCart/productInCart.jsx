import React, { Component } from "react";
import { connect } from "react-redux";
import "./productInCart.css";
import { removeProductFromCart } from "../../store/actions/actions";

class ProductInCart extends Component {
  state = {};
  render() {
    return (
      <div className="cartItem">
        <img
          src={"/products/" + this.props.data.product.image}
          alt="product"
        ></img>

        <div className="productInfo">
          <label className="description">{this.props.data.product.title}</label>
          <label className="price">${this.props.data.product.price}</label>
        </div>

        <label className="quantity">Quantity: {this.props.data.quantity}</label>

        <label className="total">
          ${this.props.data.quantity * this.props.data.product.price}
        </label>

        <i
          onClick={this.removeProduct}
          className="fa fa-trash-o remove"
          aria-hidden="true"
        ></i>
      </div>
    );
  }

  removeProduct = () => {
    // dispatch action
    this.props.removeProductFromCart(this.props.data);
  };
}

export default connect(null, { removeProductFromCart })(ProductInCart);

/**
 *
 * create action
 * create reducer
 * register reducer with root reducer
 *
 *
 * dispatch action to addTodo
 * read the todos from the store
 */
