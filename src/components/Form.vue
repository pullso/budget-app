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
    const checkValue = (rule, value, callback) => {
      if (value < 0 || value == 0) {
        return callback(new Error('Пожалуйста, введите значение > 0'));
      }
      callback();
    };
    return {
      header: 'Добавить операцию',
      formData: {
        type: 'INCOME',
        comment: '',
        value: 0,
      },
      rules: {
        type: [{ required: true, message: 'Выберит тип операции', trigger: 'blur' }],
        comment: [{ required: true, message: 'Пожалуйста, введие комментарий', trigger: 'change' }],
        value: [
          {
            required: true,
            message: 'Введите значение операции',
            trigger: 'change',
          },
          {
            type: 'number',
            message: 'Значение должно быть числом',
            trigger: 'change',
          },
          { validator: checkValue },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          if (this.formData.type === 'OUTCOME' && this.formData.value >= 0) {
            this.formData.value *= -1;
          }
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
  margin: 0 auto;
  padding-top: 0px;
}
.type-select {
  width: 100%;
}
</style>
