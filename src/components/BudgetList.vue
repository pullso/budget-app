<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <BudgetListItem :list="list" @deleteItem="onDeleteItem" />
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false"></ElAlert>
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from './BudgetListItem';

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      defaul: () => ({}),
    },
  },
  data() {
    return {
      header: 'Список операций',
      emptyTitle: 'Список операций пуст',
    };
  },
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>
