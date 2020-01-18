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
        应用
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
              @click="editCollectionAction(row)"
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
        <applicationCollection
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
import { mixins } from 'vue-class-component';
import ViewMixin from '@/components/Mixin';
import applicationCollection from '@/views/application/application-collection.vue';

@Component({
  name: 'application',
  components: {
    AppContent,
    applicationCollection
  }
})
export default class extends mixins(ViewMixin) {
  private rolesData = [
    {
      id: 1,
      description: '智能看板',
      status: '1',
      name: '智能看板'
    },
    {
      id: 2,
      description: '日程',
      status: '0',
      name: '日程'
    }
  ];

  mounted() {}
}
</script>

<style lang="scss">
</style>
