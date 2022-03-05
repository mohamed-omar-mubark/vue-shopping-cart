// ADD_TO_SHOPPING_CART receive product data and quantity from action called (addToShoppingCart)
export const ADD_TO_SHOPPING_CART = (state, { product, quantity }) => {

    // Let me know is product already exist in shopping cart
    let productInCart = state.shoppingCart.find(item => {
        
        return item.product.id === product.id;
    });

    // if already exist => increase quantity +1
    if(productInCart) {

        productInCart.quantity += quantity;
        window.localStorage.removeItem("shoppingCart");
        window.localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
        return;
    }
    
    // save shopping cart data in shoppingCart array []
    state.shoppingCart.push({

        product,
        quantity
    });

    // Set localStorage "shoppingCart" var => shoppingCart array []
    window.localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
}

// REMOVE_PRODUCT_FROM_CART
export const REMOVE_PRODUCT_FROM_SHOPPING_CART = (state, product) => {

    state.shoppingCart = state.shoppingCart.filter(item => {
        return item.product.id !== product.id;
    });
}

// REMOVE_PRODUCT_FROM_STORAGE
export const REMOVE_PRODUCT_FROM_STORAGE = (state, product) => {

    let index = state.shoppingCart.indexOf(product);
    state.shoppingCart.splice(index,0);
    window.localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
}

// EMPTY_SHOPPING_CART
export const EMPTY_SHOPPING_CART = (state) => {

    state.shoppingCart = [];
    window.localStorage.removeItem("shoppingCart");
}