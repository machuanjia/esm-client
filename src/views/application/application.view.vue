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
        @click="openAction"
      >
        应用
      </el-button>
    </template>
    <template v-slot:body>
      <el-table
        :data="applicationsData"
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
          label="类型"
          align="center"
          width="100"
        >
          <template slot-scope="{row}">
            {{ row.type | appliationsType }}
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
              :active-value="1"
              :inactive-value="0"
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
        <applicationCollection
          :entity="entity"
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
import applicationCollection from '@/views/application/application-collection.vue';
import {
  getApplications,
  addApplication,
  getApplication,
  updateApplication,
  deleteApplication
} from '@/api/applications';
import { mixins } from 'vue-class-component';
import ViewMixin from '@/components/Mixin';

@Component({
  name: 'applications',
  components: {
    AppContent,
    applicationCollection
  }
})
export default class extends mixins(ViewMixin) {
  private applicationsData = [];

  created() {
    this.getApplications();
  }

  mounted() {}

  openAction() {
    this.entity = null;
    this.openCollectionAction();
  }

  async editAction(row: any) {
    const { data } = await getApplication(row.id, {});
    if (data) {
      this.editCollectionAction(data);
    }
  }

  removeAction(row: any) {
    this.removeCollectionAction(async(successFn: any) => {
      const { data } = await deleteApplication(row.id);
      this.deleteCollection(this.applicationsData, row);
      if (successFn) {
        successFn();
      }
    });
  }

  saveAction(data: any) {
    if (this.entity) {
      this.updateApplication(this.entity.id, data);
    } else {
      this.addApplication(data);
    }
    this.closeCollectionaction();
  }

  cancelAction() {
    this.closeCollectionaction();
  }

  private async getApplications() {
    const { data } = await getApplications({});
    if (data) {
      this.applicationsData = data;
    }
  }

  private async addApplication(payload: any) {
    const { data } = await addApplication(payload);
    if (data) {
      this.pushCollection(this.applicationsData, data);
    }
  }

  private async updateApplication(id: number, payload: any) {
    const { data } = await updateApplication(id, payload);
    if (data) {
      this.updateCollection(this.applicationsData, data);
    }
  }
}
</script>

<style lang="scss">
</style>
