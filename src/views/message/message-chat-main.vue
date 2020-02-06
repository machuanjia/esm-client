<template>
  <div class="message-content">
    <div class="message-content-header">
      <div class="message-content-header-title">
        马传佳
      </div>
    </div>
    <div class="message-content-body">
      <div class="position-box">
        <VueBetterScroll
          ref="scroll"
          class="wrapper"
          :scrollbar="scrollbarObj"
          :pull-down-refresh="pullDownRefreshObj"
          :pull-up-load="pullUpLoadObj"
          :start-y="parseInt(startY)"
          @pulling-down="onPullingDown"
          @pulling-up="onPullingUp"
        >
          <div class="message-content-list">
            <div
              v-for="item in items"
              :key="item"
              class="message-content-list-item"
            >
              {{ item }}
            </div>
          </div>
        </VueBetterScroll>
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

  private scrollbarObj = {
    fade: true
  };
  // 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
  private pullDownRefreshObj = {
    threshold: 90,
    stop: 40,
    txt: '加载更多'
  };
  // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
  private pullUpLoadObj = false;
  // {
  //   threshold: 0,
  //   txt: {
  //     more: "加载更多",
  //     noMore: "没有更多数据了"
  //   }
  // };
  private startY = 0; // 纵轴方向初始化位置
  private scrollToX = 0;
  private scrollToY = 0;
  private scrollToTime = 700;
  private items: any = [];

  private count = 1;

  mounted() {
    this.getData().then((res: any) => {
      this.items = [...res, ...this.items];
      console.log(this.items);
      const scroll: any = this.$refs.scroll;
      scroll.forceUpdate(true);
    });
  }
  // 滚动到页面顶部
  scrollTo() {
    const scroll: any = this.$refs.scroll;
    scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime);
  }
  // 模拟数据请求
  getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        const arr: any = [];
        for (let i = 0; i < 10; i++) {
          arr.unshift(this.count++);
        }
        resolve(arr);
      }, 1000);
    });
  }
  onPullingDown() {
    console.log('下拉加载');
    this.getData().then((res: any) => {
      console.log(res);
      this.items = [...res, ...this.items];
      console.log(this.items);
      const scroll: any = this.$refs.scroll;
      scroll.forceUpdate(true);
    });
  }
  onPullingUp() {
    // 模拟上拉 加载更多数据
    // debugger
    // console.log("上拉加载");
    // this.getData().then((res: any) => {
    //   this.items = { ...res, ...this.items };
    //   const scroll: any = this.$refs.scroll;
    //   scroll.forceUpdate(true);
    //   // if (this.count < 30) {
    //   //   scroll.forceUpdate(true);
    //   // } else {
    //   //   scroll.forceUpdate(false);
    //   // }
    // });
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
    position: relative;
    .position-box {
      position: absolute;
      top: 0px;
      left: 0;
      right: 0;
      bottom: 0;
      .message-content-list {
        .message-content-list-item {
          height: 50px;
          margin: 20px;
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
