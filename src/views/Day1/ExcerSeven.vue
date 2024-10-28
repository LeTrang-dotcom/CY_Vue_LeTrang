<template>
  <div class="w-2/4 h-fit border p-5">
    <form action="" class="flex flex-col gap-4" @submit.prevent="submitHandler">
      <h1 class="text-3xl font-bold text-center">Đăng ký</h1>
      <div>
        <label for="name">Name *</label>
        <div class="border w-full rounded-md">
          <input
            type="text"
            name="name"
            id="name"
            class="w-full pl-2"
            v-model="name"
          />
        </div>
        <small class="text-red-500">{{ errMsgName }}</small>
      </div>
      <div>
        <label for="mail">Email *</label>
        <div class="border w-full rounded-md">
          <input
            type="email"
            name="mail"
            id="mail"
            class="w-full pl-2"
            v-model="mail"
          />
        </div>
        <small class="text-red-500">{{ errMsgMail }}</small>
      </div>
      <div>
        <label for="phone">Phone *</label>
        <div class="border w-full rounded-md">
          <input
            type="number"
            name="phone"
            id="phone"
            class="w-full pl-2"
            v-model="phone"
          />
        </div>
        <small class="text-red-500">{{ errMsgPhone }}</small>
      </div>
      <div>
        <label for="pass">Password *</label>
        <div class="border w-full rounded-md">
          <input
            type="password"
            name="pass"
            id="pass"
            class="w-full pl-2"
            v-model="pass"
          />
        </div>
        <small class="text-red-500">{{ errMsgPass }}</small>
      </div>
      <div>
        <label for="re-pass">Re-password *</label>
        <div class="border w-full rounded-md">
          <input
            type="password"
            name="re-pass"
            id="re-pass"
            class="w-full pl-2"
            v-model="re_pass"
          />
        </div>
        <small class="text-red-500">{{ errMsgRePass }}</small>
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="w-2/4 p-2 rounded-xl bg-blue-300"
          :class="changeButton"
          :disabled="isDisabled"
        >
          SIGN UP
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const name = ref('')
const mail = ref('')
const phone = ref('')
const pass = ref('')
const re_pass = ref('')
const errMsgName = ref('')
const errMsgMail = ref('')
const errMsgPhone = ref('')
const errMsgPass = ref('')
const errMsgRePass = ref('')
const changeButton = ref('')
const passLength = computed(() => {
  return pass.value.length
})
const isDisabled = ref(false)

function submitHandler() {
  let isValid = true
  if (name.value.trim() == '') {
    errMsgName.value = 'Vui lòng nhập họ và tên'
    isValid = false
  } else {
    errMsgName.value = ''
  }
  if (mail.value.trim() == '') {
    errMsgMail.value = 'Vui lòng nhập email'
    isValid = false
  } else {
    errMsgMail.value = ''
  }
  if (String(phone.value).trim() == '') {
    errMsgPhone.value = 'Vui lòng nhập số điện thoại'
    isValid = false
  } else {
    errMsgPhone.value = ''
  }
  if (String(pass.value).trim() == '') {
    errMsgPass.value = 'Vui lòng nhập password'
    isValid = false
  } else if (passLength.value < 8) {
    isValid = false
    errMsgPass.value = 'Độ dài mật khẩu phải lớn hơn hoặc bằng 8'
    changeButton.value = 'disabled:bg-gray-400 disabled:cursor-not-allowed'
    isDisabled.value = true
  } else {
    errMsgPass.value = ''
  }
  if (String(re_pass.value).trim() == '') {
    errMsgRePass.value = 'Vui lòng xác nhận mật khẩu'
    isValid = false
  } else if (re_pass.value != pass.value) {
    errMsgRePass.value = 'Xác nhận mật khẩu không đúng'
    isValid = false
  } else {
    errMsgRePass.value = ''
  }



  if (isValid) {
    alert('Form đã hoàn tất')
  }
}

watch(passLength, (newValue) => {
  if(newValue > 7){
    changeButton.value = 'bg-blue-300'
    isDisabled.value = false
  }else{
    changeButton.value = 'disabled:bg-gray-400 disabled:cursor-not-allowed'
    isDisabled.value = true
  }
}, {immediate: true});
</script>

<style lang="scss" scoped></style>
