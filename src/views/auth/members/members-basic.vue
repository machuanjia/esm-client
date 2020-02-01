<template>
  <div>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
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
        <el-input v-model="ruleForm.department.name" />
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

  private defaultProps = {
    children: 'children',
    label: 'name'
  };

  created() {
    this.ruleForm = {
      username: '',
      password: '',
      name: '',
      department: {},
      description: ''
    };

    this.getOrganizations();
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
}
</script>

<style lang="scss">
</style>
