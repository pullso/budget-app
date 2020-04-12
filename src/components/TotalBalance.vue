<template>
  <ElCard class="total-value">
    <div :style="getColorBalance">Баланс: {{ totalBalance }}</div>
  </ElCard>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TotalBalance',

  computed: {
    ...mapGetters('budget', ['totalBalance']),
    getColorBalance() {
      if (this.totalBalance === 0) {
        return 'color:black';
      }
      return this.totalBalance > 0 ? 'color:green' : 'color:red';
    }
  }
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 10px 0;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}
</style>
