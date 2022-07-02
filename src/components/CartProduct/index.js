import { Component } from "react";
import Div from './style'
import CartAttribute from "../CartAttribute";
import { connect } from 'react-redux';

import { changeProductQuantity } from '../../actions/cartActions'

class CartProduct extends Component {

    // send attributeId and itemId to cart reducer to handle selectedAttributes

    render() {
        const product = this.props.product;
        
        const attributesEl = product.attributes.map((attribute, index) => {
            return <CartAttribute key={index} attribute={attribute} selectedAttributes={product.selectedAttributes} productId={product.id} />
        })

        return (
            <Div>
                <div className="header">
                    <span>{product.name}</span>
                    <div>{this.props.price.currency.symbol}{this.props.price.amount}</div>
                    <button className="increment-product" onClick={() => this.props.changeProductQuantity({id: product.id, selectedAttributes: product.selectedAttributes}, 'increment')}>+</button>
                    <button className="decrement-product" onClick={() => this.props.changeProductQuantity(product, 'decrement')}>-</button>
                    <br />
                    <span>{product.quantity}</span>
                </div>
                {attributesEl}
            </Div>
        )
    }
}

export default connect(null, {changeProductQuantity})(CartProduct);