<template>
  <div class="message-content">
    <div class="message-content-body message-content-body-notebook">
      <div class="message-content-notebook-assistent">
        <el-avatar
          class="system-assistent"
          :size="60"
        >
          <svg-icon name="logo" />
        </el-avatar>
        <span class="message-content-notebook-assistent-title">小E助手</span>
        <div class="message-content-notebook-assistent-desc">
          ESM系统助手，系统消息都接收于此。
        </div>
        <el-button
          class="message-content-notebook-assistent-action"
          type="success"
        >
          查看历史
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
import SplitPane from 'vue-splitpane';
import AppContent from '@/components/Content/index.vue';
import { AppModule } from '@/store/modules/app';
import VueBetterScroll from 'vue2-better-scroll';

@Component({
  name: 'messageNotebookMain',
  components: {
    SplitPane,
    AppContent,
    VueBetterScroll
  }
})
export default class extends Vue {
  @Prop({ required: true }) private entity!: any;

  mounted() {}

  submit(event: any) {}
}
</script>

<style lang="scss">
.message-content {
  .message-content-body {
    &.message-content-body-notebook {
      padding: 50px;
      .message-content-notebook-assistent{
        display: flex;
        flex-direction: column;
         justify-content: center;
        align-items: center;
      }
      .system-assistent {
        background: $menuActiveText;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        svg {
          font-size: 30px;
        }
      }
      .message-content-notebook-assistent-title{
        font-size: 24px;
        color: $darkText;
        margin-top: 20px;
      }
      .message-content-notebook-assistent-desc{
        font-size: 16px;
        color: $darkGray;
        margin-top: 10px;
      }
      .message-content-notebook-assistent-action{
        margin-top: 30px;
      }
    }
  }
}
</style>
