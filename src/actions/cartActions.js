export const addProduct = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

export const editProduct = (product) => {
    return {
        type: "EDIT_PRODUCT",
        payload: product
    }
}

export const changeProductQuantity = (product, operation) => {
    console.log('chamou heon o quantity')
    return {
        type: "CHANGE_PRODUCT_QUANTITY",
        payload: {
            product,
            operation
        }
    }
}

export const changeCurrentCurrency = (currentCurrency) => {
    console.log('chamou heon o current')
    return  {
        type: "CHANGE_CURRENT_CURRENCY",
        payload: currentCurrency
    }
}