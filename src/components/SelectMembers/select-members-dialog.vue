<template>
  <el-dialog
    v-if="visible"
    :append-to-body="true"
    :title="'选择人员'"
    :visible.sync="visible"
    :width="collectionSize"
    @close="closeAction"
  >
    <div class="app-content-wrap no-padding">
      <div class="split-container-dialog">
        <split-pane
          split="vertical"
          :min-percent="15"
          :default-percent="30"
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
                class="no-padding"
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
                <template v-slot:hright />
                <template v-slot:body>
                  <el-table
                    :data="tableData"
                    border
                    highlight-current-row
                    style="width: 100%"
                  >
                    <el-table-column
                      type="selection"
                      width="55"
                      align="center"
                    />
                    <el-table-column
                      prop="name"
                      label="姓名"
                      width="180"
                    />
                    <el-table-column
                      prop="role"
                      label="角色"
                    />
                  </el-table>
                </template>
              </app-content>
            </div>
          </template>
        </split-pane>
      </div>
      <div class="flex-r flex-r-right mt10">
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >
          确定
        </el-button>
        <el-button @click="cancelForm('ruleForm')">
          取消
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { dialogSize, drawerSize } from '@/constant/common';
import { SelectMembersModule } from '@/store/modules/select-members';
import SplitPane from 'vue-splitpane';
import AppContent from '@/components/Content/index.vue';

@Component({
  name: 'SelectMembersDialog',
  components: {
    SplitPane,
    AppContent
  }
})
export default class extends Vue {
  private collectionSize = dialogSize.lg;
  private visible = false;
  private orgs = [
    {
      label: '北京华阳云正科技有限公司',
      children: [
        {
          label: '研发部',
          children: [
            {
              label: '架构部'
            },
            {
              label: '研发一部'
            },
            {
              label: '研发二部'
            }
          ]
        },
        {
          label: '销售部',
          children: [
            {
              label: '北京销售部'
            },
            {
              label: '上海销售部'
            }
          ]
        },
        {
          label: '未分组'
        }
      ]
    }
  ];

  private orgProps = {
    children: 'children',
    label: 'label'
  };

  private tableData = [
    {
      name: '王小虎',
      role: '管理员',
      phone: '18401125500'
    },
    {
      name: '王小虎',
      role: '普通成员',
      phone: '18401125500'
    },
    {
      name: '王小虎',
      role: '只读成员',
      phone: '18401125500'
    }
  ];

  get isVisible() {
    return SelectMembersModule.isVisible;
  }

  @Watch('isVisible')
  private onVisibleChange(value: any) {
    this.visible = value;
  }

  closeAction() {
    SelectMembersModule.setSelectMembersDialogVisible(false);
  }

  submitForm(form: any) {
    this.closeAction();
  }

  cancelForm(form: any) {
    this.closeAction();
  }

  mounted() {}

  beforeDestory() {}
}
</script>

<style lang="scss">
.split-container-dialog {
  height: calc(100vh - 300px);
  .splitter-pane-resizer {
    background: $mainBg;
  }
  .left-container {
    background-color: $mainBg;
    height: 100%;
    overflow: auto;
    padding: 10px;
  }

  .right-container {
    background-color: $mainBg;
    height: 100%;
    overflow: auto;
    padding: 10px;
  }
}
</style>
