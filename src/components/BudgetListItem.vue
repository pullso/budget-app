<template>
  <div>
    <div v-for="(item, prop) in list" :key="prop">
      <div :sort="sort" v-show="showSort(item.type)" class="list-item">
        <span class="budget-comment">{{ item.comment }}</span>
        <i v-if="item.type==='INCOME'" class="el-icon-top" style="color:green"></i>
        <i v-else class="el-icon-bottom" style="color:red"></i>
        <span class="budget-value">{{ item.value }}</span>

        <ElButton type="danger" size="mini" @click="centerDialogVisible = true">Удалить</ElButton>
      </div>
      <!-- <ElButton type="text">Click to open the Dialog</ElButton> -->

      <ElDialog title="Внимание" :visible.sync="centerDialogVisible" width="50%" center>
        <span>Вы собираетесь удалить операцию. В будущем ее нельзя будет восстановить. Удалить операцию?</span>
        <span slot="footer" class="dialog-footer">
          <ElButton @click="centerDialogVisible = false">Отмена</ElButton>
          <ElButton
            type="primary"
            @click="[centerDialogVisible = false, deleteItem(item.id)]"
          >Удалить</ElButton>
        </span>
      </ElDialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BudgetListItem',
  data() {
    return { centerDialogVisible: false };
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
    sort: {
      type: String,
      default: 'ALL',
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    showSort(item) {
      if (this.sort === 'ALL') return true;
      if (item === this.sort) return true;
    },
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  /* margin-left: auto; */
  margin-right: 20px;
}
i {
  margin-left: auto;
  margin-right: 7px;
}
</style>
