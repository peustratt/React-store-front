import { Component } from "react";
import { connect } from 'react-redux';

import OverlayContainer from './style';
import CartProduct from '../CartProduct'

class CartOverlay extends Component {
    render() {
        const productsEL = this.props.cart.products.map((product, index) => {
            return <CartProduct isOverlay={true} key={index} product={product} currentCurrency={this.props.currentCurrency} />
        })
     
        return (
            <OverlayContainer>
                {productsEL}
                <div className="cart-total"><span>Total</span><span className="price">{this.props.currentCurrency.symbol}{this.props.cart.total}</span></div>
                <div className="overlay-btns">
                    <button className="view-bag-btn">View bag</button>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </OverlayContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartOverlay);

