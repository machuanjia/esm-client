<template>
  <app-content-full
    :is-hleft="true"
    :is-hright="true"
    :is-hcenter="true"
  >
    <template v-slot:hleft>
      <span class="app-content-full-title">
        <svg-icon name="recent" />
        <span class="ml5">{{ $t('route.recent') }}</span>
      </span>
    </template>
    <template v-slot:hcenter>
      <div class="flex-r-center" />
    </template>
    <template v-slot:hright>
      <el-radio-group
        v-model="recentView"
        size="small"
        class="mr10"
      >
        <el-radio-button :label="0">
          卡片
        </el-radio-button>
        <el-radio-button :label="1">
          列表
        </el-radio-button>
        <el-radio-button :label="2">
          看板
        </el-radio-button>
      </el-radio-group>
      <el-button
        icon="el-icon-setting"
        class="p9"
        size="small"
        @click="recentSetting"
      />
    </template>
    <template v-slot:body>
      <app-content :body-class="'app-content-body-transparent mb40'">
        <template v-slot:body>
          <recent-card v-if="recentView === 0" />
          <recent-list v-if="recentView === 1" />
          <recent-board v-if="recentView === 2" />
          <el-drawer
            v-if="settingVisible"
            title="设置"
            :modal="false"
            :size="'260px'"
            :visible.sync="settingVisible"
            :direction="'rtl'"
          >
            <recentSetting @filterChange="filterChange" />
          </el-drawer>
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
import RecentCard from '@/views/inoutboard/recent/recent-card.vue';
import RecentList from '@/views/inoutboard/recent/recent-list.vue';
import RecentBoard from '@/views/inoutboard/recent/recent-board.vue';
import recentSetting from '@/views/inoutboard/recent/recent-setting.vue';

@Component({
  name: 'recent',
  components: {
    AppContentFull,
    AppContent,
    RecentCard,
    RecentList,
    RecentBoard,
    recentSetting
  }
})
export default class extends Vue {
  private settingVisible = false;
  private recentView = 0;
  mounted() {}
  recentSetting() {
    debugger;
    this.settingVisible = true;
  }
  filterChange() {}
}
</script>

<style lang="scss">
</style>
