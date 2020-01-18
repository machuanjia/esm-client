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
        @click="addAction"
      >
        部门
      </el-button>
    </template>
    <template v-slot:body>
      <el-table
        :data="tableData"
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
      <el-dialog
        v-if="orgCollectionVisible"
        :title="collectionTitle"
        :visible.sync="orgCollectionVisible"
        :width="collectionSize"
      >
        <organizationCollection
          @saveAction="saveAction"
          @cancelAction="cancelAction"
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
import organizationCollection from '@/views/organizations/organizations-collection.vue';
import { dialogSize } from '@/constant/common';

@Component({
  name: 'organization',
  components: {
    AppContent,
    organizationCollection
  }
})
export default class extends Vue {
  private searchText = '';

  private collectionTitle = '新建';

  private collectionSize = dialogSize.md;

  private orgCollectionVisible = false;

  private tableData = [
    {
      id: 1,
      description: '这个是架构部',
      name: '架构部'
    },
    {
      id: 2,
      description: '这个是测试部',
      name: '测试部'
    },
    {
      id: 3,
      description: '这个是销售部',
      name: '销售部',
      children: [
        {
          id: 31,
          description: '这个是人力资源部',
          name: '人力资源部'
        },
        {
          id: 32,
          description: '这个是市场部',
          name: '市场部'
        }
      ]
    }
  ];

  mounted() {}

  addAction() {
    this.collectionTitle = '新建';
    this.orgCollectionVisible = true;
  }

  saveAction() {
    this.orgCollectionVisible = false;
  }

  cancelAction() {
    this.orgCollectionVisible = false;
  }

  edit(row: any) {
    this.collectionTitle = '编辑';
    this.orgCollectionVisible = true;
  }

  remove(row: any) {
    this.$confirm('此操作将永久删除该部门, 是否继续?', '删除', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'error'
    })
      .then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      })
      .catch(() => {});
  }
}
</script>

<style lang="scss">
</style>
