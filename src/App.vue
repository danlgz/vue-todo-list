<template>
  <div id="app">
    <Header :pending="pedingCount" :total="totalCount" />
    <ToDoCreator />
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import bus from './bus'
import Header from './components/Header.vue'
import ToDoCreator from './components/ToDoCreator.vue'
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    Header,
    ToDoCreator,
    TodoList
  },
  data() {
    return {
      todos: [],
    }
  },
  computed: {
    pedingCount() {
      return this.todos.filter(e => !e.done).length
    },
    totalCount() {
      return this.todos.length
    }
  },
  created() {
    bus.$on('addTodo', (name, done = false) => {
      this.todos = [
        {
          name: name,
          done: done,
        },
        ...this.todos
      ]
    })

    bus.$on('toggleTodo', (index, done) => {
      this.todos[index].done = done;
    })


    bus.addTodo('Hoja de trabajo 3 matematicas')
    bus.addTodo('Proyecto final', true)
    bus.addTodo('Hacer la cena')
    bus.addTodo('Lavar ropa')
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');

  * {
    font-family: 'Josefin Sans', sans-serif !important;
  }

  body {
    margin: 0 20px;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 100%;
    max-width: 990px;
    margin: 0 auto;
    margin-top: 50px;
  }
</style>
