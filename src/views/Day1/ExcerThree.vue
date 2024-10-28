<template>
  <div class="w-full  border p-5">
    <div>
      <label for="size">Nhập size chữ</label>
      <div class="border w-2/4 rounded-md">
        <input
          type="text"
          name="size"
          id="size"
          class="w-full pl-2"
          @input="changeInput($event)"
        />
      </div>
    </div>
    <div>
      <label for="squareArea">Bài thơ "Từ ấy"</label>
      <div class="border w-full h-fit rounded-md h-12">
        <pre :class="changeSize" class="p-2 italic">
          Từ ấy trong tôi bừng nắng hạ
          Mặt trời chân lý chói qua tim
          Hồn tôi là một vườn hoa lá
          Rất đậm hương và rộn tiếng chim...

          Tôi buộc lòng tôi với mọi người
          Để tình trang trải với trăm nơi
          Để hồn tôi với bao hồn khổ
          Gần gũi nhau thêm mạnh khối đời

          Tôi đã là con của vạn nhà
          Là em của vạn kiếp phôi pha
          Là anh của vạn đầu em nhỏ
          Không áo cơm, cù bất cù bơ...
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref, computed} from 'vue'
  let fontSize = ref(12)

  function changeInput(event){
    fontSize.value = event.target.value
  }

  const changeSize = computed(() => {
    return "text-[" + fontSize.value + "px]"
  })

</script>

<style scoped></style>
