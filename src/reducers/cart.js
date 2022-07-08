const cartReducer = (state = { products: [], total: 0, currentCurrency: {} }, action) => {
  let duplicated = {};
  let price = {}

  const getCartTotal = (newLabel, products) => {
    if (products.length < 1) {
      return 0;
    } else {
      return products.reduce((acc, product) => {
        const price = product.prices.find(price => price.currency.label === newLabel)
        return acc += (price.amount * product.quantity)
      }, 0)
    }
  }

  let newProducts
  let prevLocalStorage = JSON.parse(localStorage.getItem('cart-scandiweb'))

  switch (action.type) {
    case 'CHANGE_CURRENT_CURRENCY':
      if (!state.currentCurrency.label) {
        localStorage.setItem('cart-scandiweb', JSON.stringify({ ...prevLocalStorage, products: state.products, currentCurrency: { label: action.payload.label, symbol: action.payload.symbol } }))
        return { ...state, currentCurrency: { label: action.payload.label, symbol: action.payload.symbol } };

      } else if (state.currentCurrency.label !== action.payload.label) {
        localStorage.setItem('cart-scandiweb', JSON.stringify({ ...prevLocalStorage, products: state.products, currentCurrency: { label: action.payload.label, symbol: action.payload.symbol } }))
        return { ...state, total: getCartTotal(action.payload.label, state.products), currentCurrency: { label: action.payload.label, symbol: action.payload.symbol } };

      } else {
        return state;
      }

    case 'ADD_TO_CART':
      if (action.payload)
      duplicated = state.products.find(product => product.id === action.payload.id && JSON.stringify(product.selectedAttributes) === JSON.stringify(action.payload.selectedAttributes))
      price = action.payload.prices.find(price => price.currency.label === state.currentCurrency.label)

      if (duplicated) {
        newProducts = state.products.map(product => product === duplicated ? { ...product, quantity: product.quantity + 1 } : product)
        localStorage.setItem("cart-scandiweb", JSON.stringify({ ...prevLocalStorage, products: newProducts, currentCurrency: state.currentCurrency }))
        return {
          ...state,
          products: newProducts,
          total: getCartTotal(state.currentCurrency.label, state.products) + price.amount
        }
      }

      newProducts = [...state.products, { ...action.payload, quantity: 1 }]
      localStorage.setItem("cart-scandiweb", JSON.stringify({ products: newProducts, currentCurrency: state.currentCurrency }))
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
        total: getCartTotal(state.currentCurrency.label, state.products) + price.amount
      }

    case 'EDIT_PRODUCT':

      let oldProduct = state.products.find(product => product.id === action.payload.productId && JSON.stringify(product.selectedAttributes) === JSON.stringify(action.payload.selectedAttributes))

      let newSelectedAttributes = oldProduct.selectedAttributes.map(attribute => {
        return attribute.attributeId === action.payload.attributeId ? { ...attribute, itemId: action.payload.newItemId } : attribute
      })


      if (JSON.stringify(action.payload.selectedAttributes) !== JSON.stringify(newSelectedAttributes)) {
        duplicated = state.products.find(product => product.id === action.payload.productId && JSON.stringify(product.selectedAttributes) === JSON.stringify(newSelectedAttributes))

        if (duplicated) {
          newProducts = state.products.map(product => product === duplicated ? { ...product, quantity: product.quantity + oldProduct.quantity } : product)
          const oldProductIndex = newProducts.indexOf(oldProduct);
          newProducts.splice(oldProductIndex, 1);
          localStorage.setItem('cart-scandiweb', JSON.stringify({ ...prevLocalStorage, products: newProducts }))
          return { ...state, products: newProducts };
        } else {
          newProducts = state.products.map(product => product === oldProduct ? { ...oldProduct, selectedAttributes: newSelectedAttributes } : product)
          localStorage.setItem('cart-scandiweb', JSON.stringify({ ...prevLocalStorage, products: newProducts }))
          return { ...state, products: newProducts }
        }

      } else {
        return state
      }

    case "CHANGE_PRODUCT_QUANTITY":
      let operator = action.payload.operation === 'increment' ? 1 : -1;
      let selectedProduct = state.products.find((product) => product.id === action.payload.product.id && JSON.stringify(product.selectedAttributes) === JSON.stringify(action.payload.product.selectedAttributes))
      price = selectedProduct.prices.find(price => price.currency.label === state.currentCurrency.label)

      // Remove product from cart
      if (operator < 0 && selectedProduct?.quantity === 1) {
        const newState = [...state.products];
        const productIndex = newState.indexOf(selectedProduct);
        newState.splice(productIndex, 1);
        localStorage.setItem('cart-scandiweb', JSON.stringify({ ...prevLocalStorage, products: newState }))
        return { ...state, products: newState, total: getCartTotal(state.currentCurrency.label, newState) };

        // change product quantity
      } else {
        const newState = state.products.map(product => product === selectedProduct ? { ...product, quantity: product.quantity + operator } : product)
        localStorage.setItem('cart-scandiweb', JSON.stringify({ ...prevLocalStorage, products: newState }))
        return { ...state, total: getCartTotal(state.currentCurrency.label, newState), products: newState }
      }

    case "LOAD_LOCAL_STORAGE_CART":
      return { ...state, products: action.payload.products, total: getCartTotal(action.payload.currentCurrency.label, action.payload.products), currentCurrency: action.payload.currentCurrency }

    default:
      return state
  };
};

export default cartReducer;