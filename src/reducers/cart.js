const cartReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_CART':

            return [...state, { ...action.payload, quantity: 1 }]

        case 'EDIT_PRODUCT':
            let oldProduct = state.find(product => product.id === action.payload.productId && product.selectedAttributes === action.payload.selectedAttributes)
            let newSelected = oldProduct.selectedAttributes.map(attribute => {
                return attribute.attributeId === action.payload.attributeId ? { ...attribute, itemId: action.payload.newItemId } : attribute
            })

            const duplicated = state.find(product => product.id === action.payload.productId && JSON.stringify(product.selectedAttributes) === JSON.stringify(newSelected))
            if (duplicated) {
                const newState = [...state]
                const index = state.indexOf(duplicated)
                newState[index] = { ...newState[index], quantity: newState[index].quantity + 1 }
                const indexOfOldProduct = newState.indexOf(oldProduct)
                newState.splice(indexOfOldProduct, 1)
                console.log('duplicated', newState)
                return newState
            } else {
                return state.map(product => product === oldProduct ? { ...oldProduct, selectedAttributes: newSelected } : product)
            }

        default:
            return state
    };
};

export default cartReducer;