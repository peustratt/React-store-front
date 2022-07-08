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
    return {
        type: "CHANGE_PRODUCT_QUANTITY",
        payload: {
            product,
            operation
        }
    }
}

export const changeCurrentCurrency = (currentCurrency) => {
    return  {
        type: "CHANGE_CURRENT_CURRENCY",
        payload: currentCurrency
    }
}

export const loadLocalStorage = (products) => {
    return {
        type: "LOAD_LOCAL_STORAGE_CART",
        payload: products
    }
}