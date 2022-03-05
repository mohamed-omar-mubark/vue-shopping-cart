// (addToShoppingCart) Action take product data as array and quantity of product, And set all of this data in localStorage("shoppingCart") by mutation called (ADD_TO_SHOPPING_CART)
export const addToShoppingCart = ({commit}, { product, quantity }) => {
    commit("ADD_TO_SHOPPING_CART", { product, quantity });
}

// (Remove product from shopping cart) Action pass product data to mutation called "REMOVE_PRODUCT_FROM_CART"
export const removeProductFromShoppingCart = ({ commit }, product) => {
    commit("REMOVE_PRODUCT_FROM_SHOPPING_CART", product);
}

// (Remove product from localStorage) Action pass product data to mutation called "REMOVE_PRODUCT_FROM_STORAGE"
export const removeProductFromStorage = ({commit}, product) => {
    commit("REMOVE_PRODUCT_FROM_STORAGE", product);
}

// (emptyShoppingCart) Action delete all of products from shopping cart by mutation called (EMPTY_SHOPPING_CART)
export const emptyShoppingCart = ({commit}) => {
    commit("EMPTY_SHOPPING_CART");
}