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
        Location
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
          prop="code"
          label="编码"
          sortable
          width="180"
        />
        <el-table-column
          prop="phone"
          label="phone"
          sortable
          width="180"
        />
        <el-table-column
          prop="fax"
          label="Fax"
          sortable
          width="180"
        />
        <el-table-column
          prop="description"
          label="描述"
        />
        <!-- <el-table-column
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
                  @change="changeStatus(row)"
                />
              </template>
        </el-table-column>-->
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
        <locationCollection
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
import AppContentFull from '@/components/Content/content-full.vue';
import { mixins } from 'vue-class-component';
import ViewMixin from '@/components/Mixin';
import locationCollection from '@/views/account/location/location-collection.vue';

import {
  getLocations,
  getLocation,
  addLocation,
  updateLocation,
  deleteLocation
} from '@/api/locations';

@Component({
  name: 'resourceCategory',
  components: {
    AppContent,
    AppContentFull,
    locationCollection
  }
})
export default class extends mixins(ViewMixin) {
  private categotyes = [];

  created() {
    this.getLocations();
  }
  mounted() {}

  async editAction(row: any) {
    const { data } = await getLocation(row.id, {});
    if (data) {
      this.editCollectionAction(data);
    }
  }

  saveAction(payload: any) {
    if (this.entity) {
      this.updateLocation(this.entity.id, payload);
    } else {
      this.addLocation(payload);
    }
    this.closeCollectionaction();
  }

  cancelAction() {
    this.closeCollectionaction();
  }

  removeAction(row: any) {
    this.removeCollectionAction(async(successFn: any) => {
      const { data } = await deleteLocation(row.id);
      this.deleteCollection(this.categotyes, row);
      if (successFn) {
        successFn();
      }
    });
  }

  private async getLocations() {
    const { data } = await getLocations({});
    if (data) {
      this.categotyes = data;
    }
  }

  private async addLocation(payload: any) {
    const { data } = await addLocation(payload);
    if (data) {
      this.pushCollection(this.categotyes, data);
    }
  }

  private async updateLocation(id: number, payload: any) {
    const { data } = await updateLocation(id, payload);
    if (data) {
      this.updateCollection(this.categotyes, data);
    }
  }
}
</script>

<style lang="scss">
</style>
