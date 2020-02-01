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
        label="上级部门"
        prop="parent"
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
              v-model="ruleForm.parent.name"
            />
          </el-popover>
        </div>
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
import { getOrganizations } from '@/api/organizations';
import { mixins } from 'vue-class-component';
import CollectionMixin from '@/components/Mixin/collection';

@Component({
  name: 'organizationCollection',
  components: {
    AppContent
  }
})
export default class extends mixins(CollectionMixin) {
  @Prop({ required: true }) private entity!: any;
  private orgs = [];

  private defaultProps = {
    children: 'children',
    label: 'name'
  };

  created() {
    this.ruleForm = {
      name: '',
      parent: {},
      description: ''
    };
    this.rules = {
      name: [
        { required: true, message: '请输入部门名称', trigger: 'blur' },
        { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
      ],
      parent: [],
      description: []
    };
  }

  mounted() {
    if (this.entity) {
      this.ruleForm = {
        name: this.entity.name,
        parent: this.entity.parent || {},
        description: this.entity.description
      };
    }
    this.getOrgs();
  }
  private async getOrgs() {
    const { data } = await getOrganizations({});
    if (data) {
      this.orgs = data;
    }
  }
  selectParent(data: any) {
    this.ruleForm.parent = data;
  }
}
</script>

<style lang="scss">
</style>
