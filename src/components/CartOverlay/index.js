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
                <div className="cart-total"><span>Total</span><span className="price">{this.props.currentCurrency.symbol}{Math.round(this.props.cart.total * 100) / 100}</span></div>
                <div className="overlay-btns">
                    <Link to="/cart" onClick={() => this.props.handleOverlay('close')} className="view-bag-btn">View bag</Link>
                    <Link to="/cart" onClick={() => this.props.handleOverlay('close')} className="checkout-btn">Checkout</Link>
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

