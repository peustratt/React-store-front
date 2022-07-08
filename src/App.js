import { Component } from 'react';
import { CATEGORY_QUERY, CURRENCIES_QUERY, PRODUCTS_QUERY } from './config/queries';
import { client } from './config/client-graphql';
import { gql } from '@apollo/client';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { changeCurrentCurrency, loadLocalStorage } from './actions/cartActions';
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
    const prevLocalStorage = JSON.parse(localStorage.getItem('cart-scandiweb'))
    localStorage.setItem('cart-scandiweb', JSON.stringify({ ...prevLocalStorage, category: target.innerText.toLowerCase() }))
  }

  onCategoryChange = () => {
    client.query({
      query: gql`${PRODUCTS_QUERY}`,
      variables: {
        categoryInput: this.state.category
      }
    }).then(res => {
      console.log('res', res.data)
      this.setState({ products: res.data.category.products })
    })
  }

  componentDidMount() {
    let localStorageCart = null
    let newCurrency = null;
    let prevLocalStorage
    localStorageCart = JSON.parse(localStorage.getItem('cart-scandiweb'))

    client.query({
      query: gql`${CURRENCIES_QUERY}`
    }).then(res => {
      // newCurrency = res.data.currencies[0];
      console.log('localstorage cart', localStorageCart)
      newCurrency = localStorageCart ? localStorageCart.currentCurrency : res.data.currencies[0];
      console.log('new Currency', newCurrency)

      if (localStorageCart) {
        console.log('loadou')
        store.dispatch(loadLocalStorage({ products: localStorageCart.products, currentCurrency: newCurrency }))
      } else {
        store.dispatch(changeCurrentCurrency(newCurrency))
        prevLocalStorage = JSON.parse(localStorage.getItem('cart-scandiweb'))
        localStorage.setItem('cart-scandiweb', JSON.stringify({ ...prevLocalStorage, currentCurrency: newCurrency, products: [] }))
      }

      this.setState({
        currencies: res.data.currencies,
        currentCurrency: newCurrency
      })
    });

    client.query({
      query: gql`${CATEGORY_QUERY}`
    }).then(res => {
      // if (!localStorageCart) {
      //   prevLocalStorage = JSON.parse(localStorage.getItem('cart-scandiweb'))
      //   localStorage.setItem('cart-scandiweb', JSON.stringify({ ...prevLocalStorage, category: res.data.categories[0].name }))
      // }

      this.setState({
        categories: res.data.categories,
        category: res.data.categories[0].name
        // category: localStorageCart ? localStorageCart.category : res.data.categories[0].name
      })
    })

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      this.onCategoryChange()
    }
  }

  render() {
    console.log('store state inside render', store.getState())
    return (
      <Provider store={store}>
        <GlobalStyle isOverlay={this.state.isOverlay} />
        <AppContainer className="App">
          <BrowserRouter>
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
            {this.state.isOverlay &&
              <>
                <CartOverlay handleOverlay={this.handleOverlay} currentCurrency={this.state.currentCurrency} />
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
