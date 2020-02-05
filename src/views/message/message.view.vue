<template>
  <section class="message-wrap">
    <div class="message-aside">
      <div class="message-aside-header">
        <i class="el-icon-plus" />
      </div>
      <div class="message-aside-body">
        <div
          class="message-aside-item"
          :class="{'active': activeTab === 'chat'}"
          @click="changeTab('chat')"
        >
          <i class="el-icon-chat-dot-round" />
        </div>
        <div
          class="message-aside-item"
          :class="{'active': activeTab === 'note'}"
          @click="changeTab('note')"
        >
          <i class="el-icon-notebook-2" />
        </div>
      </div>
      <div class="message-aside-footer">
        <i class="el-icon-setting" />
      </div>
    </div>
    <div class="message-main">
      <messageChat v-if="activeTab === 'chat'" />
      <messageNotebook v-if="activeTab === 'note'" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import SplitPane from 'vue-splitpane';
import AppContent from '@/components/Content/index.vue';
import { AppModule } from '@/store/modules/app';
import messageChat from '@/views/message/message-chat.vue';
import messageNotebook from '@/views/message/message-notebook.vue';

@Component({
  name: 'message',
  components: {
    SplitPane,
    AppContent,
    messageChat,
    messageNotebook
  }
})
export default class extends Vue {
  private activeTab = 'chat';
  changeTab(tab: any) {
    this.activeTab = tab;
  }
  mounted() {}
}
</script>

<style lang="scss">
.message-wrap {
  height: 100vh;
  display: flex;
  flex-direction: row;
  border: 1px $border solid;
  .message-aside {
    width: 54px;
    margin: 0;
    background: none;
    border-right: 1px $border solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $darkText;
    .message-aside-header {
      height: 54px;
      width: 54px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px $border solid;
      cursor: pointer;
      &:hover {
        color: $subMenuActiveText;
        background: #e8f4ff;
      }
    }
    .message-aside-body {
      flex-grow: 1;
      height: 0;
      width: 54px;
      background: $subMenuActiveText;
      color: #fff;
      .message-aside-item {
        width: 54px;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 2px $subMenuActiveText solid;
        cursor: pointer;
        &:hover {
          border-left: 2px #fff solid;
          background: #5eacfc;
        }
        &.active {
          border-left: 2px #fff solid;
          background: #6cb5ff;
        }
      }
    }
    .message-aside-footer {
      height: 54px;
      width: 54px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px $border solid;
      // background:$subMenuActiveText;
      // color: #fff;
      cursor: pointer;
      &:hover {
        color: $subMenuActiveText;
        background: #e8f4ff;
      }
    }
  }
  .message-main {
    flex-grow: 1;
    width: 0;
  }
  .message-main-body {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .message-nav {
    width: 260px;
    border-right: 1px $border solid;
    .message-nav-header {
      border-bottom: 1px $border solid;
      height: 54px;
    }
  }
  .message-content {
    flex-grow: 1;
    width: 0;
    .message-content-header {
      border-bottom: 1px $border solid;
      height: 54px;
    }
  }
}
</style>
