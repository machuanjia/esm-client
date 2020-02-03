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
        label="编码"
        prop="code"
      >
        <el-input v-model="ruleForm.code" />
      </el-form-item>
      <el-form-item
        label="Phone"
        prop="phone"
      >
        <el-input v-model="ruleForm.phone" />
      </el-form-item>
      <el-form-item
        label="Fax"
        prop="fax"
      >
        <el-input v-model="ruleForm.fax" />
      </el-form-item>
      <el-form-item
        label="国家"
        prop="country"
      >
        <el-input v-model="ruleForm.country" />
      </el-form-item>
      <el-form-item
        label="城市"
        prop="city"
      >
        <el-input v-model="ruleForm.city" />
      </el-form-item>
      <el-form-item
        label="地址"
        prop="address"
      >
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item
        label="邮编"
        prop="postal"
      >
        <el-input v-model="ruleForm.name" />
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
  name: 'locationCollection',
  components: {
    AppContent
  }
})
export default class extends mixins(CollectionMixin) {
  @Prop({ required: true }) private entity!: any;

  created() {
    this.ruleForm = {
      name: '',
      code: '',
      phone: '',
      fax: '',
      country: '',
      city: '',
      address: '',
      postal: '',
      description: ''
    };

    this.rules = {
      name: [
        { required: true, message: '请输入类型名称', trigger: 'blur' },
        { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
      ],
      code: [
        { required: true, message: '请输入编码', trigger: 'blur' },
        { min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
      ],
      description: []
    };
  }

  mounted() {
    if (this.entity) {
      this.ruleForm = {
        name: this.entity.name || '',
        description: this.entity.description || '',
        code: this.entity.code || '',
        phone: this.entity.phone || '',
        fax: this.entity.fax || '',
        country: this.entity.country || '',
        city: this.entity.city || '',
        address: this.entity.address || '',
        postal: this.entity.postal || ''
      };
    }
  }
}
</script>

<style lang="scss">
</style>
