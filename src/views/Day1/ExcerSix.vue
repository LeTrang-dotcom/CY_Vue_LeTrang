<template>
  <ul class="flex flex-row">
    <li v-for="item in data" :key="item.product">
      <div class="w-3/4 border rounded-lg">
        <div :class="item.classObject">
          <img :src="item.image" :alt="item.imageAlt" />
          <h2
            :class="{
              'text-green-500': item.inStock,
              'text-red-500': !item.inStock,
            }"
          >
            {{ item.product }}
          </h2>
          <p>Price: {{ item.price }}</p>
          <p>Available Quantity: {{ item.quantity }}</p>
          <a :href="item.productLink" class="text-violet-500">View Product</a>
        </div>
      </div>
    </li>
  </ul>
  <p>Tổng giá trị của tất cả sản phẩm trong giỏ hàng: {{ total }}</p>
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  {
    image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
    imageAlt: 'ps5 alt',
    product: 'ps3',
    productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
    quantity: 0,
    price: 7000,
    discount: 0.2,
    inStock: false,
    classObject: {
      'bg-gray-100': true,
      'bg-red-500': false,
    },
  },
  {
    image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
    imageAlt: 'ps5 alt',
    product: 'ps4',
    productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
    quantity: 10,
    price: 8000,
    discount: 0.2,
    inStock: true,
    classObject: {
      'bg-gray-100': true,
      'bg-red-500': false,
    },
  },
  {
    image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
    imageAlt: 'ps5 alt',
    product: 'ps5',
    productLink: 'https://bachtungps.com.vn/may-sony-playstation-5-ps5-1',
    quantity: 10,
    price: 10000,
    discount: 0.2,
    inStock: true,
    classObject: {
      'bg-gray-100': true,
      'bg-red-500': false,
    },
  },
])

const total = ref(0)

data.value.forEach(item => {
  total.value += item.quantity * item.price
});

</script>
