import {defineStore} from "pinia";

export const productsStore = defineStore('products', {
    state: () => ({
        products: [
            {
                id: 1,
                name: "Product 1",
                price: 10,
                description: "This is a product",
                image: "https://picsum.photos/200/300?random=1"
            },
            {
                id: 2,
                name: "Product 2",
                price: 20,
                description: "This is product 2",
                image: "https://picsum.photos/200/300?random=2"
            },
            {
                id: 3,
                name: "Product 3",
                price: 30,
                description: "This is product 3",
                image: "https://picsum.photos/200/300?random=3"
            },
            {
                id: 4,
                name: "Product 4",
                price: 20,
                description: "This is product 4",
                image: "https://picsum.photos/200/300?random=4"
            },
            {
                id: 5,
                name: "Product 5",
                price: 25,
                description: "This is product 5",
                image: "https://picsum.photos/200/300?random=5"
            }
        ],
        cart: [],
    }),
    getters: {
        getProducts: (state) => {
            return state.products;
        },
        getCart: (state) => {
            return state.cart;
        },
        getProductById: (state) => {
            return (productId) => state.products.find(product => product.id === productId);
        }
    },
    actions: {
        addToCart: (product) => {
            this.cart.push(product);
        },
        removeFromCart: (product) => {
            this.cart.splice(this.cart.indexOf(product), 1);
        },
        clearCart: () => {
            this.cart = [];
        }
    }
})
