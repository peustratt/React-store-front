import { Component } from "react";
import Div from './style'
import CartAttribute from "../CartAttribute";
import { connect } from 'react-redux';

import { changeProductQuantity } from '../../actions/cartActions'

class CartProduct extends Component {
  state = {
    selectedImage: this.props.product.gallery[0]
  }

  handleSelectedImage = (action) => {
    const selectedIndex = this.props.product.gallery.indexOf(this.state.selectedImage)
    const size = this.props.product.gallery.length

    switch(action) {
      case 'next':
        if (selectedIndex + 1 < size) {
          this.setState({selectedImage: this.props.product.gallery[selectedIndex+1]})
        } else {
          this.setState({selectedImage: this.props.product.gallery[0]})
        }
        break;

      case 'previous':
        if (selectedIndex - 1 >= 0) {
          this.setState({selectedImage: this.props.product.gallery[selectedIndex-1]})
        } else {
          this.setState({selectedImage: this.props.product.gallery[size-1]})
        }
        break;
        default:
          console.log('Invalid action argument for handleSelectedImage')
    }
  }

  render() {
    const product = this.props.product;
    const price = product.prices.find(price => price.currency.label === this.props.currentCurrency.label)

    const attributesEl = product.attributes.map((attribute, index) => {
      return <CartAttribute isOverlay={this.props.isOverlay} key={index} attribute={attribute} selectedAttributes={product.selectedAttributes} productId={product.id} />
    })

    return (
      <Div isOverlay={this.props.isOverlay}>
        <div className="main-content">
          <div className="header">
            <div className="brand">{product.brand}</div>
            <span>{product.name}</span>
            {this.props.isOverlay && <div className="item-price">{price.currency.symbol}{price.amount}</div>}

          </div>
          {attributesEl}
        </div>
        <div className="btns-wrapper">
          <button className="increment-product" onClick={() => this.props.changeProductQuantity({ id: product.id, selectedAttributes: product.selectedAttributes }, 'increment')}>+</button>
          <span>{product.quantity}</span>
          <button className="decrement-product" onClick={() => this.props.changeProductQuantity(product, 'decrement')}>-</button>
        </div>
        <div className="img-wrapper">
          <img src={this.state.selectedImage} alt=""></img>
          {!this.props.isOverlay && <div className="next-previous-wrapper">
            <button className="next" onClick={() => this.handleSelectedImage('next')}>&lt;</button>
            <button className="previous" onClick={() => this.handleSelectedImage('previous')}>&gt;</button>
          </div>}
        </div>

      </Div>
    )
  }
}

export default connect(null, { changeProductQuantity })(CartProduct);