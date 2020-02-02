<template>
  <div class="timeline-wrap">
    <div class="timeline-toc">
      <div class="timeline-toc-header">
        <div class="timeline-title">
          <svg-icon name="timeline" />
          <span>Timeline</span>
        </div>
      </div>
      <div class="timeline-toc-duration">
        <el-date-picker
          v-model="value"
          class="timeline-date"
          align="center"
          type="date"
          :clearable="false"
          :picker-options="pickerOptions"
        />
        <div class="timeline-summary">
          <div class="timeline-summary-item">
            <div class="timeline-summary-item-title">
              3
            </div>
            <div class="timeline-summary-item-desc">
              My Totle Count
            </div>
          </div>
          <div class="timeline-summary-item">
            <div class="timeline-summary-item-title">
              10
            </div>
            <div class="timeline-summary-item-desc">
              My Totle Hours
            </div>
          </div>
        </div>
      </div>
      <el-divider
        :content-position="'right'"
        class="no-bg"
      >
        <el-button
          icon="el-icon-plus"
          circle
          :size="'mini'"
        />
      </el-divider>
      <div class="timeline-toc-body">
        <el-timeline class="ml-27">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
      <div class="timeline-toc-footer">
        <el-avatar class="ml5 mb5">
          user
        </el-avatar>
        <el-avatar class="ml5 mb5">
          user
        </el-avatar>
        <el-avatar class="ml5 mb5">
          user
        </el-avatar>
        <el-avatar class="ml5 mb5">
          +20
        </el-avatar>
        <el-avatar
          class="ml5 mb5"
          :size="'small'"
        >
          <i class="el-icon-plus" />
        </el-avatar>
      </div>
    </div>
    <div class="timeline-main">
      <div
        v-for="i of items"
        :key="i"
        class="timeline-item"
        :class="{'active': i === 3}"
      >
        <div class="timeline-item-main">
          <div class="timeline-item-main-header">
            <el-avatar class="ml5 mb5">
              user
            </el-avatar>
            <div class="timeline-item-main-header-aside">
              <div class="timeline-item-main-header-title">
                马传佳
              </div>
              <div class="timeline-item-main-header-desc">
                研发部 . 超级管理员
              </div>
            </div>
          </div>
          <div class="timeline-item-main-summary">
            <div class="timeline-summary">
              <div class="timeline-summary-item">
                <div class="timeline-summary-item-title">
                  3
                </div>
                <div class="timeline-summary-item-desc">
                  Totle Count
                </div>
              </div>
              <div class="timeline-summary-item">
                <div class="timeline-summary-item-title">
                  10
                </div>
                <div class="timeline-summary-item-desc">
                  Totle Hours
                </div>
              </div>
            </div>
          </div>
          <el-divider
            :content-position="'right'"
            class="no-bg"
          >
            <el-button
              icon="el-icon-chat-dot-round"
              circle
              :size="'mini'"
            />
          </el-divider>
          <div class="timeline-item-main-body">
            <el-timeline class="ml-27 timeline-item-main-timeline">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
              </el-timeline-item>
            </el-timeline>
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
import AppContent from '@/components/Content/index.vue';

@Component({
  name: 'calendar',
  components: {
    AppContent
  }
})
export default class extends Vue {
  private value = new Date();
  private items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private pickerOptions = {};
  private activities = [
    {
      content: '支持使用图标',
      timestamp: '2018-04-12 20:46',
      size: 'large',
      type: 'primary',
      icon: 'el-icon-more'
    },
    {
      content: '支持自定义颜色',
      timestamp: '2018-04-03 20:46',
      color: '#0bbd87'
    },
    {
      content: '支持自定义尺寸',
      timestamp: '2018-04-03 20:46',
      size: 'large'
    },
    {
      content: '默认样式的节点',
      timestamp: '2018-04-03 20:46'
    }
  ];
  mounted() {}

  edit(row: any) {}
  remove(row: any) {}
}
</script>

<style lang="scss" scope>
.no-bg {
  .el-divider__text {
    background: none;
  }
}
.timeline-wrap {
  height: 100vh;
  display: flex;
  flex-direction: row;

  .timeline-toc {
    width: 240px;
    border-right: 1px $border solid;
    display: flex;
    flex-direction: column;
    .timeline-toc-header {
      .timeline-title {
        padding: 10px;
        height: 50px;
        display: flex;
        align-items: center;
        border-bottom: 1px $border solid;
        svg {
          font-size: 16px;
          color: #324157;
        }
        span {
          font-size: 14px;
          color: #97a8be;
          margin-left: 10px;
        }
      }
    }
    .timeline-toc-duration {
      padding: 10px;
    }
    .timeline-toc-body {
      padding: 10px;
      flex-grow: 1;
      height: 0;
      display: flex;
      justify-content: flex-start;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .timeline-toc-footer {
      border-top: 1px $border solid;
      // height: 50px;
      padding: 10px;
      display: flex;
      align-items: center;
    }
  }
  .timeline-main {
    width: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    .timeline-item {
      flex-grow: 1;
      min-width: 260px;
      max-width: 260px;
      display: flex;
      padding: 20px 10px;
      &:first-child {
        padding-left: 20px;
      }
      &:last-child {
        padding-right: 20px;
      }
      &:hover {
        .timeline-item-main {
          // background: linear-gradient(top, #589ce5, #4eccf1);
          box-shadow: 0 0px 30px rgba(0, 0, 0, 0.1);
        }
      }
      &.active {
        .timeline-item-main {
          background: linear-gradient(top, #589ce5, #4eccf1);
          box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
          .timeline-item-main-header {
            .timeline-item-main-header-aside {
              .timeline-item-main-header-title {
                color: $darkText;
                font-weight: bold;
              }
              .timeline-item-main-header-desc {
                color: $lightGray;
              }
            }
          }

          .timeline-item-main-summary {
            .timeline-summary {
              .timeline-summary-item {
                border: 1px $border solid;
                .timeline-summary-item-title {
                  background: none;
                  color: $lightGray;
                  font-weight: bold;
                }
                .timeline-summary-item-desc {
                  color: $lightGray;
                }
              }
            }
          }
          .timeline-item-main-body {
            .timeline-item-main-timeline {
              .el-timeline-item__timestamp {
                color: $lightGray;
              }
            }
          }
        }
      }
      .timeline-item-main {
        flex-grow: 1;
        width: 0;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 0px 2px rgba(0, 0, 0, 0.1);
        // padding: 10px;
        .timeline-item-main-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 66px;
          padding: 10px;
          .timeline-item-main-header-aside {
            .timeline-item-main-header-title {
              font-size: 14px;
              padding: 0 5px 5px 5px;
              color: $darkText;
            }
            .timeline-item-main-header-desc {
              font-size: 12px;
              padding: 0 5px;
              color: $darkGray;
            }
          }
        }
        .timeline-item-main-summary {
          padding: 10px;
        }
        .timeline-item-main-body {
          padding: 10px;
        }
      }
    }
  }
  .timeline-summary {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    .timeline-summary-item {
      flex-grow: 1;
      border: 1px $border solid;
      border-radius: 5px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
      .timeline-summary-item-title {
        text-align: center;
        font-size: 24px;
        padding: 10px;
        background: #fff;
        color: $darkText;
        font-weight: bold;
      }
      .timeline-summary-item-desc {
        text-align: center;
        font-size: 12px;
        padding: 5px;
        color: $darkGray;
      }
    }
  }
}
</style>
