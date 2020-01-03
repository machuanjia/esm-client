<template>
  <div class="app-content-wrap">
    <div class="split-container">
      <split-pane
        split="vertical"
        :min-percent="15"
        :default-percent="20"
        @resize="resize"
      >
        <template slot="paneL">
          <div class="left-container">
            <el-tree
              :data="orgs"
              :props="orgProps"
              default-expand-all
              @node-click="handleNodeClick"
            />
          </div>
        </template>
        <template slot="paneR">
          <div class="right-container">
            <app-content
              style="padding:0"
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
                  成员
                </el-button>
              </template>
              <template v-slot:body>
                <el-table
                  :data="tableData"
                  border
                  highlight-current-row
                  style="width: 100%"
                >
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="180"
                  />
                  <el-table-column
                    prop="role"
                    label="角色"
                    width="180"
                  />
                  <el-table-column
                    prop="phone"
                    label="手机"
                  />
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
          </div>
        </template>
      </split-pane>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Form as ElForm, Input } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { isValidUsername } from '@/utils/validate'
import { Dictionary } from 'vue-router/types/router'
import SplitPane from 'vue-splitpane'
import AppContent from '@/components/Content/index.vue'

@Component({
  name: 'member',
  components: {
    SplitPane,
    AppContent
  }
})
export default class extends Vue {
  private orgs = [{
    label: '北京华阳云正科技有限公司',
    children: [{
      label: '研发部',
      children: [{
        label: '架构部'
      }, {
        label: '研发一部'
      }, {
        label: '研发二部'
      }]
    }, {
      label: '销售部',
      children: [{
        label: '北京销售部'
      }, {
        label: '上海销售部'
      }]
    }, {
      label: '未分组'
    }]
  }]

  private orgProps = {
    children: 'children',
    label: 'label'
  }

  private tableData = [{
    name: '王小虎',
    role: '管理员',
    phone: '18401125500'
  }, {
    name: '王小虎',
    role: '普通成员',
    phone: '18401125500'
  }, {
    name: '王小虎',
    role: '只读成员',
    phone: '18401125500'
  }]

  resize() {
    // Handle resize
  }

  handleNodeClick(node:any) {

  }

  edit(row:any) {

  }
  remove(row:any) {

  }

  mounted() {

  }
}
</script>

<style lang="scss">
.split-container {
  height: 100%;
  .splitter-pane-resizer{
    background: none;
  }
}

.left-container {
  background-color: #fff;
  height: 100%;
  overflow: auto;
  padding: 15px;
}

.right-container {
  background-color: #fff;
  height: 100%;
  overflow: auto;
  padding: 10px;
}
</style>
