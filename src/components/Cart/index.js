import { Component } from "react";
import { connect } from 'react-redux';

import CartPage from "./style";
import CartProduct from "../CartProduct";

class Cart extends Component {
  render() {
    const productsEL = this.props.cart.products.map((product, index) => {
      return <CartProduct handleOverlay={this.props.handleOverlay} isOverlay={false} key={index} product={product} currentCurrency={this.props.cart.currentCurrency} />
    })
    const itemCount = this.props.cart.products.reduce((acc, product) => acc += product.quantity, 0)
    return <CartPage>
      <p className="page-title">Cart</p>
      <div className="products">
        {productsEL}
      </div>
      <div className="cart-summary">
        <div className="topic">
          <span>Tax 21%:</span>
          <span>Quantity:</span>
          <span className="total">Total:</span>
        </div>
        <div className="values">
          <span>{this.props.cart.currentCurrency.symbol}{Math.round(this.props.cart.total * 0.21 * 100) / 100}</span>
          <span>{itemCount}</span>
          <span>{this.props.cart.currentCurrency.symbol}{Math.round(this.props.cart.total * 100) / 100}</span>
        </div>
      </div>
      <button className="place-order">Order</button>
    </CartPage>
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(Cart);