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
        @click="openCollectionAction"
      >
        角色
      </el-button>
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="openGroupAction"
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
      <el-dialog
        v-if="collectionGroupVisible"
        :title="collectionGroupTitle"
        :visible.sync="collectionGroupVisible"
        :width="collectionSize"
      >
        <rolesGroupCollection
          :entity="group"
          @saveAction="saveGroupAction"
          @cancelAction="cancelGroupAction"
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
import rolesCollection from '@/views/auth/roles/roles-collection.vue';
import { mixins } from 'vue-class-component';
import ViewMixin from '@/components/Mixin';
import rolesDetail from '@/views/auth/roles/roles-detail.vue';
import {
  getRoles,
  getRole,
  addRole,
  deleteRole,
  getGroup,
  addGroup,
  updateRole,
  updateGroup,
  deleteGroup
} from '@/api/roles';
import rolesGroupCollection from '@/views/auth/roles/roles-group-collection.vue';

@Component({
  name: 'roles',
  components: {
    AppContent,
    rolesDetail,
    rolesCollection,
    rolesGroupCollection
  }
})
export default class extends mixins(ViewMixin) {
  private rolesData = [];
  private collectionGroupVisible = false;
  private group: any = null;
  private collectionGroupTitle = '新建';

  created() {
    this.getRoles();
  }

  mounted() {}

  async editAction(row: any) {
    const { data } = await getRole(row.id, {});
    if (data) {
      this.editCollectionAction(data)
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
    if (this.entity) {
      this.updateRole(this.entity.id, data);
    } else {
      this.addRole(data);
    }
    this.closeCollectionaction();
  }

  cancelAction() {
    this.closeCollectionaction();
  }

  openGroupAction() {
    this.collectionGroupTitle = '新建';
    this.group = null;
    this.collectionGroupVisible = true;
  }

  async editGroup(row: any) {
    this.collectionGroupTitle = '编辑';
    const { data } = await getGroup(row.id, {});
    if (data) {
      this.group = data;
      this.collectionGroupVisible = true;
    }
  }

  async removeGroup(row: any) {
    this.$confirm('此操作将永久删除该数据, 是否继续?', '删除', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'error'
    })
      .then(async() => {
        const { data } = await deleteGroup(row.id);
        if (data) {
          this.getRoles();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }
      })
      .catch(() => {});
  }

  saveGroupAction(data: any) {
    if (this.group) {
      this.updateGroup(this.group.id, data);
    } else {
      this.addGroup(data);
    }
    this.collectionGroupVisible = false;
  }

  cancelGroupAction() {
    this.collectionGroupVisible = false;
  }

  private async getRoles() {
    const { data } = await getRoles({});
    if (data) {
      this.rolesData = data;
    }
  }

  private async addRole(payload: any) {
    const { data } = await addRole(payload);
    if (data) {
      this.getRoles();
    }
  }

  private async updateRole(id: number, payload: any) {
    const { data } = await updateRole(id, payload);
    if (data) {
      this.getRoles();
    }
  }

  private async addGroup(payload: any) {
    const { data } = await addGroup(payload);
    if (data) {
      this.getRoles();
    }
  }

  private async updateGroup(id: number, payload: any) {
    const { data } = await updateGroup(id, payload);
    if (data) {
      this.getRoles();
    }
  }
}
</script>

<style lang="scss">
</style>
