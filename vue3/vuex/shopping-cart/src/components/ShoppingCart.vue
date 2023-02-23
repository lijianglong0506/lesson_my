<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length">
            <i>Please add some products to cart.</i>
        </p>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.title}} - {{product.price}} x {{product.quantity}}
            </li>
        </ul>
        <p>Total: {{ total }}</p>

    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
// const items = computed(() => store.state.cart.items)
// console.log(store.state.cart.items)
const products = computed(() => store.getters['cart/cartProducts'])
const total = computed(() => store.getters['cart/cartTotalPrice'])

</script>

<style scoped>

</style>