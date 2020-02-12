<template>
  <div class="normal-wrap">
    <div class="normal-item">
      <el-avatar
        class="normal-item-avatar avatar-reverse"
        icon="el-icon-user-solid"
        :size="'small'"
      />
      <span class="normal-item-name">马传佳</span>
      <span class="normal-item-check">
        <i class="el-icon-check" />
      </span>
    </div>
    <div class="normal-item">
      <el-avatar
        class="normal-item-avatar avatar-reverse"
        icon="el-icon-user-solid"
        :size="'small'"
      />
      <span class="normal-item-name">马传佳</span>
      <span class="normal-item-check">
        <i class="el-icon-check" />
      </span>
    </div>
    <div class="normal-item">
      <el-avatar
        class="normal-item-avatar avatar-reverse"
        icon="el-icon-user-solid"
        :size="'small'"
      />
      <span class="normal-item-name">马传佳</span>
      <span class="normal-item-check">
        <i class="el-icon-check" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'SelectMembersPopNormal'
})
export default class extends Vue {
  mounted() {}

  beforeDestory() {}
}
</script>
<style lang="scss" scoped>
.normal-wrap {
  .normal-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background: $hoverBg;
      .normal-item-check {
        color: $green;
      }
    }
    .normal-item-avatar {
    }
    .normal-item-name {
      flex-grow: 1;
      width: 0;
      padding: 0 10px;
      // display: flex;
      // align-items: center;
      font-size: 16px;
    }
    .normal-item-check {
    }
  }
}
</style>
