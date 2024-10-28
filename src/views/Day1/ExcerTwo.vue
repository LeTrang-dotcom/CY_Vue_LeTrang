<template>
  <div class="w-full h-40 border p-5">
    <div>
      <label for="length">Nhập chiều dài</label>
      <div class="border w-2/4 rounded-md">
        <input
          type="text"
          name="length"
          id="length"
          class="w-full pl-2"
          @input="changeInput($event)"
        />
      </div>
    </div>
    <div>
      <label for="squareArea">Diện tích hình vuông</label>
      <div class="border w-2/4 rounded-md h-12">
        <p class="p-2">{{ squareArea }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
let length = ref(0)
function changeInput(event) {
  length.value = event.target.value
}

const squareArea = computed(() => {
  return Math.pow(length.value, 2)
})

</script>

<style lang="scss" scoped></style>
