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
        label="状态"
        prop="status"
      >
        <el-switch
          v-model="ruleForm.status"
          active-color="#13ce66"
          inactive-color="#ff4949"
          :active-value="1"
          :inactive-value="0"
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

@Component({
  name: 'scheduleCalenderCollection',
  components: {
    AppContent
  }
})
export default class extends mixins(CollectionMixin) {
  @Prop({ required: true }) private entity!: any;

  created() {
    this.ruleForm = {
      name: '',
      status: 1,
      description: ''
    };

    this.rules = {
      name: [
        { required: true, message: '请输入类型名称', trigger: 'blur' },
        { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
      ],
      description: []
    };
  }

  mounted() {
    if (this.entity) {
      this.ruleForm = {
        name: this.entity.name || '',
        status: this.entity.status === undefined ? 1 : this.entity.status,
        description: this.entity.description || ''
      };
    }
  }
}
</script>

<style lang="scss">
</style>
