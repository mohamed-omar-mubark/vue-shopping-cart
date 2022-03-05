<template>
    <div class="home-page text-center">
        <div class="container">
            <h1 class="text-center m-t-20 m-b-10">Vue Shopping Cart</h1>
            <p class="secondary-color text-center m-b-20">Made with love by Mohamed Omar</p>
            
            <!-- Shopping cart -->
            <button class="btn btn-primary m-b-50" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Shopping cart ( {{ cartItemCount }} )
            </button>
            <div class="offcanvas offcanvas-end p-10" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-body">
                    <div class="shopping-cart-product text-center p-0 p-l-10 p-r-10 m-b-20" v-for="item in shoppingCart" :key="item.product.index">
                        <div class="product-image">
                            <img src="@/assets/products/col-1-img-1.jpg">
                        </div>
                        <div class="product-data">
                            <div class="product-name m-b-5">
                                <span>{{ item.product.name }}</span>
                            </div>
                            <div class="product-price">
                                <span>{{ item.quantity }} X ${{ item.product.price }}</span>
                            </div>
                        </div>
                        <div class="product-actions">
                            <button type="button" @click="removeProductFromShoppingCart(item.product)">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>

                    <div class="total p-20">
                        <div class="info">
                            <label>Total: </label> <span>${{ cartTotalPrice }}</span>
                        </div>
                    </div>

                    <div class="empty-shopping-cart p-20">
                        <button class="p-10" type="button" @click="emptyShoppingCart()">
                            <i class="fa-solid fa-trash-can"></i>
                            <span>Empty shopping cart</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Products in your shop -->
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6" v-for="product in products" :key="product.id">
                    <div class="product m-b-30">
                        <div class="product-image">
                            <img src="@/assets/products/col-1-img-1.jpg">
                        </div>
                        <div class="product-actions">
                            <button type="button" class="p-10 white-color" @click="addToShoppingCart(product)">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                        <div class="product-data">
                            <div class="product-name">
                                <span>{{ product.name }}</span>
                            </div>
                            <div class="product-price">
                                <span>${{ product.price }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            // All products in your shop
            products: [
                {
                    id: 1,
                    name: "product_1",
                    price: 150
                },
                {
                    id: 2,
                    name: "product_2",
                    price: 100
                },
                {
                    id: 3,
                    name: "product_3",
                    price: 200
                }
            ]
        }
    },
    computed: {
        // Shopping cart data from state 
        shoppingCart() {
            return this.$store.state.shoppingCart;
        },
        // Total price in shopping cart from getters 
        cartTotalPrice() {
            return this.$store.getters.cartTotalPrice;
        },
        // Shopping cart products count getters 
        cartItemCount() {
            return this.$store.getters.cartItemCount;
        }
    },
    methods: {
        // Add product to shopping cart
        addToShoppingCart(item) {

            this.$store.dispatch("addToShoppingCart", {
                product: item,
                quantity: 1
            });
            // Message
            this.$snotify.success("Added to shopping cart");
        },

        // Remove single product from shopping cart
        removeProductFromShoppingCart(product) {

            this.$store.dispatch('removeProductFromShoppingCart', product);
            this.$store.dispatch('removeProductFromStorage', product);
            // Message
            this.$snotify.success("Product deleted from shopping cart");
        },

        // Empty shopping cart
        emptyShoppingCart() {

            this.$store.dispatch("emptyShoppingCart");
            // Message
            this.$snotify.success("Shopping cart empty now");
        }
    }
};
</script>