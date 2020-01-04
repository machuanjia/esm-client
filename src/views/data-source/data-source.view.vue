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
        数据源
      </el-button>
    </template>
    <template v-slot:body>
      <el-table
        :data="rolesData"
        style="width: 100%;margin-bottom: 20px;"
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
            {{ row.type | dataSourceType }}
          </template>
        </el-table-column>
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
              v-if="row.type"
              class="el-icon-edit-outline table-icon-action"
              @click="edit(row)"
            />
            <i
              v-if="row.type"
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
  name: 'datasource',
  components: {
    AppContent
  }
})
export default class extends Vue {
private searchText = ''

  private rolesData = [{
    id: 1,
    type: 0,
    status: '1',
    description: '这个是成员在线状态',
    name: '成员在线状态'
  }, {
    id: 2,
    type: 0,
    status: '1',
    description: '这个是历史状态查看',
    name: '历史状态'
  }, {
    id: 3,
    type: 1,
    status: '1',
    description: '这个是xxx考勤机',
    name: 'xxx考勤机'
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
