<template>
  <app-content-full
    :is-hleft="true"
    :is-hright="true"
    :is-hcenter="true"
  >
    <template v-slot:hleft>
      <span class="app-content-full-title">
        <svg-icon name="company" />
        <span class="ml5">{{ $t('route.companyStatusEvent') }}</span>
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
            企业状态
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
              label="Location"
              sortable
              width="180"
            >
              <template slot-scope="{row}">
                <span v-if="row.location">{{ row.location.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="Start"
              sortable
              width="180"
            >
              <template slot-scope="{row}">
                {{ row.start | dateFull }}
              </template>
            </el-table-column>
            <el-table-column
              label="成员"
              sortable
              width="180"
            >
              <template slot-scope="{row}">
                {{ row.members | membersName }}
              </template>
            </el-table-column>
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
                  :active-value="1"
                  :inactive-value="0"
                  @change="changeStatus(row)"
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
            <companyStatusEventCollection
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
import companyStatusEventCollection from '@/views/inoutboard/company-events/company-events-collection.vue';

import {
  getCompanyEvents,
  getCompanyEvent,
  addCompanyEvent,
  updateCompanyEvent,
  deleteCompanyEvent
} from '@/api/inoutboard';

@Component({
  name: 'companyStatusEvents',
  components: {
    AppContent,
    AppContentFull,
    companyStatusEventCollection
  }
})
export default class extends mixins(ViewMixin) {
  private categotyes = [];

  created() {
    this.getCompanyEvents();
  }
  mounted() {}

  async editAction(row: any) {
    const { data } = await getCompanyEvent(row.id, {});
    if (data) {
      this.editCollectionAction(data);
    }
  }

  saveAction(payload: any) {
    if (this.entity) {
      this.updateCompanyEvent(this.entity.id, payload);
    } else {
      this.addCompanyEvent(payload);
    }
    this.closeCollectionaction();
  }

  cancelAction() {
    this.closeCollectionaction();
  }

  removeAction(row: any) {
    this.removeCollectionAction(async(successFn: any) => {
      const { data } = await deleteCompanyEvent(row.id);
      this.deleteCollection(this.categotyes, row);
      if (successFn) {
        successFn();
      }
    });
  }

  changeStatus(row: any) {
    this.updateCompanyEvent(row.id, {
      name: row.name,
      status: row.status,
      description: row.description
    });
  }

  private async getCompanyEvents() {
    const { data } = await getCompanyEvents({});
    if (data) {
      this.categotyes = data;
    }
  }

  private async addCompanyEvent(payload: any) {
    const { data } = await addCompanyEvent(payload);
    if (data) {
      this.pushCollection(this.categotyes, data);
    }
  }

  private async updateCompanyEvent(id: number, payload: any) {
    const { data } = await updateCompanyEvent(id, payload);
    if (data) {
      this.updateCollection(this.categotyes, data);
    }
  }
}
</script>

<style lang="scss">
</style>
