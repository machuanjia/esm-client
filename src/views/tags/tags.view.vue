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
        标签
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
          width="100"
          align="center"
          label="颜色"
        >
          <template slot-scope="{row}">
            <el-color-picker
              v-model="row.color"
              :size="'mini'"
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
  name: 'tags',
  components: {
    AppContent
  }
})
export default class extends Vue {
  private searchText = ''

  private rolesData = [{
    id: 1,
    color: '#f00',
    description: '这个是成员在线状态',
    name: '标签一'
  }, {
    id: 2,
    color: '#f00',
    description: '这个是标签二',
    name: '标签二'
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
