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
        label="Location"
        prop="locationIds"
      >
        <el-select
          v-model="ruleForm.locationIds"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in locations"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="开始时间"
        prop="start"
      >
        <el-date-picker
          v-model="ruleForm.start"
          type="datetime"
          placeholder="选择日期时间"
        />
      </el-form-item>
      <el-form-item
        label="成员状态"
        prop="statusCategoryIds"
      >
        <el-select
          v-model="ruleForm.statusCategoryIds"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in status"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        label="成员"
        prop="memberIds"
      >
        <el-select
          v-model="ruleForm.memberIds"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in status"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
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
import { getLocations } from '@/api/locations';
import { getStatus } from '@/api/inoutboard';

@Component({
  name: 'companyStatusEventCollection',
  components: {
    AppContent
  }
})
export default class extends mixins(CollectionMixin) {
  @Prop({ required: true }) private entity!: any;
  private locations: any = [];
  private status: any = [];

  created() {
    this.ruleForm = {
      name: '',
      locations: [],
      start: '',
      statusCategoryIds: [],
      members: [],
      status: 1,
      description: ''
    };

    this.rules = {
      name: [
        { required: true, message: '请输入名称', trigger: 'blur' },
        { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
      ],
      description: []
    };
    this.getResourceLocations();
    this.getStatus();
  }

  mounted() {
    if (this.entity) {
      this.ruleForm = {
        name: this.entity.name || '',
        status: this.entity.status === undefined ? 1 : this.entity.status,
        description: this.entity.description || '',
        locations: this.entity.locations || [],
        start: this.entity.start || '',
        statusCategoryIds: this.entity.statusCategoryIds || [],
        members: this.entity.members || []
      };
    }
  }

  private async getResourceLocations() {
    const { data } = await getLocations({});
    if (data) {
      this.locations = data;
    }
  }
  private async getStatus() {
    const { data } = await getStatus({});
    if (data) {
      this.status = data;
    }
  }
}
</script>

<style lang="scss">
</style>
