import { Component } from 'react';
import { CATEGORY_QUERY, PRODUCTS_QUERY } from './config/queries';
import { client } from './config/client-graphql';
import { gql } from '@apollo/client';

class App extends Component {
    state = {
        categories: [],
        category: "",
        products: []
    }

    handleCategory = ( { target }) => {
        this.setState({ category: target.innerText })
    }

    onCategoryChange = () => {
        client.query({
            query: gql`${PRODUCTS_QUERY}`,
            variables: {
                categoryInput: this.state.category
            }
        }).then(res => this.setState({ products: res.data.category.products }))
        console.log('loaded new products')
    }

    componentDidMount() {
        console.log('mounted')
        // get categories e set category to the first one!
        client.query({
            query: gql`${CATEGORY_QUERY}`
        }).then(res => this.setState({ 
            categories: res.data.categories,
            category: res.data.categories[0].name 
        }))
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('updeitou')
        if (prevState.category !== this.state.category) {
            console.log('categoria mudou')
            this.onCategoryChange()
        }
    }

    render() {
        const categoriesEl = this.state.categories.map((category, index) => <li key={index} onClick={this.handleCategory}>{category.name}</li>)
        const productsEl = this.state.products.map((product) => <li key={product.id}>{product.name} brand: {product.brand}</li>)

        return (
            <div className="App">
                {categoriesEl}
                {productsEl}
                {this.state.category}
            </div>
        );
    }
}

export default App;
