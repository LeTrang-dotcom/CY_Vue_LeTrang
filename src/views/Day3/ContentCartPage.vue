<template>
  <section class="h-[100vh] flex flex-col gap-10">
    <div>Home > Cart</div>
    <div
      v-if="uiControls.count == 0"
      class="flex justify-center items-center h-60"
    >
      <h1 class="text-center text-3xl">Không có sản phẩm nào trong giỏ hàng</h1>
    </div>
    <div v-else class="flex flex-row gap-4">
      <div class="w-4/6">
        <div class="flex flex-row gap-60 items-center">
          <p class="text-xs underline">Tiếp tục mua sắm</p>
          <h1 class="text-2xl font-bold">Giỏ hàng</h1>
        </div>
        <div class="flex flex-col gap-10">
          <div class="flex flex-row justify-between border-y-2 py-4">
            <div class="font-bold text-[#999999]">{{ uiControls.count }} SẢN PHẨM</div>
            <div class="font-bold text-[#999999]">SẢN PHẨM</div>
            <div class="font-bold text-[#999999]">GIÁ</div>
            <div class="font-bold text-[#999999]">SỐ LƯỢNG</div>
            <div class="font-bold text-[#999999]">TỔNG</div>
          </div>
          <div v-for="item in selectedProduct" :key="item" class="flex flex-row justify-between">
            <div class="w-20">
              <img :src="`/src/assets/images/${item.image}`" alt="item.name">
            </div>
            <div class="flex flex-col p-2 justify-between">
              <p class="font-bold">{{ item.name }}</p>
              <p>{{ item.colorVersions[uiControls.indexVersionColor].color }}</p>
            </div>
            <div>{{ formattedPrice(item.price) }}</div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div class="flex-1"></div>
    </div>
  </section>
</template>

<script setup>
import { uiControls } from './store'
import { products } from './store';
import { formattedPrice } from './store';

const selectedProduct = uiControls.arrProductId.map((item) => products.value[item - 1])

</script>
