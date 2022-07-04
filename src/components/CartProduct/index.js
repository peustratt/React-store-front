import { Component } from "react";
import Div from './style'
import CartAttribute from "../CartAttribute";
import { connect } from 'react-redux';

import { changeProductQuantity } from '../../actions/cartActions'

class CartProduct extends Component {

  // send attributeId and itemId to cart reducer to handle selectedAttributes

  render() {
    const product = this.props.product;
    console.log(product)
    const price = product.prices.find(price => price.currency.label === this.props.currentCurrency.label)

    const attributesEl = product.attributes.map((attribute, index) => {
      return <CartAttribute isOverlay={this.props.isOverlay} key={index} attribute={attribute} selectedAttributes={product.selectedAttributes} productId={product.id} />
    })

    return (
      <Div>
        <div className="main-content">
          <div className="header">
            <div>{product.brand}</div>
            <span>{product.name}</span>
            <div className="item-price">{price.currency.symbol}{price.amount}</div>

          </div>
          {attributesEl}
        </div>
        <div className="btns-wrapper">
          <button className="increment-product" onClick={() => this.props.changeProductQuantity({ id: product.id, selectedAttributes: product.selectedAttributes }, 'increment')}>+</button>
          <span>{product.quantity}</span>
          <button className="decrement-product" onClick={() => this.props.changeProductQuantity(product, 'decrement')}>-</button>
        </div>
        <div className="img-wrapper">
          <img src={product.gallery[0]} alt=""></img>
        </div>

      </Div>
    )
  }
}

export default connect(null, { changeProductQuantity })(CartProduct);