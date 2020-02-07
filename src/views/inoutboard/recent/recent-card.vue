<template>
  <div class="cards-container-wrap">
    <el-card
      shadow="always"
      class="card-wrap"
    >
      <div class="card-aside">
        <el-avatar
          class="card-aside-avatar"
          icon="el-icon-user-solid"
        />
        <div class="card-aside-name">
          马传佳
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-header">
          <div class="card-body-header-tag">
            <el-tag
              type="success"
              effect="dark"
              size="small"
            >
              在岗
            </el-tag>
          </div>

          <el-dropdown>
            <i class="el-icon-more card-body-header-actions" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>发送消息</el-dropdown-item>
              <el-dropdown-item>查看消息</el-dropdown-item>
              <el-dropdown-item>查看详情</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="card-body-main">
          <div class="ellipsis label">
            Return Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
          <div class="ellipsis label">
            Update Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
        </div>
        <div class="card-body-footer">
          <el-badge
            :value="12"
            :hidden="true"
            class="comment-badge"
          >
            <div
              class="comment"
              title="今天家里有事，请假半天,返回补假条"
            >
              今天家里有事，请假半天,返回补假条
            </div>
          </el-badge>
        </div>
      </div>
    </el-card>

    <el-card
      shadow="always"
      class="card-wrap"
    >
      <div class="card-aside">
        <el-avatar
          class="card-aside-avatar"
          icon="el-icon-user-solid"
        />
        <div class="card-aside-name">
          马传佳
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-header">
          <div class="card-body-header-tag">
            <el-tag
              type="danger"
              effect="dark"
              size="small"
            >
              请假
            </el-tag>
          </div>

          <el-dropdown>
            <i class="el-icon-more card-body-header-actions" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>发送消息</el-dropdown-item>
              <el-dropdown-item>查看消息</el-dropdown-item>
              <el-dropdown-item>查看详情</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="card-body-main">
          <div class="ellipsis label">
            Return Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
          <div class="ellipsis label">
            Update Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
        </div>
        <div class="card-body-footer">
          <el-badge
            :value="12"
            class="comment-badge"
          >
            <div
              class="comment"
              title="今天家里有事，请假半天,返回补假条"
            >
              今天家里有事，请假半天,返回补假条
            </div>
          </el-badge>
        </div>
      </div>
    </el-card>

    <el-card
      shadow="always"
      class="card-wrap"
    >
      <div class="card-aside">
        <el-avatar
          class="card-aside-avatar"
          icon="el-icon-user-solid"
        />
        <div class="card-aside-name">
          马传佳
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-header">
          <div class="card-body-header-tag">
            <el-tag
              type="warning"
              effect="dark"
              size="small"
            >
              请假
            </el-tag>
          </div>

          <el-dropdown>
            <i class="el-icon-more card-body-header-actions" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>发送消息</el-dropdown-item>
              <el-dropdown-item>查看消息</el-dropdown-item>
              <el-dropdown-item>查看详情</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="card-body-main">
          <div class="ellipsis label">
            Return Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
          <div class="ellipsis label">
            Update Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
        </div>
        <div class="card-body-footer">
          <el-badge
            :value="12"
            class="comment-badge"
          >
            <div
              class="comment"
              title="今天家里有事，请假半天,返回补假条"
            >
              今天家里有事，请假半天,返回补假条
            </div>
          </el-badge>
        </div>
      </div>
    </el-card>

    <el-card
      shadow="always"
      class="card-wrap"
    >
      <div class="card-aside">
        <el-avatar
          class="card-aside-avatar"
          icon="el-icon-user-solid"
        />
        <div class="card-aside-name">
          马传佳
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-header">
          <div class="card-body-header-tag">
            <el-tag
              type=""
              effect="dark"
              size="small"
            >
              请假
            </el-tag>
          </div>

          <el-dropdown>
            <i class="el-icon-more card-body-header-actions" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>发送消息</el-dropdown-item>
              <el-dropdown-item>查看消息</el-dropdown-item>
              <el-dropdown-item>查看详情</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="card-body-main">
          <div class="ellipsis label">
            Return Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
          <div class="ellipsis label">
            Update Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
        </div>
        <div class="card-body-footer">
          <el-badge
            :value="12"
            class="comment-badge"
          >
            <div
              class="comment"
              title="今天家里有事，请假半天,返回补假条"
            >
              今天家里有事，请假半天,返回补假条
            </div>
          </el-badge>
        </div>
      </div>
    </el-card>

    <el-card
      shadow="always"
      class="card-wrap"
    >
      <div class="card-aside">
        <el-avatar
          class="card-aside-avatar"
          icon="el-icon-user-solid"
        />
        <div class="card-aside-name">
          马传佳
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-header">
          <div class="card-body-header-tag">
            <el-tag
              type="danger"
              effect="dark"
              size="small"
            >
              请假
            </el-tag>
          </div>

          <el-dropdown>
            <i class="el-icon-more card-body-header-actions" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>发送消息</el-dropdown-item>
              <el-dropdown-item>查看消息</el-dropdown-item>
              <el-dropdown-item>查看详情</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="card-body-main">
          <div class="ellipsis label">
            Return Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
          <div class="ellipsis label">
            Update Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
        </div>
        <div class="card-body-footer">
          <el-badge
            :value="12"
            class="comment-badge"
          >
            <div
              class="comment"
              title="今天家里有事，请假半天,返回补假条"
            >
              今天家里有事，请假半天,返回补假条
            </div>
          </el-badge>
        </div>
      </div>
    </el-card>

    <el-card
      shadow="always"
      class="card-wrap"
    >
      <div class="card-aside">
        <el-avatar
          class="card-aside-avatar"
          icon="el-icon-user-solid"
        />
        <div class="card-aside-name">
          马传佳
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-header">
          <div class="card-body-header-tag">
            <el-tag
              type="danger"
              effect="dark"
              size="small"
            >
              请假
            </el-tag>
          </div>

          <el-dropdown>
            <i class="el-icon-more card-body-header-actions" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>发送消息</el-dropdown-item>
              <el-dropdown-item>查看消息</el-dropdown-item>
              <el-dropdown-item>查看详情</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="card-body-main">
          <div class="ellipsis label">
            Return Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
          <div class="ellipsis label">
            Update Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
        </div>
        <div class="card-body-footer">
          <el-badge
            :value="12"
            :hidden="true"
            class="comment-badge"
          >
            <div
              class="comment"
              title="今天家里有事，请假半天,返回补假条"
            >
              今天家里有事，请假半天,返回补假条
            </div>
          </el-badge>
        </div>
      </div>
    </el-card>

    <el-card
      shadow="always"
      class="card-wrap"
    >
      <div class="card-aside">
        <el-avatar
          class="card-aside-avatar"
          icon="el-icon-user-solid"
        />
        <div class="card-aside-name">
          马传佳
        </div>
      </div>
      <div class="card-body">
        <div class="card-body-header">
          <div class="card-body-header-tag">
            <el-tag
              type="danger"
              effect="dark"
              size="small"
            >
              请假
            </el-tag>
          </div>

          <el-dropdown>
            <i class="el-icon-more card-body-header-actions" />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>发送消息</el-dropdown-item>
              <el-dropdown-item>查看消息</el-dropdown-item>
              <el-dropdown-item>查看详情</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="card-body-main">
          <div class="ellipsis label">
            Return Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
          <div class="ellipsis label">
            Update Time:
          </div>
          <div class="ellipsis content">
            2020-01-07 10:20:20
          </div>
        </div>
        <div class="card-body-footer">
          <el-badge
            :value="12"
            :hidden="true"
            class="comment-badge"
          >
            <div
              class="comment"
              title="今天家里有事，请假半天,返回补假条"
            >
              今天家里有事，请假半天,返回补假条
            </div>
          </el-badge>
        </div>
      </div>
    </el-card>
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
  name: 'RecentCard',
  components: {
    AppContent
  }
})
export default class extends Vue {
  mounted() {}
}
</script>

<style lang="scss">
.cards-container-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card-wrap {
  width: 300px;
  margin: 10px;
  &:hover {
    background: linear-gradient(top, #589ce5, #4eccf1);
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
    .el-card__body {
      .card-aside {
        .card-aside-avatar {
          background: #fff;
          color: $activeBg;
        }
        .card-aside-name {
          color: #fff;
        }
      }
      .card-body {
        .card-body-header {
          .card-body-header-actions {
            visibility: visible;
          }
        }
        .card-body-main {
          .label {
            color: #fff;
          }

          .content {
            color: #fff;
          }
        }
        .card-body-footer {
          .comment {
            background: #fff;
          }
        }
      }
    }
  }
  .el-card__body {
    display: flex;
    flex-direction: row;
    padding: 10px;
    .card-aside {
      width: 80px;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .card-aside-avatar {
        background: $activeBg;
      }
      .card-aside-name {
        margin-top: 10px;
        color: $darkText;
      }
    }
    .card-body {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      width: 0;
      .card-body-header {
        display: flex;
        flex-direction: row;
        margin-bottom: 5px;
        align-items: center;
        .card-body-header-tag {
          flex-grow: 1;
          width: 0;
        }
        .card-body-header-actions {
          cursor: pointer;
          visibility: hidden;
          color: #fff;
        }
      }
      .card-body-main {
        flex-grow: 1;
        color: $blue;
        font-size: 14px;
        line-height: 20px;
        .label {
          font-size: 12px;
          color: $darkGray;
        }
        .ellipsis {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .content {
          margin-bottom: 5px;
        }
      }
      .card-body-footer {
        .comment-badge {
          .el-badge__content.is-fixed {
            transform: translateY(-37%) translateX(46%);
          }
        }
        .comment {
          background: $mainBg;
          padding: 5px;
          border-radius: 3px;
          margin-top: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
          width: 198px;
        }
      }
    }
  }
}
</style>
