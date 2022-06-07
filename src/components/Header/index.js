import { Component } from "react";
import { connect } from 'react-redux';

import {addProduct} from '../../actions/cartActions';

class Header extends Component {
    render() {
        return (
            <span>{this.props.cart.length}</span>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, {
    addProduct,
})(Header);