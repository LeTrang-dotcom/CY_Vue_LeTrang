<template>
  <div class="flex flex-row gap-4">
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox" :class="text">Từ ấy trong tôi bừng nắng hạ</label>
  </div>
</template>

<script setup>
  import {ref, watch} from 'vue'

  const checked = ref(false)
  const text = ref('')

  watch(checked, (newValue) => {
    if(newValue){
      text.value = 'text-green-500 font-bold'
    }else{
      text.value = 'text-red-500'
    }
  }, {immediate: true})

</script>

<style scoped></style>
