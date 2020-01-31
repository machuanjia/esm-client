<template>
  <app-content
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
        @click="openAction"
      >
        角色
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="addGroup"
      >
        分组
      </el-button>
    </template>
    <template v-slot:body>
      <el-table
        :data="rolesData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        default-expand-all
        fit
        highlight-current-row
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column
          prop="name"
          label="名称"
          sortable
          width="180"
        />

        <el-table-column
          label="权限"
          sortable
          width="260"
        >
          <template slot-scope="{row}">
            {{ row.permissions | rolesPermissions }}
          </template>
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
        />
        <el-table-column
          width="160"
          align="center"
          label="操作"
        >
          <template slot-scope="{row}">
            <span
              v-if="!row.type"
              class="setting-icon mr5"
              @click="openDetailAction(row)"
            >
              <span class="flex-r-center">
                <i class="el-icon-setting" /> 设置
              </span>
            </span>
            <i
              v-if="!row.type"
              class="el-icon-edit-outline table-icon-action"
              @click="editAction(row)"
            />
            <i
              v-if="row.type"
              class="el-icon-edit-outline table-icon-action"
              @click="editGroup(row)"
            />
            <i
              v-if="!row.type"
              class="el-icon-delete table-icon-action"
              @click="removeAction(row)"
            />
            <i
              v-if="row.type"
              class="el-icon-delete table-icon-action"
              @click="removeGroup(row)"
            />
          </template>
        </el-table-column>
      </el-table>
      <el-drawer
        v-if="detailVisible"
        title="设置"
        :append-to-body="true"
        :visible.sync="detailVisible"
        :direction="'rtl'"
        :size="drawerSize"
      >
        <rolesDetail :entity="entity" />
      </el-drawer>
      <el-dialog
        v-if="collectionVisible"
        :title="collectionTitle"
        :visible.sync="collectionVisible"
        :width="collectionSize"
      >
        <rolesCollection
          :entity="entity"
          @saveAction="saveAction"
          @cancelAction="cancelAction"
        />
      </el-dialog>
    </template>
  </app-content>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';
import rolesCollection from '@/views/roles/roles-collection.vue';
import { mixins } from 'vue-class-component';
import ViewMixin from '@/components/Mixin';
import rolesDetail from '@/views/roles/roles-detail.vue';
import { getRoles, getRole, deleteRole } from '@/api/roles';

@Component({
  name: 'roles',
  components: {
    AppContent,
    rolesDetail,
    rolesCollection
  }
})
export default class extends mixins(ViewMixin) {
  private rolesData = [];

  created() {
    this.getRoles();
  }

  mounted() {}

  openAction() {
    this.entity = null;
    this.openCollectionAction();
  }

  async editAction(row: any) {
    const { data } = await getRole(row.id, {});
    if (data) {
      this.entity = data;
      this.openCollectionAction();
    }
  }

  removeAction(row: any) {
    this.removeCollectionAction(async(successFn: any) => {
      const { data } = await deleteRole(row.id);
      this.getRoles();
      if (successFn) {
        successFn();
      }
    });
  }

  saveAction(data: any) {
    this.closeCollectionaction();
  }

  cancelAction() {
    this.closeCollectionaction();
  }

  addGroup() {}

  editGroup(row: any) {}

  removeGroup(row: any) {}

  private async getRoles() {
    const { data } = await getRoles({});
    if (data) {
      this.rolesData = data;
    }
  }
}
</script>

<style lang="scss">
</style>
