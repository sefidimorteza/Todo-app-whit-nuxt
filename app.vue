<template>
  <div class="container mt-5 w-50">
    <Card class="p-1 flex flex-col text-center">
      <CardHeader class="text">TodoList</CardHeader>
      <CardBody>
        <div class="d-flex justify-center">
          <input type="text" v-model="input" class="form-control" placeholder="Add New Todo">
          <button @click="add" class="btn btn-info" label="ثبت">ثبت</button>
        </div>
      </CardBody>
      <Card v-for="todo in todos" :key="todo.id" class="mt-3 p-2 border-info">
        <div class="items" @click="updateTodo(todo.id)">
          <h4 :class="todo.complate ? 'complated border-success' : null">{{ todo.item }}</h4>
          <p @click="deletetodo(todo.id)">X</p>
        </div>
      </Card>

    </card>
  </div>
</template>
<script setup lang="ts">

import useTodos from './composables/useTodos'

const { todos, addtodo, updateTodo, deletetodo } = useTodos()
const input = ref("")

const add = () => {
  addtodo(input.value)
  input.value = ""
}
</script>
<style scoped>
.size {
  width: 50%;
  display: flex;
}

.items {
  display: flex;
  justify-content: space-between
}

p {
  cursor: pointer;
}

.complated {
  text-decoration: line-through;
}
</style>