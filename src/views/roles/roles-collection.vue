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
        label="分组"
        prop="group"
      >
        <el-select
          v-model="ruleForm.group"
          placeholder="请选择角色分组"
        >
          <el-option
            v-for="item in groups"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="权限"
        prop="permissions"
      >
        <el-tree
          ref="tree"
          class="org-tree"
          :show-checkbox="true"
          :data="permissions"
          :props="defaultProps"
        />
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
          @click="submitRoleForm('ruleForm')"
        >
          确定
        </el-button>
        <el-button @click="cancelForm('ruleForm')">
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
import { getGroups } from '@/api/roles';
import { getApplicationPermissionsTree } from '@/api/permissions';
import { mixins } from 'vue-class-component';
import CollectionMixin from '@/components/Mixin/collection';
import { fromTextArea } from 'codemirror';

@Component({
  name: 'rolesCollection',
  components: {
    AppContent
  }
})
export default class extends mixins(CollectionMixin) {
  @Prop({ required: true }) private entity!: any;
  private groups: any = [];
  private permissions: any = [];
  private defaultProps = {
    children: 'children',
    label: 'name'
  };
  created() {
    this.ruleForm = {
      name: '',
      group: '',
      permissions: [],
      description: ''
    };

    this.rules = {
      name: [
        { required: true, message: '请输入角色名称', trigger: 'blur' },
        { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
      ]
    };
    this.getGroups();
    this.getApplicationPermissionsTree();
  }
  mounted() {
    if (this.entity) {
      this.ruleForm = {
        name: this.entity.name,
        group: this.entity.group || '',
        permissions: this.entity.permissions || [],
        description: this.entity.group || ''
      };
    }
  }
  submitRoleForm(form: any) {
    const tree: any = this.$refs.tree;
    const permissions = tree.getCheckedNodes();
    this.ruleForm.permissions = permissions;
    this.submitForm(form);
  }
  private async getGroups() {
    const { data } = await getGroups({});
    if (data) {
      this.groups = data;
    }
  }
  private async getApplicationPermissionsTree() {
    const { data } = await getApplicationPermissionsTree({});
    if (data) {
      this.permissions = data;
    }
  }
}
</script>

<style lang="scss">
</style>
