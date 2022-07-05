import { isNonNullType } from "graphql";
import { Component } from "react";
import { connect } from 'react-redux';

import CartPage from "./style";
import CartProduct from "../CartProduct";

class Cart extends Component {
  render() {
    const productsEL = this.props.cart.products.map((product, index) => {
      return <CartProduct isOverlay={false} key={index} product={product} currentCurrency={this.props.cart.currentCurrency} />
    })
    return <CartPage>
      <p className="page-title">Cart</p>
      <div className="products">
        {productsEL}
      </div>
    </CartPage>
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(Cart);