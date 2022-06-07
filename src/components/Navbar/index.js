import { Component } from "react";
import { connect } from 'react-redux';

import {addProduct} from '../../actions/cartActions';
import Nav from './style'

class Navbar extends Component {
    
    render() {
        const categoriesEl = this.props.categories.map((category, index) => {
            return (
                <li key={index}
                    onClick={this.props.handleCategory}
                    className={this.props.category === category.name ? 'selected' : ''}>
                    {category.name}
                    <span className="line"></span>
                </li>
            )
        })

        return (
            <Nav>
                <ul className="categories">{categoriesEl}</ul>
                <span>{this.props.cart.length}</span>
            </Nav>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, {
    addProduct,
})(Navbar);