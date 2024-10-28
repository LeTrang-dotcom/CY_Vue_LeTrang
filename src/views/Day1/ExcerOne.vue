<script setup>
import { ref, computed } from 'vue'

const data = ref({
  image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
  imageAlt: 'ps5 alt',
  product: 'ps5',
  productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
  quantity: 10,
  price: 10000,
  discount: 0.2,
  inStock: false,
  classObject: {
    'bg-gray-100': true,
    'bg-red-500': false,
  },
})

const formattedPrice = computed(() => {
  return (data.value.price * (1 - data.value.discount)).toLocaleString(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
    },
  )
})

const productQuantity = computed(() => {
  return data.value.inStock ? 10 : 0
})

const dataDescription = computed(() => {
  return data.value.inStock ? 'Còn hàng ' : 'Hết hàng'
})
</script>
<template>
  <div class="w-1/2 border rounded-lg">
    <div :class="data.classObject">
      <img :src="data.image" :alt="data.imageAlt" />
      <h2
        :class="{
          'text-green-500': data.inStock,
          'text-red-500': !data.inStock,
        }"
      >
        {{ data.product }}
      </h2>
      <p>Price: {{ formattedPrice }}</p>
      <p>Available Quantity: {{ productQuantity }}</p>
      <p>{{ dataDescription }}</p>
      <a :href="data.productLink" class="text-violet-500">View Product</a>
    </div>
  </div>
</template>
