<template>
  <div :class="{'has-logo': showLogo}">
    <sidebar-logo
      v-if="showLogo"
      :collapse="isCollapse"
    />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- :background-color="variables.menuBg" -->
      <div
        class="wechat-wrap"
        @click="showMessage"
      >
        <svg-icon name="wechat" />
      </div>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :text-color="variables.menuText"
        :active-text-color="menuActiveTextColor"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
    <div
      class="sidebar-avatar"
      :style="{backgroundColor: variables.menuBg}"
    >
      <el-popover
        placement="right"
        width="200"
        trigger="click"
      >
        <el-menu>
          <router-link to="/profile/">
            <el-menu-item index="1">
              <i class="el-icon-user" />
              <span slot="title">{{ $t('navbar.profile') }}</span>
            </el-menu-item>
          </router-link>
          <el-menu-item
            index="2"
            @click="preference"
          >
            <i class="iconfont esmpreference mr5 w24 iblock text-center" />
            <span slot="title">{{ $t('navbar.preference') }}</span>
          </el-menu-item>
          <el-menu-item
            index="4"
            @click="logout"
          >
            <i class="el-icon-switch-button" />
            <span slot="title">{{ $t('navbar.logOut') }}</span>
          </el-menu-item>
        </el-menu>
        <el-avatar
          slot="reference"
          icon="el-icon-user-solid"
          :size="30"
        />
      </el-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AppModule } from '@/store/modules/app';
import { PermissionModule } from '@/store/modules/permission';
import { SettingsModule } from '@/store/modules/settings';
import SidebarItem from './SidebarItem.vue';
import SidebarLogo from './SidebarLogo.vue';
import variables from '@/styles/_variables.scss';
import { UserModule } from '@/store/modules/user';

@Component({
  name: 'SideBar',
  components: {
    SidebarItem,
    SidebarLogo
  }
})
export default class extends Vue {
  get sidebar() {
    return AppModule.sidebar;
  }

  get routes() {
    return PermissionModule.routes;
  }

  get showLogo() {
    return SettingsModule.showSidebarLogo;
  }

  get menuActiveTextColor() {
    if (SettingsModule.sidebarTextTheme) {
      return SettingsModule.theme;
    } else {
      return variables.menuActiveText;
    }
  }

  get variables() {
    return variables;
  }

  get activeMenu() {
    const route = this.$route;
    const { meta, path } = route;
    // if set path, the sidebar will highlight the path you set
    if (meta.activeMenu) {
      return meta.activeMenu;
    }
    return path;
  }

  get isCollapse() {
    return !this.sidebar.opened;
  }
  private preference() {
    AppModule.setRightPanel(true);
  }
  private async logout() {
    await UserModule.LogOut();
    this.$router.push(`/login?redirect=${this.$route.fullPath}`);
  }

  showMessage() {
    AppModule.SetMessageVisible(true);
  }
}
</script>

<style lang="scss">
.sidebar-container {
  // reset element-ui css
  border-right: 1px $lightGray solid;
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%;
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }

  .sidebar-avatar {
    // background: rgb(48, 65, 86);//#2b2f3a;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    cursor: pointer;
  }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
}

.has-logo {
  .el-scrollbar {
    height: calc(100% - 130px);
  }
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
.wechat-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  color: $darkGray;
  border-radius: 50%;
  // box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 10px 0 10px 12px;

  &:hover {
    color: $subMenuActiveText;
    border: 1px $border solid;
  }
}
</style>
