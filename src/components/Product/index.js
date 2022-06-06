import { Component } from "react";
import { Div } from './style'

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
            </Div>
        )
    }
}

export default Product;