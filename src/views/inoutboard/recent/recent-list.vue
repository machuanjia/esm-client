<template>
  <div class="rencent-list-wrap">
    <div class="rencent-list-group">
      <div class="rencent-list-group-header">
        <div class="rencent-list-row rencent-list-row-header">
          <div class="rencent-list-cell rencent-list-cell-name">
            成员
          </div>
          <div class="rencent-list-cell rencent-list-cell-time">
            返回时间
          </div>
          <div class="rencent-list-cell rencent-list-cell-comment">
            消息
          </div>
          <div class="rencent-list-cell rencent-list-cell-update">
            更新时间
          </div>
        </div>
      </div>
      <div class="rencent-list-group-body">
        <el-divider
          content-position="left"
          class="rencent-list-row-divider"
        >
          <el-tag
            :type="'success'"
            effect="dark"
          >
            In
          </el-tag>
        </el-divider>
        <div class="rencent-list-row">
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-name">
            <el-avatar
              class="rencent-list-cell-avatar"
              icon="el-icon-user-solid"
            />
            <div class="rencent-list-cell-title">
              马传佳
            </div>
            <div class="rencent-list-cell-desc">
              研发部
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-time">
            <el-button
              icon="el-icon-edit"
              class="rencent-list-cell-button"
              :size="'mini'"
              circle
            />
            <div class="rencent-list-cell-main">
              2019-10-10 10:20:33
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-comment">
            <el-button
              icon="el-icon-plus"
              class="rencent-list-cell-button"
              :size="'mini'"
              circle
            />
            <div class="rencent-list-cell-main">
              今天家里有事，请假半天
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-update">
            2019-10-10 10:20:33
          </div>
        </div>

        <div class="rencent-list-row active">
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-name">
            <el-avatar
              class="rencent-list-cell-avatar"
              icon="el-icon-user-solid"
            />
            <div class="rencent-list-cell-title">
              马传佳
            </div>
            <div class="rencent-list-cell-desc">
              研发部
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-time">
            <el-button
              icon="el-icon-edit"
              class="rencent-list-cell-button"
              :size="'mini'"
              circle
            />
            <div class="rencent-list-cell-main">
              2019-10-10 10:20:33
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-comment">
            <el-button
              icon="el-icon-plus"
              class="rencent-list-cell-button"
              :size="'mini'"
              circle
            />
            <div class="rencent-list-cell-main">
              今天家里有事，请假半天
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-update">
            2019-10-10 10:20:33
          </div>
        </div>

        <div class="rencent-list-row">
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-name">
            <el-avatar
              class="rencent-list-cell-avatar"
              icon="el-icon-user-solid"
            />
            <div class="rencent-list-cell-title">
              马传佳
            </div>
            <div class="rencent-list-cell-desc">
              研发部
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-time">
            <el-button
              icon="el-icon-edit"
              class="rencent-list-cell-button"
              :size="'mini'"
              circle
            />
            <div class="rencent-list-cell-main">
              2019-10-10 10:20:33
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-comment">
            <el-button
              icon="el-icon-plus"
              class="rencent-list-cell-button"
              :size="'mini'"
              circle
            />
            <div class="rencent-list-cell-main">
              今天家里有事，请假半天
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-update">
            2019-10-10 10:20:33
          </div>
        </div>

        <div class="rencent-list-row">
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-name">
            <el-avatar
              class="rencent-list-cell-avatar"
              icon="el-icon-user-solid"
            />
            <div class="rencent-list-cell-title">
              马传佳
            </div>
            <div class="rencent-list-cell-desc">
              研发部
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-time">
            <el-button
              icon="el-icon-edit"
              class="rencent-list-cell-button"
              :size="'mini'"
              circle
            />
            <div class="rencent-list-cell-main">
              2019-10-10 10:20:33
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-column rencent-list-cell-comment">
            <el-button
              icon="el-icon-plus"
              class="rencent-list-cell-button"
              :size="'mini'"
              circle
            />
            <div class="rencent-list-cell-main">
              今天家里有事，请假半天
            </div>
          </div>
          <div class="rencent-list-cell rencent-list-cell-update">
            2019-10-10 10:20:33
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
  name: 'RecentList',
  components: {
    AppContent
  }
})
export default class extends Vue {
  mounted() {}
}
</script>

<style lang="scss" scoped>
.rencent-list-group {
  .rencent-list-group-header {
    margin-bottom: 20px;
    height: 90px;
    position: fixed;
    top: 50px;
    left: 54px;
    background: $mainBg;
    padding-top: 40px;
    padding-left: 40px;
    z-index: 2;
    width: calc(100vw - 140px);
    .rencent-list-row {
      height: 50px;
    }
  }
  .rencent-list-group-body {
    display: grid;
    grid-row-gap: 30px;
    grid-template-columns: 100%;
    margin-top: 60px;
  }
  .rencent-list-row-divider {
    margin-top: 40px;
    width: calc(100vw - 140px);
    .el-divider__text {
      background: none;
    }
  }
  .rencent-list-row {
    height: 80px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 160px 200px auto 200px;
    justify-items: left;
    align-items: center;
    border-radius: 3px;
    width: calc(100vw - 140px) !important;
    &:hover {
      box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
    }
    &.active {
      background-image: linear-gradient(to right, #2f80e2, #48c0f4);
      border: 1px #fff solid;
      .rencent-list-cell {
        color: #fff;
        &.rencent-list-cell-name {
          .rencent-list-cell-desc {
            color: #fff;
          }
        }
      }
    }
    &.rencent-list-row-header {
      background: #fff;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
      .rencent-list-cell {
        color: $darkGray;
        &:first-child {
          border-left: none;
        }
      }
    }
    .rencent-list-cell {
      color: $darkText;
      display: flex;
      align-items: center;
      border-left: 1px $border solid;
      padding: 10px;
      height: 100%;
      &:first-child {
        border-left: none;
      }
      &.rencent-list-cell-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      .rencent-list-cell-button {
        margin-top: -25px;
      }
      .rencent-list-cell-main {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        // justify-content: center;
      }
      &.rencent-list-cell-name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 160px;
        .rencent-list-cell-avatar {
          margin-top: -30px;
          box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2);
          background: $activeBg;
        }
        .rencent-list-cell-title {
          padding: 5px;
          padding-top: 10px;
        }
        .rencent-list-cell-desc {
          font-size: 12px;
          color: $darkGray;
          padding: 5px;
        }
      }
    }
  }
}
</style>
