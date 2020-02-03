<template>
  <app-content
    :is-flex-header="true"
    :is-hright="true"
    :is-hcenter="true"
  >
    <template v-slot:hcenter>
      <el-date-picker
        v-model="value"
        type="datetimerange"
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
        :value-format="'timestamp'"
        @change="durationChange"
      />
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

@Component({
  name: 'myHistory',
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

  private filename = 'MyHistory';

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

  mounted() {}
}
</script>

<style lang="scss">
</style>
