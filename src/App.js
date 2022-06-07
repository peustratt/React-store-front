import { Component } from 'react';
import { CATEGORY_QUERY, CURRENCIES_QUERY, PRODUCTS_QUERY } from './config/queries';
import { client } from './config/client-graphql';
import { gql } from '@apollo/client';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

import Product from './components/Product'
import Header from  './components/Header'

let store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    state = {
        categories: [],
        category: "",
        products: [],
        currencies: [],
        currentCurrency: ''
    }

    handleCategory = ({ target }) => {
        this.setState({ category: target.innerText })
    }

    onCategoryChange = () => {
        console.log(this.state)
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

        client.query({
            query: gql`${CURRENCIES_QUERY}`
        }).then(res => this.setState({
            currencies: res.data.currencies,
            currentCurrency: res.data.currencies[0].label
        }));

        client.query({
            query: gql`${CATEGORY_QUERY}`
        }).then(res => this.setState({
            categories: res.data.categories,
            category: res.data.categories[0].name
        }))

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.category !== this.state.category) {
            console.log('categoria mudou')
            this.onCategoryChange()
        }
    }

    render() {
        const categoriesEl = this.state.categories.map((category, index) => {
            return (
                <li key={index}
                    onClick={this.handleCategory}>
                    {category.name}
                </li>
            )
        })
        const productsEl = this.state.products.map((product) => {
            return (
                <Product
                    key={product.id}
                    name={product.name}
                    brand={product.brand}
                    inStock={product.inStock}
                    gallery={product.gallery}
                    prices={product.prices}
                    currentCurrency={this.state.currentCurrency}
                />
            )
        })
        const currenciesEL = this.state.currencies.map((currency, index) => {
            return (
                <li key={index}
                    onClick={(e) => { this.setState({ currentCurrency: e.target.innerText }) }}>
                    {currency.label}
                </li>
            )
        })
        
        return (
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    {currenciesEL}
                    {categoriesEl}
                    <Products>
                        {productsEl.slice(0, 6)}
                    </Products>
                </div>
            </Provider>
        );
    }
}

export default App;

const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`

