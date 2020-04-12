<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance />
    <BudgetList :list="list" />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList';
import TotalBalance from '@/components/TotalBalance';
import Form from '@/components/Form';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form
  },

  computed: {
    ...mapGetters('budget', ['list'])
  },
  methods: {
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      };
      this.$set(this.list, newObj.id, newObj);
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
  margin-top: 10px;
}
</style>
