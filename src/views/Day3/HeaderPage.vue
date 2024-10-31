<template>
  <header class="flex flex-row items-center ">
    <h1 class="text-3xl font-bold italic w-2/6">PHONG CÁCH</h1>
    <ul class="flex flex-row w-3/6 justify-between">
      <li>
        <a href="#" class="hover:bg-transparent text-[#54575E] hover:text-black"
          >HOME</a
        >
      </li>
      <li>
        <a href="#" class="hover:bg-transparent text-[#54575E] hover:text-black"
          >SHOP</a
        >
      </li>
      <li>
        <a href="#" class="hover:bg-transparent text-[#54575E] hover:text-black"
          >BLOG</a
        >
      </li>
      <li>
        <a href="#" class="hover:bg-transparent text-[#54575E] hover:text-black"
          >PAGES</a
        >
      </li>
      <li>
        <a href="#" class="hover:bg-transparent text-[#54575E] hover:text-black"
          >CONTACT</a
        >
      </li>
    </ul>
    <div class="w-1/6 flex justify-end">
      <div class="relative w-5 h-5">
        <button class="absolute z-0">
          <router-link to="/cart" class="hover:bg-transparent text-black">
            <font-awesome-icon :icon="['fas', 'cart-plus']" />
          </router-link>
          <!-- <a href="" class="hover:bg-transparent text-black">
            <font-awesome-icon :icon="['fas', 'cart-plus']" />
          </a> -->
        </button>
        <div
          class="w-4 h-4 bg-white rounded-full absolute border z-10 -top-1/4 -right-1/4 flex justify-center items-center text-[10px]"
          :class="isHiddenQuantityBlock"
        >
          {{ uiControls.count }}
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { uiControls } from './store'

const isHiddenQuantityBlock = ref('opacity-0')

watch(
  () => uiControls.count,
  newValue => {
    isHiddenQuantityBlock.value = newValue === 0 ? 'opacity-0' : 'opacity-1'
  },
)
</script>

<style lang="scss" scoped></style>
