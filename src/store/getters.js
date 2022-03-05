// Count products in shopping cart
export const cartItemCount = (state) => {
    return state.shoppingCart.length;
}

// Count total price in shopping cart
export const cartTotalPrice = (state) => {
    let total = 0;

    state.shoppingCart.forEach(item => {
        total += item.product.price * item.quantity;
    });

    return total;
}