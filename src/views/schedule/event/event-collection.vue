<template>
  <div>
    <div class="collection-row">
      <el-dropdown>
        <span class="el-dropdown-link">
          <svg-icon
            name="calendar"
            class="mr5"
          />我的日历
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>研发日历</el-dropdown-item>
          <el-dropdown-item>销售日历</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="collection-row">
      <el-input
        v-model="eventName"
        type="textarea"
        :rows="2"
        placeholder="日程标题"
      />
    </div>
    <div class="flex-a-center">
      <el-checkbox
        v-model="allDay"
        class="mr5"
      >
        全天
      </el-checkbox>
      <el-date-picker
        v-model="duration"
        type="datetimerange"
        :clearable="false"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        class="duration-wrap"
      />
      <el-dropdown>
        <span class="el-dropdown-link">
          <svg-icon name="recent" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>不重复</el-dropdown-item>
          <el-dropdown-item>销售日历</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-divider content-position="right" />
    <div class="collection-row flex-a-center">
      <div class="collection-row-label">
        <svg-icon name="reminder" />提醒
      </div>
      <div class="collection-row-content">
        <el-dropdown>
          <span class="el-dropdown-link">提前15分钟</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="collection-row flex-a-center">
      <div class="collection-row-label">
        <svg-icon name="location" />资源
      </div>
      <div class="collection-row-content">
        <el-cascader
          :options="options"
          :props="props"
          clearable
        />
      </div>
    </div>
    <div class="collection-row flex-a-center last">
      <div class="collection-row-label collection-row-label-top">
        <svg-icon name="description" />备注
      </div>
      <div class="collection-row-content">
        <el-input
          v-model="description"
          type="textarea"
          :rows="2"
          placeholder="请输入备注"
        />
      </div>
    </div>
    <el-divider content-position="right" />
    <div class="collection-row">
      <div class="collection-row-label mb10">
        参与人
      </div>
      <div>
        <SelectMembersDetail
          :members="members"
          @selectMembers="selectMembers"
        />
      </div>
    </div>
    <el-divider
      content-position="right"
      class="mtb15"
    />
    <div class="collection-row flex-a-center last">
      <div
        v-if="model === 'public'"
        class="collection-row-label collection-row-label-model cursor"
        @click="changeModelAction('private')"
      >
        <i class="el-icon-unlock" />公开模式
        <div>所有人可见</div>
      </div>
      <div
        v-if="model === 'private'"
        class="collection-row-label collection-row-label-model cursor"
        @click="changeModelAction('public')"
      >
        <i class="el-icon-lock" />私有模式
        <div>参与人可见</div>
      </div>
      <div class="collection-row-content flex-r-right">
        <el-button type="primary">
          创建
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';
import { mixins } from 'vue-class-component';
import CollectionMixin from '@/components/Mixin/collection';
import SelectMembersDetail from '@/components/SelectMembers/select-members-detail.vue';

@Component({
  name: 'eventCollection',
  components: {
    AppContent,
    SelectMembersDetail
  }
})
export default class extends mixins(CollectionMixin) {
  private eventName: any = '';
  private allDay = false;
  private duration: any = '';
  private description: any = '';
  private members: any = [];
  private model = 'public';
  private props = { multiple: true };
  private options = [
    {
      value: 1,
      label: '东南',
      children: [
        {
          value: 2,
          label: '上海',
          children: [
            { value: 3, label: '普陀' },
            { value: 4, label: '黄埔' },
            { value: 5, label: '徐汇' }
          ]
        },
        {
          value: 7,
          label: '江苏',
          children: [
            { value: 8, label: '南京' },
            { value: 9, label: '苏州' },
            { value: 10, label: '无锡' }
          ]
        },
        {
          value: 12,
          label: '浙江',
          children: [
            { value: 13, label: '杭州' },
            { value: 14, label: '宁波' },
            { value: 15, label: '嘉兴' }
          ]
        }
      ]
    },
    {
      value: 17,
      label: '西北',
      children: [
        {
          value: 18,
          label: '陕西',
          children: [
            { value: 19, label: '西安' },
            { value: 20, label: '延安' }
          ]
        },
        {
          value: 21,
          label: '新疆维吾尔族自治区',
          children: [
            { value: 22, label: '乌鲁木齐' },
            { value: 23, label: '克拉玛依' }
          ]
        }
      ]
    }
  ];

  created() {}

  mounted() {
    const end = new Date();
    const start = new Date();
    end.setTime(start.getTime() + 3600 * 1000 * 1 * 1);
    this.duration = [start, end];
  }

  changeModelAction(model: any) {
    this.model = model;
  }

  selectMembers(members: any) {
    debugger;
  }
}
</script>

<style lang="scss">
.duration-wrap {
  margin-left: 10px;
  border: none;
  width: auto !important;
  .el-range-input {
    width: auto !important;
  }
  .el-input__icon {
    line-height: 33px !important;
    font-size: 16px !important;
    width: 16px !important;
  }
  .el-range-separator {
    line-height: 33px !important;
    width: 20px;
  }
  .el-range__close-icon {
    display: none;
  }
}
</style>
