<template>
  <div class="input-container">
      <div class="input-wrapper">
          <input
            type="text"
            placeholder="Add ToDo..."
            v-model="todoName"
            @keyup.enter="addTodo()">
          <button @click="addTodo()">Add</button>
      </div>
  </div>
</template>

<script>
import bus from '../bus'

export default {
    data() {
        return {
            todoName: ''
        }
    },
    methods: {
        addTodo() {
            bus.addTodo(this.todoName)
            this.todoName = ''
        }
    }
}
</script>

<style lang="scss">
    $radius: 12px;
    $border: 1px solid rgb(182, 182, 182);

    .input-container {
        padding: 1rem 0;

        .input-wrapper {
            border: $border;
            border-radius: $radius;
            
            display: flex;
            flex-direction: row;

            width: 100%;
            padding: 0;

            button {
                padding: 0 30px;
                border-radius: 0 $radius $radius 0;
                border: none;
                outline: none;
                text-transform: uppercase;
                color: white;
                font-weight: bold;
                font-size: 1rem;
                background-color: rgb(136, 83, 204);
            }

            input {
                padding: 10px 25px;
                border-radius: $radius 0 0 $radius;
                height: 2.5rem;
                font-size: 1.5rem;
                outline: none;
                border: none;
                flex: 1;
                width: inherit;
            }
        }
    }
</style>