export const addProduct = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    };
};

export const editProduct = (selectedAttribute) => {
    return {
        type: "EDIT_PRODUCT",
        payload: selectedAttribute
    }
}