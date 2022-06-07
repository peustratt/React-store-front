import { Component } from "react";
import { connect } from 'react-redux';

import { addProduct } from '../../actions/cartActions';
import Nav from './style'
import Currency from '../Currency'
import Select from "../Currency/style";

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
                <Select
                    currencies={this.props.currencies}
                    currentCurrency={this.props.currentCurrency}
                    handleCurrency={this.handleCurrency} />
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