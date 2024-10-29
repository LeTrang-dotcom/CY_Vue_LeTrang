<template>
  <div
    class="container min-w-[350px] h-[500px] border p-4 flex flex-col gap-5 shadow-md rounded-md bg-[#F9F9F9]"
  >
    <header class="relative">
      <div class="flex flex-row justify-between items-center">
        <div>
          <h1 class="font-bold text-xl">Today's Task</h1>
          <p class="text-gray-400 text-sm">Webnesday, 11 May</p>
        </div>
        <div class="w-[100px]">
          <button
            type="button"
            class="border w-full rounded-md bg-[#E2EBFA] text-[#347CFB] shadow-md"
            @click="addTask"
          >
            + New task
          </button>
        </div>
      </div>

      <div
        class="absolute z-10 bg-white mx-auto top-1/2 left-1/2 -translate-x-1/2"
        :hidden="obj.isHidden"
      >
        <form
          action=""
          @submit.prevent="handleSubmit"
          class="flex flex-col gap-2 border rounded-md w-[350px] p-4"
        >
          <input
            type="text"
            name="task"
            placeholder="Nhập tên task"
            v-model="obj.nameTask"
            class="w-full h-10 p-2 border rounded-md"
          />
          <textarea
            name="task"
            id="task"
            rows="5"
            class="w-full p-2 border rounded-md"
            v-model="obj.descriptionTask"
          ></textarea>
          <div>
            <button
              type="submit"
              class="w-full h-10 p-2 border rounded-md bg-[#E2EBFA] text-[#347CFB] shadow-md"
            >
              {{ obj.featureTask }}
            </button>
          </div>
        </form>
      </div>
    </header>

    <section>
      <div class="flex flex-col gap-4">
        <div
          v-for="item in todoList"
          :key="item.id"
          class="flex flex-col gap-2 shadow p-4 bg-white"
        >
          <div class="flex flex-row justify-between">
            <h1>{{ item.name }}</h1>
            <div class="flex flex-row w-10 justify-between">
              <button type="button" class="w-4" @click="editTask(item)">
                <img src="/src/assets/pen-to-square.svg" alt="pen to square" />
              </button>
              <button type="button" class="w-4" @click="deleteTask(item)">
                <img src="@/assets/trash-can.svg" alt="trash can" />
              </button>
            </div>
          </div>
          <div>
            {{ item.description }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
let currentEdit = ''
const todoList = ref([
  {
    id: 1,
    name: 'Client Review & Feedback',
    description: 'Phải hoàn thành trước thứ 6',
  },
  {
    id: 2,
    name: 'Create WireFrame',
    description: 'Phải hoàn thành trước thứ 6',
  },
])

const obj = reactive({
  isHidden: true,
  nameTask: '',
  descriptionTask: '',
  featureTask: '',
})

function addTask() {
  obj.isHidden = false
  obj.nameTask = ''
  obj.descriptionTask = ''
  obj.featureTask = 'Add task'
}

function handleSubmit() {
  obj.isHidden = true
  if (obj.featureTask == 'Add task') {
    todoList.value.push({
      id: new Date(),
      name: obj.nameTask,
      description: obj.descriptionTask,
    })
    console.log(todoList.value)
  } else {
    const itemEdit = todoList.value.find((item) => item.id === currentEdit)
    itemEdit.name = obj.nameTask
    itemEdit.description = obj.descriptionTask
  }
}

function deleteTask(element) {
  todoList.value = todoList.value.filter(item => item.id != element.id)
  console.log(todoList.value)
}

function editTask(element) {
  currentEdit = element.id
  obj.isHidden = false
  obj.nameTask = element.name
  obj.descriptionTask = element.description
  obj.featureTask = 'Edit task'
}
</script>

<style lang="scss" scoped></style>
