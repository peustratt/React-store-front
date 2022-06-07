import { Component } from "react";
import { Div } from './style'
import { connect } from 'react-redux';
import { addProduct } from '../../actions/cartActions'

class Product extends Component {
    render() {
        const price = this.props.prices.find(price => price.currency.label === this.props.currentCurrency)
        
        return (
            <Div inStock={this.props.inStock} className="Component">

                <div className="img-wrapper">
                    {!this.props.inStock && <span>Out of stock</span>}
                    <img src={this.props.gallery[0]} alt="none"/>
                </div>
                
                <h3>{this.props.brand} {this.props.name}</h3>
                <span>{price.currency.symbol}{price.amount}</span>

                <button onClick={() => this.props.addProduct(
                    {
                        name: this.props.name,
                        id: this.props.id,
                        prices: this.props.prices
                    })}>
                        add
                </button>
            </Div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, {
    addProduct,
})(Product);