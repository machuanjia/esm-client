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
        账单
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
          label="购买项目"
        />
        <el-table-column
          width="120"
          align="center"
          label="状态"
        >
          <template slot-scope="{row}">
            <el-tag
              :type="row.status | billType"
              effect="dark"
            >
              {{ row.status | billTypeLabel }}
            </el-tag>
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
  name: 'status',
  components: {
    AppContent
  }
})
export default class extends Vue {
  private searchText = ''

  private rolesData = [{
    id: 1,
    description: '新购人员100',
    status: '1',
    name: '新购人员'
  }, {
    id: 2,
    description: '新购插件钉钉',
    status: '0',
    name: '新购插件'
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
