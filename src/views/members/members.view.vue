<template>
  <div class="app-content-wrap">
    <div class="split-container">
      <split-pane
        split="vertical"
        :min-percent="15"
        :default-percent="20"
      >
        <template slot="paneL">
          <div class="left-container">
            <el-tree
              class="org-tree"
              :data="orgs"
              :props="orgProps"
              :expand-on-click-node="false"
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
                  @click="openCollectionAction"
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
                    width="160"
                    align="center"
                    label="操作"
                  >
                    <template slot-scope="{row}">
                      <span
                        class="setting-icon mr5"
                        @click="openDetailAction(row)"
                      >
                        <span class="flex-r-center">
                          <i class="el-icon-setting" /> 设置
                        </span>
                      </span>
                      <i
                        class="el-icon-edit-outline table-icon-action"
                        @click="editAction(row)"
                      />
                      <i
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
                  <membersCollection
                    :entity="entity"
                    @saveAction="saveAction"
                    @cancelAction="cancelAction"
                  />
                </el-dialog>
                <el-drawer
                  v-if="detailVisible"
                  title="设置"
                  :append-to-body="true"
                  :visible.sync="detailVisible"
                  :direction="'rtl'"
                  :size="drawerSize"
                >
                  <membersDetail :entity="entity" />
                </el-drawer>
              </template>
            </app-content>
          </div>
        </template>
      </split-pane>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import SplitPane from 'vue-splitpane';
import AppContent from '@/components/Content/index.vue';
import membersCollection from '@/views/members/members-collection.vue';
import { dialogSize, drawerSize } from '@/constant/common';
import membersDetail from '@/views/members/members-detail.vue';
import { mixins } from 'vue-class-component';
import ViewMixin from '@/components/Mixin';
import { getOrganizations } from '@/api/organizations';
import {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  addUser
} from '@/api/users';

@Component({
  name: 'member',
  components: {
    SplitPane,
    AppContent,
    membersCollection,
    membersDetail
  }
})
export default class extends mixins(ViewMixin) {
  private orgs: any = [
    {
      id: 0,
      label: '北京华阳云正科技有限公司'
    }
  ];

  private orgProps = {
    children: 'children',
    label: 'name'
  };

  private tableData = [];

  handleNodeClick(node: any) {}

  created() {
    this.getOrganizations();
    this.getUsers();
  }

  mounted() {}

  saveAction(data: any) {
    if (this.entity) {
      this.updateUser(this.entity.id, data);
    } else {
      this.addUser(data);
    }
    this.closeCollectionaction();
  }

  cancelAction() {
    this.closeCollectionaction();
  }
  async editAction(row: any) {
    const { data } = await getUser(row.id, {});
    if (data) {
      this.editCollectionAction(data);
    }
  }
  removeAction(row: any) {
    this.removeCollectionAction(async(successFn: any) => {
      const { data } = await deleteUser(row.id);
      this.getUsers();
      if (successFn) {
        successFn();
      }
    });
  }
  private async getOrganizations() {
    const { data } = await getOrganizations({});
    if (data) {
      this.orgs = [
        {
          id: 0,
          name: '北京华阳云正科技有限公司',
          children: data
        }
      ];
    }
  }
  private async getUsers(orgId?: any) {
    const { data } = await getUsers({ orgId: orgId || '' });
    if (data) {
      this.tableData = data;
    }
  }
  private async addUser(payload: any) {
    const { data } = await addUser(payload);
    if (data) {
      this.getUsers();
    }
  }
  private async updateUser(id: number, payload: any) {
    const { data } = await updateUser(id, payload);
    if (data) {
      this.updateCollection(this.tableData, data);
    }
  }
}
</script>

<style lang="scss">
.split-container {
  height: 100%;
  .splitter-pane-resizer {
    background: none;
    &.vertical {
      border: none !important;
    }
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
