import React, { Component } from "react";
import { connect } from 'react-redux';

import { addProduct } from '../../actions/cartActions';
import Nav from './style'
import Currencies from '../Currencies'

class Navbar extends Component {
    state = {
        currencyDropdown: false,
    }

    handleCurrencyDropdown = () => {
        this.setState(prevState => ({ currencyDropdown: !prevState.currencyDropdown }))
    }

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
                {/* <span>{this.props.cart.length}</span> */}
                <div className="container" ref={this.container}>
                    <div className="btns-wrapper">
                        <button type="button" onClick={this.handleCurrencyDropdown}>{this.props.currentCurrency}</button>
                        <button type="button">{this.props.cart.length}</button>
                    </div>
                    <div className="dropdown">
                        {this.state.currencyDropdown &&
                            <Currencies
                                currencies={this.props.currencies}
                                currentCurrency={this.props.currentCurrency}
                                handleCurrency={this.props.handleCurrency}
                                handleCurrencyDropdown={this.handleCurrencyDropdown}
                            />}
                    </div>
                </div>
                {this.state.currencyDropdown && <div className="modal" onClick={this.handleCurrencyDropdown}></div>}
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