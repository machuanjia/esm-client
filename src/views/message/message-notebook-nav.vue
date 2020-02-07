<template>
  <div class="message-nav">
    <div class="message-nav-header">
      <el-input
        v-model="searchText"
        placeholder="请输入内容"
        :size="'mini'"
        prefix-icon="el-icon-search"
      />
    </div>
    <div class="message-nav-body">
      <el-collapse
        v-model="activeNames"
        class="message-notebook-nav"
        @change="handleChange"
      >
        <el-collapse-item name="1">
          <template slot="title">
            <el-avatar
              class="message-notebook-nav-avatar org-tree"
              :size="'small'"
            >
              <svg-icon name="robot" />
            </el-avatar>系统助手（2）
          </template>
          <div class="message-notebook-nav-content">
            <div class="message-notebook-nav-robot-item">
              <el-avatar
                class="system-assistent"
                :size="'small'"
              >
                <svg-icon name="logo" />
              </el-avatar>小E助手
            </div>
            <div class="message-notebook-nav-robot-item">
              <el-avatar
                class="calender-assistent"
                :size="'small'"
              >
                <svg-icon name="calendar" />
              </el-avatar>日程助手
            </div>
          </div>
        </el-collapse-item>

        <el-collapse-item name="2">
          <template slot="title">
            <el-avatar
              class="message-notebook-nav-avatar org-tree"
              :size="'small'"
            >
              <svg-icon name="tree-table" />
            </el-avatar>组织架构（20）
          </template>
          <div class="message-notebook-nav-content">
            <el-tree
              class="org-tree"
              :data="orgs"
              :props="orgProps"
              :expand-on-click-node="false"
              default-expand-all
              @node-click="handleNodeClick"
            />
          </div>
        </el-collapse-item>
      </el-collapse>
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
import { AppModule } from '@/store/modules/app';
import { getOrganizations } from '@/api/organizations';

@Component({
  name: 'messageNotebookNav',
  components: {
    SplitPane,
    AppContent
  }
})
export default class extends Vue {
  private searchText = '';
  private activeNames = ['1'];
  private orgs: any = [];
  private orgProps = {
    children: 'children',
    label: 'name'
  };

  handleNodeClick(node: any) {}
  created() {
    this.getOrganizations();
  }
  mounted() {}
  handleChange(val: any) {
    console.log(val);
  }
  private async getOrganizations() {
    const { data } = await getOrganizations({});
    if (data) {
      this.orgs = data;
    }
  }
}
</script>

<style lang="scss">
.message-notebook-nav {
  border: none;
  .message-notebook-nav-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    &.org-tree {
      background: $menuActiveText;
      svg {
        font-size: 14px;
      }
    }
  }
  .message-notebook-nav-content {
    padding: 0 10px;
    .message-notebook-nav-robot-item {
      display: flex;
      align-items: center;
      padding-left: 40px;
      padding-top: 10px;
      padding-bottom: 10px;
      cursor: pointer;
      &:hover {
        background: $hoverBg;
      }
      &:last-child {
        margin-bottom: 0;
      }
      .el-avatar {
        margin-right: 10px;
        background: $menuActiveText;
      }
    }
  }
}
</style>
