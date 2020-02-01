<template>
  <div>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item
        label="用户名"
        prop="username"
      >
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          v-model="ruleForm.password"
          type="password"
        />
      </el-form-item>

      <el-form-item
        label="部门"
        prop="department"
      >
        <div>
          <el-popover
            placement="bottom"
            width="460"
            trigger="click"
          >
            <el-tree
              class="org-tree"
              :data="orgs"
              :props="defaultProps"
              @node-click="selectParent"
            />
            <el-input
              slot="reference"
              v-model="ruleForm.department.name"
            />
          </el-popover>
        </div>
      </el-form-item>
      <el-form-item
        label="角色"
        prop="roles"
      >
        <el-cascader
          v-model="ruleForm.roles"
          style="width:100%"
          :options="roles"
          :props="rolesProps"
          clearable
        />
      </el-form-item>
      <el-form-item
        label="姓名"
        prop="姓名"
      >
        <el-input v-model="ruleForm.username" />
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
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';
import { mixins } from 'vue-class-component';
import CollectionMixin from '@/components/Mixin/collection';
import { getOrganizations } from '@/api/organizations';
import { getRoles } from '@/api/roles';

@Component({
  name: 'membersCollection',
  components: {
    AppContent
  }
})
export default class extends mixins(CollectionMixin) {
  @Prop({ required: true }) private entity!: any;
  private orgs: any = [];
  private roles: any = [];

  private defaultProps = {
    children: 'children',
    label: 'name'
  };
  private rolesProps = {
    ...this.defaultProps,
    multiple: true
  };

  created() {
    this.ruleForm = {
      username: '',
      password: '',
      name: '',
      department: {},
      roles: [],
      description: ''
    };

    this.rules = {
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
      ],
      name: [
        { required: true, message: '请输入成员名称', trigger: 'blur' },
        { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
      ],
      department: [
        { required: true, message: '请选择部门区域', trigger: 'change' }
      ],
      roles: [{ required: true, message: '请选择角色', trigger: 'change' }],
      description: []
    };
    this.getOrganizations();
    this.getRoles();
  }
  mounted() {
    if (this.entity) {
      this.ruleForm = {
        username: this.entity.username || '',
        password: this.entity.password || '',
        name: this.entity.name || '',
        department: this.entity.department || {},
        roles: this.entity.roles || [],
        description: this.entity.description || ''
      };
    }
  }
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
  selectParent(data: any) {
    this.ruleForm.department = data;
  }
  private async getOrganizations() {
    const { data } = await getOrganizations({});
    if (data) {
      this.orgs = [
        {
          id: 0,
          name: '北京华阳云正科技有限公司',
          children: data
        }
      ];
    }
  }
  private async getRoles() {
    const { data } = await getRoles({});
    if (data) {
      this.roles = data;
    }
  }
}
</script>

<style lang="scss">
</style>
