import { isNonNullType } from "graphql";
import { Component } from "react";
import { connect } from 'react-redux';

import CartPage from "./style";

class Cart extends Component {
  render() {
    return <CartPage>Hellor products</CartPage>
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(Cart);