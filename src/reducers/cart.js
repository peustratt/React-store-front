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

  switch (action.type) {
    case 'CHANGE_CURRENT_CURRENCY':
      if (state.currentCurrency.label === null) {
        return { ...state, currentCurrency: { label: action.payload.label, symbol: action.payload.symbol } };
      }
      else if (state.currentCurrency.label !== action.payload.label) {
        return { ...state, total: getCartTotal(action.payload.label, state.products), currentCurrency: { label: action.payload.label, symbol: action.payload.symbol } };
      } else {
        return state;
      }

    case 'ADD_TO_CART':
      // console.log(state)
      duplicated = state.products.find(product => product.id === action.payload.id && JSON.stringify(product.selectedAttributes) === JSON.stringify(action.payload.selectedAttributes))
      price = action.payload.prices.find(price => price.currency.label === state.currentCurrency.label)
      if (duplicated) {
        return {
          ...state,
          products: state.products.map(product => product === duplicated ? { ...product, quantity: product.quantity + 1 } : product),
          total: getCartTotal(state.currentCurrency.label, state.products) + price.amount
        }
      }
      return {
        ...state,
        total: state.total + price.amount,
        products: [...state.products, { ...action.payload, quantity: 1 }],
        total: getCartTotal(state.currentCurrency.label, state.products) + price.amount
      }

    case 'EDIT_PRODUCT':
      // find old product
      let oldProduct = state.products.find(product => product.id === action.payload.productId && JSON.stringify(product.selectedAttributes) === JSON.stringify(action.payload.selectedAttributes))
      // get edited attributes array
      let newSelected = oldProduct.selectedAttributes.map(attribute => {
        return attribute.attributeId === action.payload.attributeId ? { ...attribute, itemId: action.payload.newItemId } : attribute
      })
      console.log('eai é ou não é', JSON.stringify(action.payload.selectedAttributes) !== JSON.stringify(newSelected))
      if (JSON.stringify(action.payload.selectedAttributes) !== JSON.stringify(newSelected)) {
        duplicated = state.products.find(product => product.id === action.payload.productId && JSON.stringify(product.selectedAttributes) === JSON.stringify(newSelected))
        console.log('duplicate', duplicated)
        if (duplicated) {
          const newState = [...state.products];
          let duplicatedId = newState.indexOf(duplicated);
          newState[duplicatedId].quantity += oldProduct.quantity;
          const oldProductIndex = newState.indexOf(oldProduct);
          newState.splice(oldProductIndex, 1);
          return { ...state, products: newState };
        } else {
          return { ...state, products: state.products.map(product => product === oldProduct ? { ...oldProduct, selectedAttributes: newSelected } : product) }
        }
      } else {
        return state
      }

    case "CHANGE_PRODUCT_QUANTITY":
      let operator = action.payload.operation === 'increment' ? 1 : -1;
      let selectedProduct = state.products.find((product) => product.id === action.payload.product.id && JSON.stringify(product.selectedAttributes) === JSON.stringify(action.payload.product.selectedAttributes))
      price = selectedProduct.prices.find(price => price.currency.label === state.currentCurrency.label)

      if (operator < 0 && selectedProduct?.quantity === 1) {
        const newState = [...state.products];
        const productIndex = newState.indexOf(selectedProduct);
        newState.splice(productIndex, 1);
        return { ...state, products: newState, total: getCartTotal(state.currentCurrency.label, newState) };
      } else {
        const newState = state.products.map(product => product === selectedProduct ? { ...product, quantity: product.quantity + operator } : product)
        return { ...state, total: getCartTotal(state.currentCurrency.label, newState), products: newState }
      }

    default:
      return state
  };
};

export default cartReducer;