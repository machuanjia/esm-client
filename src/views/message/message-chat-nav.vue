<template>
  <div class="message-nav">
    <div class="message-nav-header">
      <el-input
        v-model="searchText"
        placeholder="请输入内容"
        :size="'mini'"
        prefix-icon="el-icon-search"
      />
    </div>
    <div class="message-nav-body">
      <div class="message-nav-item">
        <div class="message-nav-item-avatar-wrap">
          <el-badge
            class="message-nav-item-avatar-badge"
            :hidden="false"
            :value="10"
            :max="20"
          >
            <el-avatar class="message-nav-item-avatar system-assistent">
              <svg-icon name="logo" />
            </el-avatar>
          </el-badge>
        </div>
        <div class="message-nav-item-body">
          <div class="message-nav-item-content">
            <div class="message-nav-item-title">
              小E助手
            </div>
            <div class="message-nav-item-aside">
              09:00
            </div>
          </div>
          <div class="message-nav-item-desc">
            小E春节放假通知，春节转瞬到眼前，提早给您拜个年，祝您春节快乐！吉祥如意！
          </div>
        </div>
      </div>
      <div class="message-nav-item">
        <div class="message-nav-item-avatar-wrap">
          <el-badge
            :value="10"
            :hidden="true"
            :max="20"
            class="message-nav-item-avatar-badge"
          >
            <el-avatar class="message-nav-item-avatar system-assistent">
              <svg-icon name="calendar" />
            </el-avatar>
          </el-badge>
        </div>
        <div class="message-nav-item-body">
          <div class="message-nav-item-content">
            <div class="message-nav-item-title">
              日程助手
            </div>
            <div class="message-nav-item-aside">
              09:00
            </div>
          </div>
          <div class="message-nav-item-desc">
            小E春节放假通知，春节转瞬到眼前，提早给您拜个年，祝您春节快乐！吉祥如意！
          </div>
        </div>
      </div>
      <div class="message-nav-item active">
        <div class="message-nav-item-avatar-wrap">
          <el-badge
            :value="10"
            :hidden="true"
            :max="20"
            class="message-nav-item-avatar-badge"
          >
            <el-avatar class="message-nav-item-avatar system-user">
              <svg-icon name="user" />
            </el-avatar>
          </el-badge>
        </div>
        <div class="message-nav-item-body">
          <div class="message-nav-item-content">
            <div class="message-nav-item-title">
              马传佳
            </div>
            <div class="message-nav-item-aside">
              09:00
            </div>
          </div>
          <div class="message-nav-item-desc">
            小E春节放假通知，春节转瞬到眼前，提早给您拜个年，祝您春节快乐！吉祥如意！
          </div>
        </div>
      </div>
    </div>
  </div>
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

@Component({
  name: 'messageChatNav',
  components: {
    SplitPane,
    AppContent
  }
})
export default class extends Vue {
  private searchText = '';
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
