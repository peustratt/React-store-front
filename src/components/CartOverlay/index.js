import { Component } from "react";
import { connect } from 'react-redux';

import Div from './style';
import CartProduct from '../CartProduct'

class CartOverlay extends Component {
    render() {
        const productsEL = this.props.cart.products.map((product, index) => {
            return <CartProduct isOverlay={true} key={index} product={product} currentCurrency={this.props.currentCurrency} />
        })
     
        return (
            <Div>
                {productsEL}
                <div>total: {this.props.currentCurrency.symbol}{this.props.cart.total}</div>
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

