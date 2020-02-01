<template>
  <div class="p20">
    <el-checkbox
      v-model="checkAllCalender"
      class="mb10"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllCalenderChange"
    >
      <span class="font-size-18">全部日历</span>
    </el-checkbox>
    <el-checkbox-group
      v-model="checkedCalenders"
      @change="handleCheckedCalenderChange"
    >
      <el-checkbox
        v-for="item in calenderCategorys"
        :key="item.id"
        class="block mt10"
        :label="item.id"
      >
        {{ item.name }}
      </el-checkbox>
    </el-checkbox-group>

    <br>
    <br>

    <el-checkbox
      v-model="checkAllEvent"
      class="mb10"
      :indeterminate="isIndeterminateEvent"
      @change="handleCheckAllEventChange"
    >
      <span class="font-size-18">全部日程</span>
    </el-checkbox>
    <el-checkbox-group
      v-model="checkedEvents"
      @change="handleCheckedEventChange"
    >
      <el-checkbox
        v-for="item in eventCategorys"
        :key="item.id"
        class="block mt10"
        :label="item.id"
      >
        {{ item.name }}
      </el-checkbox>
    </el-checkbox-group>

    <br>
    <br>

    <el-checkbox
      v-model="checkAllScope"
      class="mb10"
      :indeterminate="isIndeterminateScope"
      @change="handleCheckAllScopeChange"
    >
      <span class="font-size-18">全部类型</span>
    </el-checkbox>
    <el-checkbox-group
      v-model="checkedScopes"
      @change="handleCheckedScopeChange"
    >
      <el-checkbox
        v-for="item in scopeCategorys"
        :key="item.id"
        class="block mt10"
        :label="item.id"
      >
        {{ item.name }}
      </el-checkbox>
    </el-checkbox-group>
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
import {
  getCalenderCategorys,
  getEventCategorys
} from '@/api/schedule-setting';
import * as _ from 'lodash';

@Component({
  name: 'calenderSetting',
  components: {
    AppContent
  }
})
export default class extends mixins(CollectionMixin) {
  // @Prop({ required: true }) private entity!: any;

  private calenderCategorys: any = [];

  private eventCategorys: any = [];

  private checkAllCalender = true;

  private checkedCalenders: any = [];

  private isIndeterminate = false;

  private checkAllEvent = true;

  private checkedEvents: any = [];

  private isIndeterminateEvent = false;

  private checkAllScope = true;

  private scopeCategorys = [
    {
      id: 0,
      name: '公开'
    },
    {
      id: 1,
      name: '私有'
    }
  ];

  private checkedScopes: any = _.map(this.scopeCategorys, 'id');

  private isIndeterminateScope = false;

  created() {
    this.ruleForm = {
      name: '',
      description: ''
    };

    this.rules = {
      name: [
        { required: true, message: '请输入应用名称', trigger: 'blur' },
        { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
      ],
      description: []
    };
    this.getCalenderCategorys();
    this.getEventCategorys();
  }

  mounted() {}

  handleCheckAllCalenderChange(val: any) {
    this.checkedCalenders = val ? _.map(this.calenderCategorys, 'id') : [];
    this.isIndeterminate = false;
    this.valueChange();
  }

  handleCheckedCalenderChange(value: any) {
    let checkedCount = value.length;
    this.checkAllCalender = checkedCount === this.calenderCategorys.length;
    this.isIndeterminate =
      checkedCount > 0 && checkedCount < this.calenderCategorys.length;
    this.valueChange();
  }

  handleCheckAllEventChange(val: any) {
    this.checkedEvents = val ? _.map(this.eventCategorys, 'id') : [];
    this.isIndeterminateEvent = false;
    this.valueChange();
  }

  handleCheckedEventChange(value: any) {
    let checkedCount = value.length;
    this.checkAllEvent = checkedCount === this.eventCategorys.length;
    this.isIndeterminateEvent =
      checkedCount > 0 && checkedCount < this.eventCategorys.length;
    this.valueChange();
  }

  handleCheckAllScopeChange(val: any) {
    this.checkedScopes = val ? _.map(this.scopeCategorys, 'id') : [];
    this.isIndeterminateScope = false;
    this.valueChange();
  }

  handleCheckedScopeChange(value: any) {
    let checkedCount = value.length;
    this.checkAllScope = checkedCount === this.scopeCategorys.length;
    this.isIndeterminateScope =
      checkedCount > 0 && checkedCount < this.scopeCategorys.length;
    this.valueChange();
  }

  private valueChange() {
    this.$emit('filterChange', {
      calenders: this.checkedCalenders,
      events: this.checkedEvents,
      scopes: this.checkedScopes
    });
  }

  private async getCalenderCategorys() {
    const { data } = await getCalenderCategorys({});
    if (data) {
      this.calenderCategorys = data;
      this.checkedCalenders = _.map(data, 'id');
      this.isIndeterminate = false;
    }
  }

  private async getEventCategorys() {
    const { data } = await getEventCategorys({});
    if (data) {
      this.eventCategorys = data;
      this.checkedEvents = _.map(data, 'id');
      this.isIndeterminateEvent = false;
    }
  }
}
</script>

<style lang="scss">
</style>
