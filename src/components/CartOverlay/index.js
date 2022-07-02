import { Component } from "react";
import { connect } from 'react-redux';

import Div from './style';
import CartProduct from '../CartProduct'

class CartOverlay extends Component {
    render() {
        let cartTotal = 0;
        const productsEL = this.props.cart.map((product, index) => {
            const price = product.prices.find(price => price.currency.label === this.props.currentCurrency.label)
            cartTotal += price.amount * product.quantity;
            return <CartProduct key={index} product={product} price={price} currentCurrency={this.props.currentCurrency} />
        })
     
        return (
            <Div>
                {productsEL}
                <div>total: {this.props.currentCurrency.symbol}{cartTotal}</div>
            </Div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartOverlay);

