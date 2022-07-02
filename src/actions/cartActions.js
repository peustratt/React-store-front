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