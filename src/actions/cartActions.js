export const addProduct = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    };
};