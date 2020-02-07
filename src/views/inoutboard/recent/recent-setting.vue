<template>
  <div class="recent-setting-wrap">
    <el-form
      :label-position="'top'"
      label-width="80px"
    >
      <el-form-item label="部门">
        <el-popover
          placement="bottom"
          trigger="click"
          :width="200"
        >
          <el-tree
            class="org-tree"
            :data="orgs"
            :props="defaultProps"
            @node-click="selectParent"
          />
          <el-input
            slot="reference"
            v-model="searchOrg.name"
            placeholder="请选择部门"
            class="mr5 mb5"
            style="width:200px"
          />
        </el-popover>
      </el-form-item>
      <el-form-item label="状态">
        <el-select
          v-model="searchStatus"
          placeholder="请选择状态"
          class="mr5 mb5"
        >
          <el-option
            v-for="item in status"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Locations">
        <el-select
          v-model="searchLocation"
          placeholder="请选择Locations"
          class="mr5 mb5"
        >
          <el-option
            v-for="item in locations"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          确定
        </el-button>
        <el-button>重置</el-button>
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
import { getLocations } from '@/api/locations';
import { getInoutBoardStatuses } from '@/api/inoutboard';
import * as _ from 'lodash';

@Component({
  name: 'recentSetting',
  components: {
    AppContent
  }
})
export default class extends mixins(CollectionMixin) {
  // @Prop({ required: true }) private entity!: any;
  private orgs: any = [];

  private searchOrg: any = {};

  private locations: any = [];

  private searchLocation = '';

  private status: any = [];

  private searchStatus = '';

  private defaultProps = {
    children: 'children',
    label: 'name'
  };

  created() {
    this.getOrganizations();
    this.getInoutBoardStatuses();
    this.getLocations();
  }

  mounted() {}

  onSubmit() {}

  selectParent(data: any) {
    this.searchOrg = data;
  }

  private async getOrganizations() {
    const { data } = await getOrganizations({});
    if (data) {
      this.orgs = data;
    }
  }
  private async getInoutBoardStatuses() {
    const { data } = await getInoutBoardStatuses({});
    if (data) {
      this.status = data;
    }
  }
  private async getLocations() {
    const { data } = await getLocations({});
    if (data) {
      this.locations = data;
    }
  }
}
</script>

<style lang="scss" scoped>
.recent-setting-wrap {
  padding: 0 20px;
}
</style>
