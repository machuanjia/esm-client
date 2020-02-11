<template>
  <app-content-full
    :is-hleft="true"
    :is-hright="true"
    :is-hcenter="true"
  >
    <template v-slot:hleft>
      <span class="app-content-full-title">
        <svg-icon name="data" />
        <span class="ml5">{{ $t('route.datasource') }}</span>
      </span>
    </template>
    <template v-slot:hcenter />
    <template v-slot:hright />

    <template v-slot:body>
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
            数据源
          </el-button>
        </template>
        <template v-slot:body>
          <el-table
            ref="draggableTable"
            :data="list"
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
                {{ row.type.name }}
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
                  @click="editAction(row)"
                />
                <i
                  v-if="row.type"
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
            <dataSourceCollection
              :entity="entity"
              @saveAction="saveAction"
              @cancelAction="cancelAction"
            />
          </el-dialog>
        </template>
      </app-content>
    </template>
  </app-content-full>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';
import AppContentFull from '@/components/Content/content-full.vue';
import { mixins } from 'vue-class-component';
import ViewMixin from '@/components/Mixin';
import dataSourceCollection from '@/views/statistics/data-source/data-source-collection.vue';
import SortableMixin from '@/components/Mixin/sortable';
import {
  getDataSources,
  getDataSource,
  addDataSource,
  updateDataSource,
  deleteDataSource
} from '@/api/statistics';

@Component({
  name: 'datasource',
  components: {
    AppContent,
    AppContentFull,
    dataSourceCollection
  }
})
export default class extends mixins(ViewMixin, SortableMixin) {
  private list: any = [];
  created() {
    this.getDataSources();
  }

  mounted() {}

  async editAction(row: any) {
    const { data } = await getDataSource(row.id, {});
    if (data) {
      this.editCollectionAction(data);
    }
  }

  saveAction(payload: any) {
    if (this.entity) {
      this.updateDataSource(this.entity.id, payload);
    } else {
      this.addDataSource(payload);
    }
    this.closeCollectionaction();
  }

  cancelAction() {
    this.closeCollectionaction();
  }

  removeAction(row: any) {
    this.removeCollectionAction(async(successFn: any) => {
      const { data } = await deleteDataSource(row.id);
      this.deleteCollection(this.list, row);
      if (successFn) {
        successFn();
      }
    });
  }

  changeStatus(row: any) {
    this.updateDataSource(row.id, {
      name: row.name,
      status: row.status,
      description: row.description
    });
  }

  private async getDataSources() {
    const { data } = await getDataSources({});
    if (data) {
      this.list = data;
      this.setSort(this.list, () => {});
    }
  }

  private async addDataSource(payload: any) {
    const { data } = await addDataSource(payload);
    if (data) {
      this.pushCollection(this.list, data);
    }
  }

  private async updateDataSource(id: number, payload: any) {
    const { data } = await updateDataSource(id, payload);
    if (data) {
      this.updateCollection(this.list, data);
    }
  }
}
</script>

<style lang="scss">
</style>
