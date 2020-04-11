<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" label-position="right">
      <ElFormItem label="Тип" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Доход">
          <ElOption label="Доход" value="INCOME"></ElOption>
          <ElOption label="Расход" value="OUTCOME"></ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Комментарий" prop="comment">
        <ElInput v-model="formData.comment"></ElInput>
      </ElFormItem>
      <ElFormItem label="Значение" prop="value">
        <ElInput v-model.number="formData.value"></ElInput>
      </ElFormItem>
      <ElButton type="primary" @click="onSubmit">Добавить</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      formData: {
        type: 'INCOME',
        comment: '',
        value: 0,
      },
      rules: {
        type: [{ required: true, message: 'Выберит тип операции', trigger: 'blur' }],
        comment: [{ required: true, message: 'Пожалуйста, введие комментарий', trigger: 'change' }],
        value: [
          { required: true, message: 'Введите значене операции', trigger: 'change' },
          { type: 'number', message: 'Значение должно быть числом' },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          this.$emit('submitForm', { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
</style>
