<template>
  <div>
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
      <span class="budget-comment">{{ item.comment }}</span>
      <span class="budget-value">{{ item.value }}</span>
      <ElButton type="danger" size="mini" @click="centerDialogVisible = true">Удалить</ElButton>

      <!-- <el-button type="text">Click to open the Dialog</el-button> -->

      <el-dialog title="Внимание" :visible.sync="centerDialogVisible" width="50%" center>
        <span>Вы собираетесь удалить операцию. В будущем ее нельзя будет восстановить. Удалить операцию?</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Отмена</el-button>
          <el-button
            type="primary"
            @click="[centerDialogVisible = false, deleteItem(item.id)]"
          >Удалить</el-button>
        </span>
      </el-dialog>
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
      defaul: () => ({}),
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
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
  margin-left: auto;
  margin-right: 20px;
}
</style>
