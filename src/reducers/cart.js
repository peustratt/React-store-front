const cartReducer = (state = [], action) => {
  let duplicated = {};


  switch (action.type) {
    case 'ADD_TO_CART':
      // console.log(state)
      duplicated = state.find(product => product.id === action.payload.id && JSON.stringify(product.selectedAttributes) === JSON.stringify(action.payload.selectedAttributes))

      if (duplicated) {
        return state.map(product => product === duplicated ? { ...product, quantity: product.quantity + 1 } : product)
      }
      return [...state, { ...action.payload, quantity: 1 }]

    case 'EDIT_PRODUCT':
      // find old product
      let oldProduct = state.find(product => product.id === action.payload.productId && product.selectedAttributes === action.payload.selectedAttributes)
      // get edited attributes array
      let newSelected = oldProduct.selectedAttributes.map(attribute => {
        return attribute.attributeId === action.payload.attributeId ? { ...attribute, itemId: action.payload.newItemId } : attribute
      })


      duplicated = state.find(product => product.id === action.payload.productId && JSON.stringify(product.selectedAttributes) === JSON.stringify(newSelected))
      if (duplicated) {
        const newState = [...state];
        let duplicatedId = newState.indexOf(duplicated);
        newState[duplicatedId].quantity += oldProduct.quantity;
        const oldProductIndex = newState.indexOf(oldProduct);
        newState.splice(oldProductIndex, 1);
        return newState;
      } else {
        return state.map(product => product === oldProduct ? { ...oldProduct, selectedAttributes: newSelected } : product)
      }
    
    case "CHANGE_PRODUCT_QUANTITY":
      let operator = action.payload.operation === 'increment' ? 1 : -1;
      let selectedProduct = state.find((product) => product.id === action.payload.product.id && JSON.stringify(product.selectedAttributes) === JSON.stringify(action.payload.product.selectedAttributes))

      if (operator < 0 && selectedProduct?.quantity === 1) {
        const newState = [...state];
        const productIndex = newState.indexOf(selectedProduct);
        newState.splice(productIndex, 1);
        return newState;
      } else {
        return state.map(product => product === selectedProduct ? {...product, quantity: product.quantity + operator} : product)
      }

    default:
      return state
  };
};

export default cartReducer;