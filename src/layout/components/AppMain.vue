<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
    <el-drawer
      v-if="isMessageVisible"
      :with-header="false"
      :modal="false"
      :size="'1050px'"
      :visible.sync="isMessageVisible"
      :direction="'rtl'"
      :append-to-body="true"
      @close="closeMessage"
    >
      <message />
    </el-drawer>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { TagsViewModule } from '@/store/modules/tags-view';
import { AppModule } from '@/store/modules/app';
import message from '@/views/message/message.view.vue';

@Component({
  name: 'AppMain',
  components: {
    message
  }
})
export default class extends Vue {
  private isMessageVisible = false;
  get cachedViews() {
    return TagsViewModule.cachedViews;
  }

  get key() {
    return this.$route.path;
  }
  get isMessage() {
    return AppModule.isMessageVisible;
  }
  @Watch('isMessage')
  private onIsMessageChange(value: boolean) {
    this.isMessageVisible = value;
  }
  closeMessage() {
    AppModule.SetMessageVisible(false);
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background: $mainBg;
}

.fixed-header + .app-main {
  padding-top: 50px;
  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>
