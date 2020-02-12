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

    <el-popover
      width="260"
      trigger="click"
    >
      <SelectMembersPop />
      <el-button
        slot="reference"
        class="members-avatar"
        icon="el-icon-plus"
        circle
        :size="'mini'"
      />
    </el-popover>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SelectMembersPop from './select-members-pop.vue';

@Component({
  name: 'SelectMembersDetail',
  components: {
    SelectMembersPop
  }
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
  .members-avatar {
    margin-right: 5px;
  }
}
</style>
