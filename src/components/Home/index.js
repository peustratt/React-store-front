import { Component } from "react";
import HomeContainer from './style'

import Product from "../Product";

class Home extends Component {

    render() {
        const productsEl = this.props.products.map((product) => {
            return (
                <Product
                    key={product.id}
                    productId={product.id}
                    name={product.name}
                    brand={product.brand}
                    inStock={product.inStock}
                    gallery={product.gallery}
                    prices={product.prices}
                    currentCurrency={this.props.currentCurrency}
                    attributes={product.attributes}
                />
            )
        })

        console.log('home props: ', this.props)

        return (
            <HomeContainer>
                <h2>{this.props.category}</h2>
                <div className="products-container">
                    {productsEl.slice(0, 6)}
                </div>
            </HomeContainer>
        )
    }
}

export default Home