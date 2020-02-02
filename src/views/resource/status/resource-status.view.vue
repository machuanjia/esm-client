<template>
  <app-content-full
    :is-hleft="true"
    :is-hright="true"
    :is-hcenter="true"
  >
    <template v-slot:hleft>
      <span class="calendar-full-title">
        <svg-icon name="resource-status" />
        <span class="ml5">资源状态</span>
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
            资源状态
          </el-button>
        </template>
        <template v-slot:body>
          <el-table
            :data="categotyes"
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
              width="100"
              align="center"
              label="颜色"
            >
              <template slot-scope="{row}">
                <el-color-picker
                  v-model="row.color"
                  :size="'mini'"
                  @change="changeColor(row)"
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
            <resourceStatusCollection
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
import {
  getResourceStatuses,
  getResourceStatus,
  addResourceStatus,
  updateResourceStatus,
  deleteResourceStatus
} from '@/api/resource-setting';
import resourceStatusCollection from '@/views/resource/status/resource-status-collection.vue';

@Component({
  name: 'resourceStatus',
  components: {
    AppContent,
    AppContentFull,
    resourceStatusCollection
  }
})
export default class extends mixins(ViewMixin) {
  private categotyes = [];

  created() {
    this.getResourceStatuses();
  }
  mounted() {}

  async editAction(row: any) {
    const { data } = await getResourceStatus(row.id, {});
    if (data) {
      this.editCollectionAction(data);
    }
  }

  saveAction(payload: any) {
    if (this.entity) {
      this.updateCollection(this.entity.id, payload);
    } else {
      this.addResourceStatus(payload);
    }
    this.closeCollectionaction();
  }

  cancelAction() {
    this.closeCollectionaction();
  }

  removeAction(row: any) {
    this.removeCollectionAction(async(successFn: any) => {
      const { data } = await deleteResourceStatus(row.id);
      this.deleteCollection(this.categotyes, row);
      if (successFn) {
        successFn();
      }
    });
  }

  changeColor(row: any) {
    this.updateResourceStatus(row.id, {
      name: row.name,
      color: row.color,
      description: row.description
    });
  }

  private async getResourceStatuses() {
    const { data } = await getResourceStatuses({});
    if (data) {
      this.categotyes = data;
    }
  }

  private async addResourceStatus(payload: any) {
    const { data } = await addResourceStatus(payload);
    if (data) {
      this.pushCollection(this.categotyes, data);
    }
  }

  private async updateResourceStatus(id: number, payload: any) {
    const { data } = await updateResourceStatus(id, payload);
    if (data) {
      this.updateCollection(this.categotyes, data);
    }
  }
}
</script>

<style lang="scss">
</style>
