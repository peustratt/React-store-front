const cartReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_CART':

            return [...state, {...action.payload, quantity: 1}]

        case 'EDIT_PRODUCT':
            let newSelected = []
            const editedState = state.map(product => {
                if (product.id === action.payload.productId && product.selectedAttributes === action.payload.selectedAttributes) {
                    newSelected = product.selectedAttributes.map(attribute => {
                        return attribute.attributeId === action.payload.attributeId ? { ...attribute, itemId: action.payload.newItemId } : attribute
                    })
                    return { ...product, selectedAttributes: newSelected };
                } else {
                    return product
                }
            });

            const duplicated = state.find(product => product.id === action.payload.productId && JSON.stringify(product.selectedAttributes) === JSON.stringify(newSelected))
            if (duplicated) {
                const newState = [...state]
                const indexOfEdited = state.indexOf(state.find(product => product.id === action.payload.productId && product.selectedAttributes === action.payload.selectedAttributes))
                const index = state.indexOf(duplicated)
                newState[index] = {...newState[index], quantity: newState[index].quantity + 1}
                newState.splice(indexOfEdited, 1)
                console.log('duplicated', newState)
                return newState
            }
            console.log('edited', editedState)
            return editedState;
        default:
            return state
    };
};

export default cartReducer;