import { Component } from "react";
import { connect } from 'react-redux';

import Div from './style';
import CartProduct from '../CartProduct'

class CartOverlay extends Component {
    render() {
        const productsEL = this.props.cart.map((product, index) => {
            return <CartProduct key={index} product={product} currentCurrency={this.props.currentCurrency} />
        })
     
        return (
            <Div>
                {productsEL}
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

