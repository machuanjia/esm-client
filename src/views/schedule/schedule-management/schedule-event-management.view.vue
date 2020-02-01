<template>
  <app-content-full
    :is-hleft="true"
    :is-hright="true"
    :is-hcenter="true"
  >
    <template v-slot:hleft>
      <span class="calendar-full-title">
        <svg-icon name="calendar-event" />
        <span class="ml5">日程类型</span>
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
            日程类型
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
            ddddd
            <!-- <rolesCollection
              :entity="entity"
              @saveAction="saveAction"
              @cancelAction="cancelAction"
            />-->
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
  getEventCategorys,
  getEventCategory,
  updateEventCategory,
  addEventCategory,
  deleteEventCategory
} from '@/api/schedule-setting';
import scheduleEventCollection from '@/views/calendar-management/calendar-event-categoty-collection.vue'

@Component({
  name: 'calendarEventMangement',
  components: {
    AppContent,
    AppContentFull
  }
})
export default class extends mixins(ViewMixin) {
  private categotyes = [];

  created() {
    this.getEventCategorys();
  }
  mounted() {}

  editAction(row: any) {}

  removeAction(row: any) {}

  private async getEventCategorys() {
    const { data } = await getEventCategorys({});
    if (data) {
      this.categotyes = data;
    }
  }
}
</script>

<style lang="scss">
</style>
