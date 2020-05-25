<template>
  <div class="todo-container">
      <Todo
        v-for="(todo, index) in todos"
        :key="index"
        :name="todo.name"
        :done="todo.done" />
  </div>
</template>

<script>
import Todo from './Todo'

export default {
    props: {
        todos: {
            type: Array,
            require: true
        }
    },
    components: {
        Todo
    }
}
</script>

<style lang="scss">
    .todo-container {
        width: 100%;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
    }
</style>