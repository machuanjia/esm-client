<template>
  <div class="message-content">
    <div class="message-content-header">
      <div class="message-content-header-title">
        马传佳
      </div>
    </div>
    <div
      ref="scroll"
      class="message-content-body"
      @scroll="scrollAction"
    >
      <div
        v-if="loading"
        class="message-content-body-loading"
      >
        <i class="el-icon-loading" />
      </div>
      <div class="message-content-list">
        <div
          v-for="item in items"
          :key="item.id"
          class="message-content-list-item"
          :class="{'message-content-list-item-me': item.id === 1}"
        >
          <div class="message-content-list-item-aside">
            <el-avatar icon="el-icon-user-solid" />
          </div>
          <div class="message-content-list-item-content">
            <div class="arrow" />
            {{ item.message }}
          </div>
        </div>
      </div>
    </div>
    <div class="message-content-footer">
      <div class="message-content-footer-toolbar">
        <el-dropdown>
          <span class="el-dropdown-link">
            系统接收
            <i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>全部</el-dropdown-item>
            <el-dropdown-item divided>
              系统
            </el-dropdown-item>
            <el-dropdown-item>微信</el-dropdown-item>
            <el-dropdown-item>短信</el-dropdown-item>
            <el-dropdown-item>微信 + 短信</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="message-content-footer-content">
        <textarea
          v-model="message"
          class="message-content-footer-textarea"
          @keyup.13="submit"
        />
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
  name: 'messageChatMain',
  components: {
    SplitPane,
    AppContent,
    VueBetterScroll
  }
})
export default class extends Vue {
  @Prop({ required: false }) private entity!: any;

  private message = '';

  private items: any = [];

  private count = 1;

  private loading = false;

  mounted() {
    this.getData().then((res: any) => {
      this.items = [...res, ...this.items];
      setTimeout(() => {
        this.scrollToBottom();
      });
    });
  }
  scrollAction(event: any) {
    if (event.target.scrollTop < 30) {
      this.loading = true;
      this.onPullingDown();
    }
  }
  scrollToBottom() {
    const scroll: any = this.$refs.scroll;
    scroll.scrollTop = scroll.scrollHeight;
  }
  scrollToTop() {
    const scroll: any = this.$refs.scroll;
    scroll.scrollTop = 30;
  }
  getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        const arr: any = [];
        for (let i = 0; i < 10; i++) {
          arr.unshift(
            {
              id: this.count++,
              member: {
                id: 1,
                name: '马传佳'
              },
              message:
                '新华社北京2月4日电（记者吴雨）记者4日从网联清算有限公司获悉，春节假期1月24日至1月30日期间，网联平台处理资金类网络支付交易49.19亿笔、金额27307.11亿元，同比去年春节假期分别上涨11.25%、5.76%。'
            },
            {
              id: this.count++,
              member: {
                id: 2,
                name: '韩冬佑'
              },
              message:
                '网联方面介绍，春节期间，网联平台发挥网络支付行业枢纽作用，协同银行及支付机构，应对高并发支付交易需求，圆满保障春节假期和疫情期间的网络支付体系平稳运行。除夕跨年夜，网联平台交易处理峰值达5.2万笔/秒，系统成功率达100%。'
            }
          );
        }
        resolve(arr);
      }, 1000);
    });
  }
  onPullingDown() {
    this.getData().then((res: any) => {
      this.items = [...res, ...this.items];
      this.loading = false;
      setTimeout(() => {
        this.scrollToTop();
      });
    });
  }

  submit(event: any) {
    if (!event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey) {
      this.message = '';
    }
  }
}
</script>

<style lang="scss">
.loading-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: $darkText;
}

.message-content {
  display: flex;
  flex-direction: column;
  .message-content-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: $mainBg;
    .message-content-header-title {
      font-size: 18px;
      // font-weight: bold;
      color: $darkText;
      display: flex;
      align-items: center;
      padding-left: 15px;
    }
  }
  .message-content-body {
    background: $mainBg;
    flex-grow: 1;
    height: 0;
    overflow: auto;
    .message-content-body-loading {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      i {
        font-size: 30px;
      }
    }
    .message-content-list {
      padding: 10px;
      margin-top: 30px;
      .message-content-list-item {
        margin: 10px 10px 20px 10px;
        display: flex;
        flex-direction: row;
        &.message-content-list-item-me {
          flex-direction: row-reverse;
          .message-content-list-item-aside {
            margin-left: 10px;
            margin-right: 0;
          }
          .message-content-list-item-content {
            .arrow {
              right: -6px;
              left: auto;
              transform: rotate(180deg);
            }
          }
        }
        .message-content-list-item-aside {
          margin-right: 10px;
        }
        .message-content-list-item-content {
          max-width: 60%;
          flex-grow: 1;
          width: 1;
          background: #fff;
          border-radius: 5px;
          font-size: 14px;
          padding: 7px;
          line-height: 24px;
          position: relative;
          color: $mainText;
          .arrow {
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
            left: -6px;
            top: 18px;
            margin-bottom: 3px;
            border-right-color: #ebeef5;
            border-left-width: 0;
            &::after {
              position: absolute;
              display: block;
              width: 0;
              height: 0;
              border-color: transparent;
              border-style: solid;
              content: " ";
              border-width: 6px;
              bottom: -6px;
              left: 1px;
              border-right-color: #fff;
              border-left-width: 0;
            }
          }
        }
      }
    }
  }
  .message-content-footer {
    background: $mainBg;
    height: 180px;
    border-top: 1px $border solid;
    display: flex;
    flex-direction: column;
    .message-content-footer-toolbar {
      padding: 10px;
    }
    .message-content-footer-content {
      flex-grow: 1;
      height: 0;
      display: flex;

      .message-content-footer-textarea {
        border: none;
        flex-grow: 1;
        padding: 10px;
        outline: none;
        resize: none;
        background: transparent;
        font-size: 18px;
        color: $darkText;
      }
    }
  }
}
</style>
