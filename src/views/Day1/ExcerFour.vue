<template>
  <div class="w-full h-fit border p-5 flex flex-col gap-4">
    <div>
      <label for="firstNumber">Nhập số thứ nhất</label>
      <div class="border w-2/4 rounded-md">
        <input
          type="text"
          name="firstNumber"
          id="firstNumber"
          class="w-full pl-2"
          v-model="firstNumber"
        />
      </div>
    </div>
    <div>
      <label for="secondNumber">Nhập số thứ hai</label>
      <div class="border w-2/4 rounded-md">
        <input
          type="text"
          name="secondNumber"
          id="secondNumber"
          class="w-full pl-2"
          v-model="secondNumber"
        />
      </div>
    </div>
    <div>
      <label for="result">Kết quả</label>
      <div class="border w-2/4 rounded-md h-12">
        <p class="p-2">{{ result }}</p>
      </div>
    </div>
    <div class="flex flex-row gap-4 items-center">
      <button type="button" class="w-10 border bg-gray-300 rounded-md" @click="choose('add')">+</button>
      <button type="button" class="w-10 border bg-gray-300 rounded-md" @click="choose('minus')">-</button>
      <button type="button" class="w-10 border bg-gray-300 rounded-md" @click="choose('multi')">*</button>
      <button type="button" class="w-10 border bg-gray-300 rounded-md" @click="choose('divide')">/</button>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue'

  const firstNumber = ref('')
  const secondNumber = ref('')

  const result = ref('')

  function choose(feature){
    if(feature == 'add'){
      result.value = parseFloat(firstNumber.value) + parseFloat(secondNumber.value)
    }
    if(feature == 'minus'){
      result.value = parseFloat(firstNumber.value) - parseFloat(secondNumber.value)
    }
    if(feature == 'multi'){
      result.value = parseFloat(firstNumber.value) * parseFloat(secondNumber.value)
    }
    if(feature == 'divide'){
      result.value = parseFloat(firstNumber.value) / parseFloat(secondNumber.value)
    }
  }
</script>

<style scoped>

</style>
