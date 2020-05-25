<template>
  <header>
      <h1>ToDo List</h1>
      <div class="counters">
          <div class="counter">
              <strong>Total: {{total}}</strong>
          </div>
          <div class="counter" :class="[counterClass]">
              <strong>Pending: {{ pending }}</strong>
          </div>
      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        pending: {
            type: Number,
            required: true,
        },
        total: Number
    },
    computed: {
        counterClass() {
            if (this.pending == 0) return 'success'
            if (this.pending <= this.total / 2) return 'warning'
            return 'danger'
        }
    }
}
</script>

<style lang="scss">
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 2rem;
        }

        .counters {
            display: flex;

            .counter {
                margin: 0 10px;

                &.success {
                    color: rgb(24, 139, 30);
                }

                &.warning {
                    color: rgb(212, 128, 59);
                }

                &.danger {
                    color: rgb(170, 25, 25);
                }
            }
        }
    }
</style>