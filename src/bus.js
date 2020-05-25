import Vue from 'vue'

export default new Vue({
    methods: {
      addTodo(name, done = false) {
        if (name) this.$emit('addTodo', name, done)
      },
      toggleTodo(index, value) {
        this.$emit('toggleTodo', index, value)
      }
    }
})
