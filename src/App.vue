<template>
  <div id="app">
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="list" @deleteItem="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance
  },
  data() {
    return {
      list: {
        1: {
          type: 'INCOME',
          value: 10000,
          comment: 'Разработка сайта',
          id: 1
        },
        2: {
          type: 'OUTCOME',
          value: -2500,
          comment: 'Услуги дизайнера ',
          id: 2
        }
      }
    };
  },
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0);
    }
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
