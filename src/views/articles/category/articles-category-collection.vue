<template>
  <div>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item
        label="Title"
        prop="title"
      >
        <el-input v-model="ruleForm.title" />
      </el-form-item>
      <el-form-item
        label="Content"
        prop="content"
      >
        <el-input
          v-model="ruleForm.content"
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
import { mixins } from 'vue-class-component';
import CollectionMixin from '@/components/Mixin/collection';
import { getOrganizations } from '@/api/organizations';
import { getRoles } from '@/api/roles';

@Component({
  name: 'articlesCategoryCollection',
  components: {
    AppContent
  }
})
export default class extends mixins(CollectionMixin) {
  @Prop({ required: true }) private entity!: any;

  created() {
    this.ruleForm = {
      title: '',
      content: ''
    };

    this.rules = {
      title: [
        { required: true, message: '请输入名称', trigger: 'blur' },
        { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
      ],
      description: []
    };
  }
  mounted() {
    if (this.entity) {
      this.ruleForm = {
        title: this.entity.title || '',
        content: this.entity.content || ''
      };
    }
  }
}
</script>

<style lang="scss">
</style>
