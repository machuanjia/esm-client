<template>
  <div class="app-content-wrap">
    <header
      v-if="isHeader"
      class="app-content-header"
    >
      <slot name="header" />
    </header>
    <header
      v-if="isFlexHeader"
      class="app-content-flex-header"
    >
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
    <main class="app-content-body">
      <slot name="body" />
    </main>
    <footer
      v-if="isFooter"
      class="app-content-footer"
    >
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppContent'
})
export default class extends Vue {
  @Prop({ default: false }) private isHeader!: boolean
  @Prop({ default: false }) private isFlexHeader!: boolean

  @Prop({ default: false }) private isHleft!: boolean
  @Prop({ default: false }) private isHcenter!: boolean
  @Prop({ default: false }) private isHright!: boolean

  @Prop({ default: false }) private isFooter!: boolean

  mounted() {
  }
}
</script>

<style lang="scss">

</style>
