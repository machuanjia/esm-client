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
      >
        看板
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
          prop="description"
          label="描述"
        />
        <el-table-column
          prop="scope"
          label="可见范围"
          width="300"
        />
        <el-table-column
          label="状态"
          align="center"
          width="100"
        >
          <template slot-scope="{row}">
            <el-switch
              v-model="row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="1"
              inactive-value="0"
            />
          </template>
        </el-table-column>
        <el-table-column
          width="120"
          align="center"
          label="操作"
        >
          <template slot-scope="{row}">
            <i
              class="el-icon-edit-outline table-icon-action"
              @click="edit(row)"
            />
            <i
              class="el-icon-delete table-icon-action"
              @click="remove(row)"
            />
          </template>
        </el-table-column>
      </el-table>
    </template>
  </app-content>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Form as ElForm, Input } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { isValidUsername } from '@/utils/validate'
import { Dictionary } from 'vue-router/types/router'
import AppContent from '@/components/Content/index.vue'

@Component({
  name: 'resourceType',
  components: {
    AppContent
  }
})
export default class extends Vue {
  private searchText = ''

  private rolesData = [{
    id: 1,
    scope: '管理员',
    status: '1',
    description: '这个是管理员',
    name: '在线状态'
  }, {
    id: 2,
    scope: '普通成员',
    status: '1',
    description: '这个是状态查看',
    name: '状态查看'
  }]

  mounted() {

  }

  edit(row:any) {

  }
  remove(row:any) {

  }
}
</script>

<style lang="scss">
</style>
