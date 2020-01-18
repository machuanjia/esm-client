<template>
  <div>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item
        label="名称"
        prop="name"
      >
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item
        label="权限"
        prop="permissions"
      >
        <el-select
          v-model="ruleForm.parent"
          placeholder="请选择活动区域"
        >
          <el-option
            label="区域一"
            value="shanghai"
          />
          <el-option
            label="区域二"
            value="beijing"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="描述"
        prop="description"
      >
        <el-input
          v-model="ruleForm.description"
          type="textarea"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >
          确定
        </el-button>
        <el-button @click="resetForm('ruleForm')">
          取消
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';

@Component({
  name: 'rolesCollection',
  components: {
    AppContent
  }
})
export default class extends Vue {
  private ruleForm = {
    name: '',
    permissions: '',
    description: ''
  };

  private rules = {
    name: [
      { required: true, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    permissions: [
      { required: true, message: '请选择活动区域', trigger: 'change' }
    ],
    description: []
  };
  mounted() {}
  submitForm(formName: any) {
    const form: any = this.$refs[formName];
    form.validate((valid: any) => {
      if (valid) {
        this.$emit('saveAction');
      }
    });
  }
  resetForm(formName: any) {
    this.$emit('cancelAction');
  }
}
</script>

<style lang="scss">
</style>
