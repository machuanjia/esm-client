<template>
  <div class="select-members-detail-wrap">
    <el-avatar
      class="members-avatar"
      icon="el-icon-user-solid"
      :size="'small'"
    />
    <el-avatar
      class="members-avatar"
      icon="el-icon-user-solid"
      :size="'small'"
    />
    <el-button
      class="members-avatar"
      icon="el-icon-plus"
      circle
      :size="'mini'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'SelectMembersDetail'
})
export default class extends Vue {
  private isFullscreen = false;

  mounted() {}

  beforeDestory() {}
}
</script>
<style lang="scss" scoped>
.select-members-detail-wrap {
  display: flex;
  flex-wrap: wrap;
  .members-avatar{
    margin-right: 5px;
  }
}
</style>
