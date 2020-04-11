<template>
  <div class="total-value" :style="getColorTotal()">Баланс: {{ total }}</div>
</template>

<script>
export default {
  name: 'TotalBalance',
  data() {
    return {};
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    getColorTotal() {
      if (this.total === 0) {
        return 'color:black';
      }
      return this.total > 0 ? 'color:green' : 'color:red';
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>
