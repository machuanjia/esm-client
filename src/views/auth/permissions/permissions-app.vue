<template>
  <app-content
    class="permissions-app"
    :is-flex-header="true"
    :is-hright="true"
    :is-hcenter="true"
  >
    <template v-slot:hcenter>
      <el-input
        v-model="searchText"
        class="search-container"
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
      />
    </template>
    <template v-slot:hright>
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="openCollectionAction"
      >
        权限
      </el-button>
    </template>
    <template v-slot:body>
      <el-table
        :data="permissionsData"
        row-key="id"
        border
        fit
        highlight-current-row
      >
        <el-table-column
          prop="name"
          label="名称"
          sortable
          width="180"
        />

        <el-table-column
          prop="description"
          label="描述"
        />

        <el-table-column
          width="120"
          align="center"
          label="类型"
        >
          <template slot-scope="{row}">
            {{ row.type ? '自定义' : '系统' }}
          </template>
        </el-table-column>
        <el-table-column
          width="120"
          align="center"
          label="操作"
        >
          <template slot-scope="{row}">
            <i
              v-if="row.type"
              class="el-icon-edit-outline table-icon-action"
              @click="editAction(row)"
            />
            <i
              v-if="row.type"
              class="el-icon-delete table-icon-action"
              @click="removeAction(row)"
            />
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        v-if="collectionVisible"
        :title="collectionTitle"
        :visible.sync="collectionVisible"
        :width="collectionSize"
      >
        <permissionAppCollection
          :entity="entity"
          @saveAction="saveAction"
          @cancelAction="cancelAction"
        />
      </el-dialog>
    </template>
  </app-content>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';
import {
  getApplicationPermissions,
  addApplicationPermission,
  getApplicationPermission,
  updateApplicationPermission,
  deleteApplicationPermission
} from '@/api/permissions';
import { mixins } from 'vue-class-component';
import ViewMixin from '@/components/Mixin';
import permissionAppCollection from '@/views/auth/permissions/permissions-app-collection.vue';
import { updateApplication } from '@/api/applications';

@Component({
  name: 'permissionsApp',
  components: {
    AppContent,
    permissionAppCollection
  }
})
export default class extends mixins(ViewMixin) {
  @Prop({ required: true }) private app!: any;

  private permissionsData: any = [];

  mounted() {
    this.getApplicationPermissions();
  }

  async editAction(row: any) {
    const { data } = await getApplicationPermission(this.app.id, row.id, {});
    if (data) {
      this.editCollectionAction(data)
    }
  }

  removeAction(row: any) {
    this.removeCollectionAction(async(successFn: any) => {
      const { data } = await deleteApplicationPermission(this.app.id, row.id);
      this.deleteCollection(this.permissionsData, row);
      if (successFn) {
        successFn();
      }
    });
  }

  saveAction(data: any) {
    if (this.entity) {
      this.updateApplicationPermission(this.entity.id, data);
    } else {
      this.addApplicationPermission(data);
    }
    this.closeCollectionaction();
  }

  cancelAction() {
    this.closeCollectionaction();
  }

  private async getApplicationPermissions() {
    const { data } = await getApplicationPermissions(this.app.id, {});
    if (data) {
      this.permissionsData = data;
    }
  }

  private async addApplicationPermission(payload: any) {
    const { data } = await addApplicationPermission(this.app.id, payload);
    if (data) {
      this.pushCollection(this.permissionsData, data);
    }
  }

  private async updateApplicationPermission(id: number, payload: any) {
    const { data } = await updateApplicationPermission(
      this.app.id,
      id,
      payload
    );
    if (data) {
      this.updateCollection(this.permissionsData, data);
    }
  }
}
</script>

<style lang="scss">
.permissions-app {
  padding: 0;
}
</style>
