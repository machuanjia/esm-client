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
          prop="permissions"
          label="权限"
          sortable
          width="180"
        />
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
              @click="editCollectionAction(row)"
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
          @saveAction="collectionSaveAction"
          @cancelAction="collectionCancelAction"
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

@Component({
  name: 'roles',
  components: {
    AppContent,
    rolesDetail,
    rolesCollection
  }
})
export default class extends mixins(ViewMixin) {
  private rolesData = [
    {
      id: 1,
      type: 0,
      permissions: '管理员',
      description: '这个是管理员',
      name: '管理员'
    },
    {
      id: 2,
      type: 0,
      permissions: '普通成员',
      description: '这个是普通成员',
      name: '普通成员'
    },
    {
      id: 3,
      type: 0,
      permissions: '只读成员',
      description: '这个是只读成员',
      name: '只读成员'
    },
    {
      id: 4,
      type: 1,
      name: '华北大区',
      children: [
        {
          id: 41,
          permissions: '华北销售总监',
          description: '这个是销售总监',
          name: '销售总监'
        },
        {
          id: 42,
          permissions: '华北销售经理',
          description: '这个是华北销售经理',
          name: '华北销售经理'
        }
      ]
    }
  ];

  mounted() {}

  addGroup() {}

  editGroup(row: any) {}

  removeGroup(row: any) {}
}
</script>

<style lang="scss">
</style>
