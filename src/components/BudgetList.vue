<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <div class="sort-buttons">
          <ElButtonGroup>
            <ElButton type="danger" @click="sort = 'OUTCOME'">
              <i class="el-icon-bottom"></i>
            </ElButton>
            <ElButton type="primary" @click="sort = 'ALL'">
              <i class="el-icon-sort"></i>
            </ElButton>
            <ElButton type="success" @click="sort = 'INCOME'">
              <i class="el-icon-top"></i>
            </ElButton>
          </ElButtonGroup>
        </div>
        <hr />
        <BudgetListItem :list="list" @deleteItem="onDeleteItem" :sort="sort" />
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
      sort: 'ALL',
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
.sort-buttons {
  display: flex;
  justify-content: space-around;
}
</style>
