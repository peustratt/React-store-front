import { Component } from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

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
                    <Link to="/cart" className="view-bag-btn">View bag</Link>
                    <Link to="/cart" className="checkout-btn">Checkout</Link>
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

