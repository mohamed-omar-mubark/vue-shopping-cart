// Set "shoppingCart" var from localStorage to cart state
let shoppingCart = window.localStorage.getItem("shoppingCart");

export default {

    // shoppingCart state array []
    shoppingCart: shoppingCart ? JSON.parse(shoppingCart) : [],
}