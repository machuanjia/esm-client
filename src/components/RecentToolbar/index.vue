<template>
  <el-radio-group
    v-model="recentView"
    size="mini"
    class="recent-toolbar"
  >
    <el-radio-button label="0">
      卡片
    </el-radio-button>
    <el-radio-button label="1">
      列表
    </el-radio-button>
    <el-radio-button label="2">
      看板
    </el-radio-button>
  </el-radio-group>
</template>

<script lang="ts">
import pathToRegexp from 'path-to-regexp';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { RouteRecord, Route } from 'vue-router';

@Component({
  name: 'RecentToolbar'
})
export default class extends Vue {
  private recentView = '0';
}
</script>

<style lang="scss" scoped>
.recent-toolbar {
  margin-top: -3px;
  margin-right: 10px;
}
</style>
