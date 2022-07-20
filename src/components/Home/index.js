import { Component } from "react";
import { client } from '../../config/client-graphql';
import { gql } from '@apollo/client';
import HomeContainer from './style'
import { PRODUCTS_QUERY } from '../../config/queries'
import Product from "../Product";

class Home extends Component {
    state = {
        products: [],
        location: this.props.match.params.category
    }

    onCategoryChange = () => {
        client.query({
            query: gql`${PRODUCTS_QUERY}`,
            variables: {
                categoryInput: this.props.match.params.category
            }
        }).then(res => {
            this.setState({ products: res.data.category.products })
        })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.onCategoryChange()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
            this.onCategoryChange()
        }
    }

    render() {
        const productsEl = this.state.products?.map((product) => {
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
        return (
            <HomeContainer>
                <h2>{this.props.match.url.split('/')[2]}</h2>
                <div className="products-container">
                    {productsEl && productsEl.slice(0, 6)}
                </div>
            </HomeContainer>
        )
    }
}

export default Home;