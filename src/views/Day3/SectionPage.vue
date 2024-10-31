<template>
  <section class="flex flex-col gap-20">
    <div class="flex flex-col gap-4">
      <h1 class="text-2xl">ALL</h1>
      <div class="relative">
        <div class="flex flex-row gap-4 justify-between overflow-hidden">
          <div v-for="product in visibleProducts" :key="product.id">
            <div class="flex flex-col w-full border rounded-md shadow-xl">
              <div>
                <img
                  :src="`/src/assets/images/${product.image}`"
                  :alt="product.name"
                />
              </div>
              <div class="flex flex-col p-2 gap-2">
                <div class="flex flex-row justify-center gap-2">
                  <button
                    v-for="(item, index) in product.colorVersions"
                    :key="index"
                    @click="selectProductColor(product.id, index)"
                    :class="
                      index === uiState.colorSelection[product.id]
                        ? 'w-6 h-6'
                        : 'w-5 h-5'
                    "
                  >
                    <div
                      class="w-full h-full rounded-full border"
                      :class="colorMap[item.color]"
                    ></div>
                  </button>
                </div>
                <h3>{{ product.name.toUpperCase() }}</h3>
                <p>{{ formattedPrice(product.price) }}</p>
                <p class="text-sm">Release date: {{ product.releaseDate }}</p>
                <p class="text-sm font-bold italic">{{ product.brand }}</p>
                <div class="flex justify-center">
                  <button
                    type="button"
                    class="border p-2 text-[#54575E]"
                    :disabled="uiState.isDisabledAddToCart[product.id]"
                    :class="uiState.disabledButton[product.id]"
                    @click="addToCart(product.id)"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="absolute top-1/3"
          @click="preProduct('button1')"
        >
          <font-awesome-icon
            :icon="['fas', 'chevron-left']"
            class="w-10 h-10 text-[#54575E] hover:text-black"
          />
          <span hidden>Previous</span>
        </button>
        <button
          type="button"
          class="absolute top-1/3 right-0"
          @click="nextProduct('button1')"
        >
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            class="w-10 h-10 text-[#54575E] hover:text-black"
          />
          <span hidden>Next</span>
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h1 class="text-2xl">BEST SELLING ITEMS</h1>
      <div class="relative">
        <div class="flex flex-row gap-4 justify-between overflow-hidden">
          <div v-for="product in visibleBestSelling" :key="product.id">
            <div class="flex flex-col w-full border rounded-md shadow-xl">
              <div>
                <img
                  :src="`/src/assets/images/${product.image}`"
                  :alt="product.name"
                />
              </div>
              <div class="flex flex-col p-2 gap-2">
                <div class="flex flex-row justify-center gap-2">
                  <button
                    v-for="(item, index) in product.colorVersions"
                    :key="index"
                    @click="selectProductColor(product.id, index)"
                    :class="
                      index === uiState.colorSelection[product.id]
                        ? 'w-6 h-6'
                        : 'w-5 h-5'
                    "
                  >
                    <div
                      class="w-full h-full rounded-full border"
                      :class="colorMap[item.color]"
                    ></div>
                  </button>
                </div>
                <h3>{{ product.name.toUpperCase() }}</h3>
                <p>{{ formattedPrice(product.price) }}</p>
                <p class="text-sm">Release date: {{ product.releaseDate }}</p>
                <p class="text-sm font-bold italic">{{ product.brand }}</p>
                <div class="flex justify-center">
                  <button
                    type="button"
                    class="border p-2 text-[#54575E]"
                    :disabled="uiState.isDisabledAddToCart[product.id]"
                    :class="uiState.disabledButton[product.id]"
                    @click="addToCart(product.id)"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="absolute top-1/3"
          @click="preProduct('button2')"
        >
          <font-awesome-icon
            :icon="['fas', 'chevron-left']"
            class="w-10 h-10 text-[#54575E] hover:text-black"
          />
          <span hidden>Previous</span>
        </button>
        <button
          type="button"
          class="absolute top-1/3 right-0"
          @click="nextProduct('button2')"
        >
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            class="w-10 h-10 text-[#54575E] hover:text-black"
          />
          <span hidden>Next</span>
        </button>
      </div>
    </div>
  </section>
</template>
<!--
Tạo danh sách các sản phẩm bao gồm các thuộc tính:
 id, tên, giá, ngày phát hành, có phải sản phẩm bán chạy hay không, nhãn hiệu(brand),
 mô tả, hình ảnh, các phiên bản màu sắc
 -->
<script setup>
import { computed, reactive, watch } from 'vue'
import { uiControls } from './store'
import { formattedPrice } from './store';

import { products } from './store';
const colorMap = {
  Black: 'bg-black',
  Red: 'bg-red-500',
  Blue: 'bg-blue-500',
  White: 'bg-white',
  Grey: 'bg-gray-500',
  Navy: 'bg-blue-900',
  Emerald: 'bg-emerald-500',
  Burgundy: 'bg-red-700',
  Olive: 'bg-olive-600',
  'Denim Blue': 'bg-blue-400',
  'Light Blue': 'bg-blue-200',
  Yellow: 'bg-yellow-500',
  Green: 'bg-green-500',
  Coral: 'bg-orange-300',
  Gold: 'bg-yellow-300',
  Beige: 'bg-yellow-100',
  Charcoal: 'bg-gray-800',
}

const uiState = reactive({
  isDisabledAddToCart: {},
  disabledButton: {},
  colorSelection: {},
  selectedProduct: {},
  startIndexButton1: 0,
  startIndexButton2: 0,
  productsShowButton1: 4,
  productsShowButton2: 4,
})

const visibleProducts = computed(() => {
  return products.value.slice(
    uiState.startIndexButton1,
    uiState.productsShowButton1,
  )
})

const bestSellingProducts = products.value.filter(item => item.hot === true)

const visibleBestSelling = computed(() => {
  return bestSellingProducts.slice(
    uiState.startIndexButton2,
    uiState.productsShowButton2,
  )
})

function checkQuantity(productId) {
  const quantity =
    products.value[productId - 1].colorVersions[
      uiState.colorSelection[productId]
    ].quantity
  if (quantity < 1) {
    uiState.isDisabledAddToCart[productId] = true
    uiState.disabledButton[productId] = 'cursor-not-allowed'
  } else {
    uiState.isDisabledAddToCart[productId] = false
    uiState.disabledButton[productId] = 'hover:text-black'
  }
}

function selectProductColor(productId, colorId) {
  uiState.colorSelection[productId] = colorId
  uiControls.indexVersionColor = colorId
  uiState.selectedProduct = productId
  checkQuantity(productId)
}



function preProduct(buttonId) {
  if (buttonId == 'button1' && uiState.startIndexButton1 != 0) {
    uiState.startIndexButton1--
    uiState.productsShowButton1--
  }
  if (
    buttonId == 'button2' &&
    uiState.startIndexButton2 != 0
  ) {
    uiState.startIndexButton2--
    uiState.productsShowButton2--
  }
}


function nextProduct(buttonId) {
  if (buttonId == 'button1' && uiState.productsShowButton1 < products.value.length) {
    uiState.startIndexButton1++
    uiState.productsShowButton1++
  }
  if (
    buttonId == 'button2' &&
    uiState.productsShowButton2 < bestSellingProducts.length
  ) {
    uiState.startIndexButton2++
    uiState.productsShowButton2++
  }
}

function addToCart(productId) {
  uiControls.productId = productId
  uiControls.numberProduct++
  uiControls.count++
  products.value[uiState.selectedProduct - 1].colorVersions[
    uiControls.indexVersionColor
  ].quantity--

  checkQuantity(productId)
}

watch(() => uiControls.productId, () => {
  uiControls.arrProductId.push(uiControls.productId)
  uiControls.quantityProductId++                                                                                                                                                                                                                               

  uiControls.numberProduct++
})
</script>

<style lang="scss" scoped></style>
