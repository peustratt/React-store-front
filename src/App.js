import { Component } from 'react';
import { CATEGORY_QUERY, CURRENCIES_QUERY, PRODUCTS_QUERY } from './config/queries';
import { client } from './config/client-graphql';
import { gql } from '@apollo/client';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { changeCurrentCurrency } from './actions/cartActions';
import Home from './components/Home';
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';
import CartOverlay from './components/CartOverlay';
import ProductDescription from './components/ProductDescription'
import Cart from './components/Cart'
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
        currentCurrency: {},
        isOverlay: false
    }

    handleOverlay = (action) => {
        console.log(action)
        switch (action) {
            case 'open':
                this.setState({ isOverlay: true })
                break;
            case 'close':
                this.setState({ isOverlay: false })
                break;
            default:
                console.log('Invalid action argument for handleOverlay(action)')
        }
    }

    handleCurrency = ({ target }) => {
        const [symbol, label] = target.innerText.split(' ');
        store.dispatch(changeCurrentCurrency({ symbol, label }))
        this.setState({ currentCurrency: { symbol, label } })
    }

    handleCategory = ({ target }) => {
        this.setState({ category: target.innerText.toLowerCase() })
    }

    onCategoryChange = () => {
        // console.log(this.state)
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
        }).then(res => {
            store.dispatch(changeCurrentCurrency(res.data.currencies[0]))
            this.setState({
                currencies: res.data.currencies,
                currentCurrency: res.data.currencies[0]
            })
        });

        client.query({
            query: gql`${CATEGORY_QUERY}`
        }).then(res => this.setState({
            categories: res.data.categories,
            category: res.data.categories[0].name
        }))

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.category !== this.state.category) {
            // console.log('categoria mudou')
            this.onCategoryChange()
        }
        console.log(this.state.products)
    }

    render() {
        return (
            <Provider store={store}>
                <GlobalStyle isOverlay={this.state.isOverlay} />
                <AppContainer className="App">
                    <Navbar
                        categories={this.state.categories}
                        handleCategory={this.handleCategory}
                        category={this.state.category}
                        currencies={this.state.currencies}
                        currentCurrency={this.state.currentCurrency}
                        handleCurrency={this.handleCurrency}
                        isOverlay={this.state.isOverlay}
                        handleOverlay={this.handleOverlay}
                    />
                    <BrowserRouter>
                        {this.state.isOverlay &&
                            <>
                                <CartOverlay currentCurrency={this.state.currentCurrency} />
                                <div className='overlay-modal' onClick={() => this.handleOverlay('close')}></div>
                            </>
                        }
                        <Route path="/products/:productId" render={(props) => <ProductDescription {...props} currentCurrency={this.state.currentCurrency} />} />
                        <Route path="/cart" render={(props) => <Cart {...props} />} />
                        <Route exact path="/" render={(props) => <Home {...props} category={this.state.category} products={this.state.products} currentCurrency={this.state.currentCurrency} />} />
                    </BrowserRouter>
                </AppContainer>
            </Provider>
        );
    }
}

export default App;

const AppContainer = styled.div`
    .overlay-modal {
        position: fixed;
        z-index: 1;
        background: #393748;
        opacity: .22;
        inset: 0;
    }
`
