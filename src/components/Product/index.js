import { Component } from "react";
import { ProductContainer } from './style'
import { connect } from 'react-redux';
import { addProduct } from '../../actions/cartActions'
import { Link } from "react-router-dom";

class Product extends Component {
    render() {
        const price = this.props.prices.find(price => price.currency.label === this.props.currentCurrency.label)

        return (
            <ProductContainer inStock={this.props.inStock} className="Component">

                <Link  className="product-link" to={`/products/${this.props.productId}`}>

                    <div className="img-wrapper">
                        {!this.props.inStock && <span>Out of stock</span>}
                        <img src={this.props.gallery[0]} alt="none" />
                    </div>

                    <h3>{this.props.brand} {this.props.name}</h3>
                    <span>{price.currency.symbol}{price.amount}</span>

                    <button onClick={() => this.props.addProduct(
                        {
                            name: this.props.name,
                            brand: this.props.brand,
                            id: this.props.productId,
                            prices: this.props.prices,
                            attributes: this.props.attributes,

                        })}>
                        add
                    </button>

                </Link>
            </ProductContainer>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, {
    addProduct,
})(Product);