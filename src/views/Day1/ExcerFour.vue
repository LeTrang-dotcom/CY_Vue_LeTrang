<template>
  <div class="w-full h-fit border p-5 flex flex-col gap-4">
    <div>
      <label for="firstNumber">Nhập số thứ nhất</label>
      <div class="border w-2/4 rounded-md">
        <input
          type="number"
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
          type="number"
          name="secondNumber"
          id="secondNumber"
          class="w-full pl-2"
          v-model="secondNumber"
        />
      </div>
    </div>
    <div>
      <label for="result">Kết quả</label>
      <div class="border h-fit w-2/4 rounded-md h-12">
        <p class="p-2 h-full">
          Tổng: {{ add }} <br>
          Hiệu: {{ minus }} <br>
          Tích: {{ multi }} <br>
          Thương: {{ divide }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref, watch} from 'vue'

  const firstNumber = ref(0)
  const secondNumber = ref(0)

  const add = ref(0)
  const minus = ref(0)
  const multi = ref(0)
  const divide =ref(0)

  function calculator(){
    add.value = parseFloat(firstNumber.value) + parseFloat(secondNumber.value)
    minus.value = parseFloat(firstNumber.value) - parseFloat(secondNumber.value)
    multi.value = parseFloat(firstNumber.value) * parseFloat(secondNumber.value)
    divide.value = parseFloat(firstNumber.value) / parseFloat(secondNumber.value)
  }
  watch([firstNumber, secondNumber], calculator);
</script>

<style scoped>

</style>
