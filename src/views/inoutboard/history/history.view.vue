<template>
  <app-content
    :is-flex-header="true"
    :is-hright="true"
    :is-hcenter="true"
  >
    <template v-slot:hcenter>
      <el-date-picker
        v-model="value"
        class="mr5 mb5"
        type="datetimerange"
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
        :value-format="'timestamp'"
        @change="durationChange"
      />
      <el-select
        v-model="searchStatus"
        placeholder="请选择状态"
        class="mr5 mb5"
      >
        <el-option
          v-for="item in status"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
      <el-select
        v-model="searchLocation"
        placeholder="请选择Locations"
        class="mr5 mb5"
      >
        <el-option
          v-for="item in locations"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
      <el-popover
        placement="bottom"
        trigger="click"
      >
        <el-tree
          class="org-tree"
          :data="orgs"
          :props="defaultProps"
          @node-click="selectParent"
        />
        <el-input
          slot="reference"
          v-model="searchOrg.name"
          class="mr5 mb5"
          style="width:200px"
        />
      </el-popover>
      <el-button
        type="primary"
        class="mb5"
        icon="el-icon-search"
      >
        搜索
      </el-button>
    </template>
    <template v-slot:hright>
      <el-button
        type="primary"
        icon="el-icon-document"
        @click="exportExcel"
      >
        Excel
      </el-button>
    </template>
    <template v-slot:body>
      <el-table
        :data="list"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        default-expand-all
        fit
        highlight-current-row
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column
          label="成员"
          width="150"
        >
          <template slot-scope="{row}">
            {{ row.member.name }}
          </template>
        </el-table-column>
        <el-table-column
          label="开始"
          width="240"
        >
          <template slot-scope="{row}">
            {{ row.start | dateFull }}
          </template>
        </el-table-column>
        <el-table-column
          label="结束"
          width="240"
        >
          <template slot-scope="{row}">
            {{ row.end | dateFull }}
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="240"
        >
          <template slot-scope="{row}">
            {{ row.status.name }}
          </template>
        </el-table-column>
        <el-table-column
          label="Count"
          sortable
        >
          <template slot-scope="{row}">
            {{ row.hours }}
          </template>
        </el-table-column>
        <el-table-column
          label="Changed By"
          width="160"
        >
          <template slot-scope="{row}">
            {{ row.member.name }}
          </template>
        </el-table-column>
        <el-table-column
          label="IP"
          width="160"
          prop="ip"
        />
      </el-table>
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
import moment from 'moment';
import { formatJson, parseTime } from '@/utils';
import { exportJson2Excel } from '@/utils/excel';
import { getInoutBoardStatuses, getHistoryes } from '@/api/inoutboard';
import { getLocations } from '@/api/locations';
import { getOrganizations } from '@/api/organizations';

@Component({
  name: 'history',
  components: {
    AppContent
  }
})
export default class extends Vue {
  private pickerOptions = {
    shortcuts: [
      {
        text: '最近一周',
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', [start, end]);
        }
      },
      {
        text: '最近一个月',
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          picker.$emit('pick', [start, end]);
        }
      },
      {
        text: '最近三个月',
        onClick(picker: any) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          picker.$emit('pick', [start, end]);
        }
      }
    ]
  };

  private list = [];

  private filename = 'history';

  private autoWidth = true;

  private bookType = 'xlsx';

  private downloadLoading = false;

  private value: any = [
    moment()
      .startOf('weeks')
      .format('x'),
    moment()
      .endOf('weeks')
      .format('x')
  ];

  private locations: any = [];

  private searchLocation: any = '';

  private status: any = [];

  private searchStatus: any = '';

  private orgs = [];

  private searchOrg: any = {};

  private defaultProps = {
    children: 'children',
    label: 'name'
  };

  durationChange() {}

  formatJson = (filterKeys: any, jsonData: any) =>
    jsonData.map((data: any) =>
      filterKeys.map((key: string) => {
        if (key === 'start' || key === 'end') {
          return parseTime(data[key]);
        } else if (key === 'status') {
          return data[key]['name'];
        } else {
          return data[key];
        }
      })
    );

  exportExcel() {
    this.downloadLoading = true;
    const tHeader = ['Start', 'End', 'Status', 'Count'];
    const filterVal = ['start', 'end', 'status', 'hours'];
    const list = this.list;
    const data = this.formatJson(filterVal, list);
    exportJson2Excel(
      tHeader,
      data,
      this.filename !== '' ? this.filename : undefined,
      undefined,
      undefined,
      this.autoWidth,
      this.bookType
    );
    this.downloadLoading = false;
  }

  created() {
    this.getLocations();
    this.getInoutBoardStatuses();
    this.getOrgs();
    this.getHistoryes();
  }

  mounted() {}

  private async getOrgs() {
    const { data } = await getOrganizations({});
    if (data) {
      this.orgs = data;
    }
  }
  selectParent(data: any) {
    this.searchOrg = data;
  }

  private async getLocations() {
    const { data } = await getLocations({});
    if (data) {
      this.locations = data;
    }
  }

  private async getInoutBoardStatuses() {
    const { data } = await getInoutBoardStatuses({});
    if (data) {
      this.status = data;
    }
  }
  private async getHistoryes() {
    const { data } = await getHistoryes({});
    if (data) {
      this.list = data;
    }
  }
}
</script>

<style lang="scss">
</style>
