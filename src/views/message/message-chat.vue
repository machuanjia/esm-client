<template>
  <section class="message-main-body">
    <messageChatNav />
    <messageChatMain :entity="entity" />
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
import messageChatNav from '@/views/message/message-chat-nav.vue';
import messageChatMain from '@/views/message/message-chat-main.vue';

@Component({
  name: 'messageChat',
  components: {
    SplitPane,
    AppContent,
    messageChatNav,
    messageChatMain
  }
})
export default class extends Vue {
  private searchText = '';
  private entity: any = null;
  mounted() {}
}
</script>

<style lang="scss">
.message-nav-item {
  display: flex;
  flex-direction: row;
  border-bottom: 1px $border solid;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: $hoverBg;
  }
  &.active {
    background: $activeBg;
    .message-nav-item-body {
      .message-nav-item-content {
        .message-nav-item-title {
          color: #fff;
        }
        .message-nav-item-aside {
          color: #fff;
        }
      }
      .message-nav-item-desc {
        color: #fff;
      }
    }
  }
  .message-nav-item-avatar-wrap {
    .message-nav-item-avatar-badge {
      .el-badge__content {
        transform: translateY(-50%) translateX(70%) scale(0.8);
        height: 20px;
      }
    }
    .message-nav-item-avatar {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .system-assistent {
      background: $menuActiveText;
      svg {
        font-size: 18px;
      }
    }
    .system-user {
      border: 1px $menuActiveText solid;
      background: #fff;
      color: $menuActiveText;
      svg {
        font-size: 18px;
      }
    }
  }
  .message-nav-item-body {
    flex-grow: 1;
    width: 0;
    display: flex;
    flex-direction: column;
    padding: 2px 0px 2px 10px;
    .message-nav-item-content {
      display: flex;
      flex-direction: row;
      .message-nav-item-title {
        flex-grow: 1;
        font-size: 16px;
        color: $darkText;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .message-nav-item-aside {
        color: $darkGray;
        font-size: 12px;
        width: 100px;
        display: flex;
        justify-content: flex-end;
      }
    }
    .message-nav-item-desc {
      color: $darkGray;
      font-size: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      flex-grow: 1;
      display: flex;
      align-items: center;
    }
  }
}
</style>
