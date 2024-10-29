<template>
  <header class="min-w-[700px] flex flex-row justify-between p-2">
    <h1 class="text-3xl italic font-bold">Shop Electronics</h1>
    <div class="relative w-5">
      <div class="w-5 absolute z-0">
        <img src="@/assets/cart-shopping.svg" alt="shopping cart" />
      </div>
      <div
        class="w-4 h-4 rounded-full bg-red-400 absolute z-1 -top-1/4 -right-1/4 text-[10px] flex items-center justify-center text-white text-center"
      >
        {{ obj.count }}
      </div>
    </div>
  </header>

  <div class="flex flex-col gap-5">
    <div class="flex flex-col gap-3">
      <h1>Hot Products</h1>
      <div class="flex flex-row gap-5 px-2">
        <div
          v-for="product in hotProducts"
          :key="product.id"
          class="border w-[200px] rounded-xl"
        >
          <div>
            <div>
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="flex flex-col gap-2 p-2">
              <h2>{{ product.name }}</h2>
              <p>Price: {{ product.price }}</p>
              <p>Ngày bán: {{ product.publicDate }}</p>
              <div class="flex justify-center">
                <button
                  type="button"
                  class="border w-full rounded-md hover:bg-[#69C154] hover:text-white"
                  @click="addProduct"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <h1>Expensive Products</h1>
      <div class="flex flex-row gap-5 px-2">
        <div v-for="product in data.products" :key="product.id">
          <div v-if="product.price > 5000" class="border w-[200px] rounded-xl">
            <div>
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="flex flex-col gap-2 p-2">
              <h2>{{ product.name }}</h2>
              <p>Price: {{ product.price }}</p>
              <p>Ngày bán: {{ product.publicDate }}</p>
              <div class="flex justify-center">
                <button
                  type="button"
                  class="border w-full rounded-md hover:bg-[#69C154] hover:text-white"
                  @click="addProduct"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <h1>Cheap Products</h1>
      <div class="flex flex-row gap-5 px-2">
        <div v-for="product in data.products" :key="product.id">
          <div v-if="product.price < 5000" class="border w-[200px] rounded-xl">
            <div>
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="flex flex-col gap-2 p-2">
              <h2>{{ product.name }}</h2>
              <p>Price: {{ product.price }}</p>
              <p>Ngày bán: {{ product.publicDate }}</p>
              <div class="flex justify-center">
                <button
                  type="button"
                  class="border w-full rounded-md hover:bg-[#69C154] hover:text-white"
                  @click="addProduct"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="flex flex-col gap-4 p-4">
    <div>Phương thức thanh toán: {{ obj.selected }}</div>

    <select v-model="obj.selected" class="border border-black rounded-md w-1/4">
      <option v-for="item in data.paymentMethods" :key="item.value">
        {{ item.text }}
      </option>
    </select>
  </footer>
</template>

<script setup>
import { reactive, ref, watch, toRef } from 'vue'
const data = ref({
  cart: [],
  products: [
    {
      id: 1,
      name: 'PS5',
      price: 5555,
      publicDate: '05-05-2021',
      image: 'https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg',
      hot: true,
    },
    {
      id: 2,
      name: 'PS4',
      price: 4444,
      publicDate: '04-04-2021',
      image:
        'https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$',
      hot: true,
    },
    {
      id: 3,
      name: 'PS3',
      price: 3333,
      publicDate: '03-03-2021',
      image:
        'https://haloshop.vn/image/catalog/blogs/ps3-co-con-dang-mua/ps3-co-con-dang-mua-21.jpg',
      hot: false,
    },
  ],
  paymentMethods: [
    { text: 'COD', value: 1 },
    { text: 'Banking', value: 2 },
    { text: 'Ứng dụng bên thứ 3', value: 3 },
  ],
  selectedPayment: 2,
})

const hotProducts = data.value.products.filter(item => item.hot == true)
const obj = reactive({
  count: 0,
  selected: data.value.paymentMethods[data.value.selectedPayment - 1].text,
})

const selectedRef = toRef(obj, 'selected');

watch(
  selectedRef,
  (newValue, oldValue) => {
    if(newValue !== oldValue){
      alert('Thay đổi phương thức thanh toán là ' + newValue)
    }
  },
);

function addProduct() {
  obj.count++
}
</script>

<style lang="scss" scoped></style>
