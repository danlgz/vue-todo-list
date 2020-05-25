<template>
  <div class="todo" :class="[{done: done}]" @click="toggleTodo()">
    <input type="checkbox" :checked="done">
    <span>{{ name }}</span>
  </div>
</template>

<script>
import bus from '../bus'

export default {
    props: {
        name: String,
        done: Boolean,
    },
    methods: {
        toggleTodo() {
            bus.toggleTodo(this.$vnode.key, !this.done)
        }
    }
}
</script>

<style lang="scss">
    .todo {
        padding: 10px;
        font-size: 1.2rem;
        text-align: left;
        cursor: pointer;

        &.done {
            text-decoration: line-through;
            color: rgb(139, 139, 139);
        }

        input {
            cursor: pointer;
        }

        span {
            margin-left: 10px;
        }
    }
</style>