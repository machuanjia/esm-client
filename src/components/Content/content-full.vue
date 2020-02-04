<template>
  <div class="app-content-full-wrap">
    <header class="app-content-full-header">
      <div
        v-if="isHleft"
        class="hleft"
      >
        <slot name="hleft" />
      </div>
      <div
        v-if="isHcenter"
        class="hcenter"
      >
        <slot name="hcenter" />
      </div>
      <div
        v-if="isHright"
        class="hright"
      >
        <slot name="hright" />
      </div>
    </header>
    <main
      class="app-content-full-body"
      :class="bodyClass"
    >
      <slot name="body" />
    </main>
    <footer
      v-if="isFooter"
      class="app-content-full-footer"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'AppContentFull'
})
export default class extends Vue {
  @Prop({ default: false }) private isHleft!: boolean;
  @Prop({ default: false }) private isHcenter!: boolean;
  @Prop({ default: false }) private isHright!: boolean;
  @Prop({ default: '' }) private bodyClass!: string;
  @Prop({ default: false }) private isFooter!: boolean;
  mounted() {}
}
</script>

<style lang="scss">
.app-content-full-title {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.app-content-full-title-absolute {
    position: absolute;
    top: 0px;
    left: 10px;
    height: 50px;
  }

  svg {
    font-size: 16px;
    color: #324157;
  }
  span {
    font-size: 14px;
    color: #97a8be;
  }
}
.app-content-full-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .app-content-full-header {
    display: flex;
    flex-direction: row;
    padding: 10px;
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    border-bottom: 1px $lightGray solid;
    .hleft {
    }
    .hcenter {
      flex-grow: 1;
    }
    .hright {
    }
  }
  .app-content-full-body {
    flex-grow: 1;
    overflow: auto;
    height: 0;
    &.app-content-body-transparent {
      background: transparent;
    }
  }
  .app-content-full-footer {
  }
}
</style>
