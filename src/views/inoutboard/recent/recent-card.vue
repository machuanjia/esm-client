<template>
  <div class="cards-container-wrap">
    <el-badge
      :value="12"
      class="item"
    >
      <el-card
        shadow="always"
        class="card-wrap"
      >
        <div class="card-aside">
          <i class="avatar-icon el-icon-user" />
          <div class="avatar-name">
            马传佳
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-header">
            <el-tag
              type="info"
              effect="dark"
              size="small"
            >
              休息中
            </el-tag>
          </div>
          <div class="card-body-main">
            2020-01-07 10:20:20
          </div>
          <div class="card-body-footer">
            <i class="card-comment el-icon-s-comment" />
          </div>
        </div>
      </el-card>
    </el-badge>

    <el-badge
      :value="12"
      class="item"
    >
      <el-card
        shadow="always"
        class="card-wrap"
      >
        <div class="card-aside">
          <i class="avatar-icon el-icon-user" />
          <div class="avatar-name">
            马传佳
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-header">
            <el-tag
              type="info"
              effect="dark"
              size="small"
            >
              休息中
            </el-tag>
          </div>
          <div class="card-body-main">
            2020-01-07 10:20:20
          </div>
          <div class="card-body-footer">
            <i class="card-comment el-icon-s-comment" />
          </div>
        </div>
      </el-card>
    </el-badge>

    <el-badge
      :value="12"
      class="item"
    >
      <el-card
        shadow="always"
        class="card-wrap"
      >
        <div class="card-aside">
          <i class="avatar-icon el-icon-user" />
          <div class="avatar-name">
            马传佳
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-header">
            <el-tag
              type="info"
              effect="dark"
              size="small"
            >
              休息中
            </el-tag>
          </div>
          <div class="card-body-main">
            2020-01-07 10:20:20
          </div>
          <div class="card-body-footer">
            <i class="card-comment el-icon-s-comment" />
          </div>
        </div>
      </el-card>
    </el-badge>

    <el-badge
      :value="12"
      class="item"
    >
      <el-card
        shadow="always"
        class="card-wrap"
      >
        <div class="card-aside">
          <i class="avatar-icon el-icon-user" />
          <div class="avatar-name">
            马传佳
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-header">
            <el-tag
              type="info"
              effect="dark"
              size="small"
            >
              休息中
            </el-tag>
          </div>
          <div class="card-body-main">
            2020-01-07 10:20:20
          </div>
          <div class="card-body-footer">
            <i class="card-comment el-icon-s-comment" />
          </div>
        </div>
      </el-card>
    </el-badge>

    <el-badge
      :value="12"
      class="item"
    >
      <el-card
        shadow="always"
        class="card-wrap"
      >
        <div class="card-aside">
          <i class="avatar-icon el-icon-user" />
          <div class="avatar-name">
            马传佳
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-header">
            <el-tag
              type="info"
              effect="dark"
              size="small"
            >
              休息中
            </el-tag>
          </div>
          <div class="card-body-main">
            2020-01-07 10:20:20
          </div>
          <div class="card-body-footer">
            <i class="card-comment el-icon-s-comment" />
          </div>
        </div>
      </el-card>
    </el-badge>

    <el-badge
      :value="12"
      class="item"
    >
      <el-card
        shadow="always"
        class="card-wrap"
      >
        <div class="card-aside">
          <i class="avatar-icon el-icon-user" />
          <div class="avatar-name">
            马传佳
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-header">
            <el-tag
              type="info"
              effect="dark"
              size="small"
            >
              休息中
            </el-tag>
          </div>
          <div class="card-body-main">
            2020-01-07 10:20:20
          </div>
          <div class="card-body-footer">
            <i class="card-comment el-icon-s-comment" />
          </div>
        </div>
      </el-card>
    </el-badge>

    <el-badge
      :value="12"
      class="item"
    >
      <el-card
        shadow="always"
        class="card-wrap"
      >
        <div class="card-aside">
          <i class="avatar-icon el-icon-user" />
          <div class="avatar-name">
            马传佳
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-header">
            <el-tag
              type="info"
              effect="dark"
              size="small"
            >
              休息中
            </el-tag>
          </div>
          <div class="card-body-main">
            2020-01-07 10:20:20
          </div>
          <div class="card-body-footer">
            <i class="card-comment el-icon-s-comment" />
          </div>
        </div>
      </el-card>
    </el-badge>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Form as ElForm, Input } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { isValidUsername } from '@/utils/validate'
import { Dictionary } from 'vue-router/types/router'
import AppContent from '@/components/Content/index.vue'

@Component({
  name: 'RecentCard',
  components: {
    AppContent
  }
})
export default class extends Vue {
  mounted() {

  }
}
</script>

<style lang="scss">
.cards-container-wrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item{
  .el-badge__content.is-fixed{
      top: 12px;
      right: 30px;
  }
}
.card-wrap{
  width: 300px;
  margin: 10px;
  .el-card__body{
    display: flex;
    flex-direction: row;
    padding: 0;
    .card-aside{
      width:80px;
      height: 80px;
      background: #d4d5e2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      .avatar-icon{
        font-size: 26px;
      }
      .avatar-name{
        font-size: 14px;
        margin-top: 5px;
      }
    }
    .card-body{
      flex-grow: 1;
      background: #eaebf5;
      display: flex;
      flex-direction: column;
      .card-body-header{
        display: flex;
        flex-direction: row;
        justify-items: flex-end;
        padding: 3px 10px
      }
      .card-body-main{
        flex-grow: 1;
        padding: 3px;
        color: $blue;
        font-size: 14px;
        padding: 0 10px;
        display:flex;
        flex-direction: row;
        align-items: center;
      }
      .card-body-footer{
        color: #fff;
        padding: 2px;
        font-size: 20px;
        background: #e4e5ee;
        display: flex;
        justify-content: flex-end;
        padding: 0 10px;
        .card-comment{
          cursor: pointer;
        }
      }
    }
  }
}
</style>
