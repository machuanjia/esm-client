<template>
  <div class="toc-layout-wrap">
    <div class="toc-layout-toc">
      <div class="toc-layout-toc-header">
        <div class="toc-layout-title">
          <svg-icon name="component" />
          <span>{{ $t('route.widgets') }}</span>
        </div>
        <div class="toc-layout-action">
          <el-button
            icon="el-icon-plus"
            :size="'small'"
            circle
          />
        </div>
      </div>
      <div class="toc-layout-toc-search">
        <el-input
          v-model="filterText"
          placeholder="输入关键字进行过滤"
        />
      </div>
      <div class="toc-layout-toc-body toc-layout-toc-body-no-padding">
        <div class="toc-list-item">
          <div class="toc-list-item-header">
            <div class="toc-list-item-header-avatar">
              <el-avatar
                icon="el-icon-document"
                class="avatar-default"
                :size="'small'"
              />
              <div class="toc-list-item-header-name">
                输入关键字进行过滤输入关键字进行过滤
              </div>
            </div>
            <div class="toc-list-item-header-actions">
              <i class="el-icon-delete" />
            </div>
          </div>
          <div class="toc-list-item-body">
            输入关键字进行过滤输入关键字进行过滤输入关键字进行过滤输入关键字进行过滤
          </div>
          <div class="toc-list-item-footer">
            2019-10-20
          </div>
        </div>
        <div class="toc-list-item">
          <div class="toc-list-item-header">
            <div class="toc-list-item-header-avatar">
              <el-avatar
                icon="el-icon-document"
                class="avatar-default"
                :size="'small'"
              />
              <div class="toc-list-item-header-name">
                输入关键字进行过滤输入关键字进行过滤
              </div>
            </div>
            <div class="toc-list-item-header-actions">
              <i class="el-icon-delete" />
            </div>
          </div>
          <div class="toc-list-item-body">
            输入关键字进行过滤输入关键字进行过滤输入关键字进行过滤输入关键字进行过滤
          </div>
          <div class="toc-list-item-footer">
            2019-10-20
          </div>
        </div>
        <div class="toc-list-item">
          <div class="toc-list-item-header">
            <div class="toc-list-item-header-avatar">
              <el-avatar
                icon="el-icon-document"
                class="avatar-default"
                :size="'small'"
              />
              <div class="toc-list-item-header-name">
                输入关键字进行过滤输入关键字进行过滤
              </div>
            </div>
            <div class="toc-list-item-header-actions">
              <i class="el-icon-delete" />
            </div>
          </div>
          <div class="toc-list-item-body">
            输入关键字进行过滤输入关键字进行过滤输入关键字进行过滤输入关键字进行过滤
          </div>
          <div class="toc-list-item-footer">
            2019-10-20
          </div>
        </div>
      </div>
    </div>
    <div class="toc-layout-aside toc-layout-border-right">
      <div class="widget-data-source">
        <el-dropdown>
          <div class="widget-data-source-item">
            <el-avatar
              class="avatar-default"
              :size="'small'"
            >
              <svg-icon name="data" />
            </el-avatar>
            <span class="widget-data-source-name">Excel</span>
            <i class="el-icon-arrow-down el-icon--right" />
          </div>
          <el-dropdown-menu
            slot="dropdown"
            style="width:230px;"
          >
            <el-dropdown-item>Excel</el-dropdown-item>
            <el-dropdown-item>Mysql</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="widget-data-source-fields">
        <div class="widget-data-source-field">
          <el-avatar
            class="avatar-default"
            :size="'small'"
          >
            #
          </el-avatar>
          <div class="widget-data-source-field-name">
            日期
          </div>
        </div>
        <div class="widget-data-source-field">
          <el-avatar
            class="avatar-default"
            :size="'small'"
          >
            T
          </el-avatar>
          <div class="widget-data-source-field-name">
            地区
          </div>
        </div>
        <div class="widget-data-source-field">
          <el-avatar
            class="avatar-default"
            :size="'small'"
          >
            #
          </el-avatar>
          <div class="widget-data-source-field-name">
            日期
          </div>
        </div>
        <div class="widget-data-source-field">
          <el-avatar
            class="avatar-default"
            :size="'small'"
          >
            T
          </el-avatar>
          <div class="widget-data-source-field-name">
            地区
          </div>
        </div>
        <div class="widget-data-source-field">
          <el-avatar
            class="avatar-default"
            :size="'small'"
          >
            #
          </el-avatar>
          <div class="widget-data-source-field-name">
            日期
          </div>
        </div>
        <div class="widget-data-source-field">
          <el-avatar
            class="avatar-default"
            :size="'small'"
          >
            T
          </el-avatar>
          <div class="widget-data-source-field-name">
            地区
          </div>
        </div>
      </div>
    </div>
    <div class="toc-layout-main flex-c">
      <div class="widgets-main-header">
        <div class="widgets-main-header-row">
          <div class="widgets-main-header-row-left" />
          <div class="widgets-main-header-row-right" />
        </div>
        <div class="widgets-main-header-row">
          <div class="widgets-main-header-row-left" />
          <div class="widgets-main-header-row-right" />
        </div>
      </div>
      <div class="widgets-main-body flex-grow" />
    </div>
    <div class="toc-layout-aside" />
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
import AppContentFull from '@/components/Content/content-full.vue';

import { swiper, swiperSlide } from 'vue-awesome-swiper';

@Component({
  name: 'boards',
  components: {
    AppContent,
    AppContentFull,
    swiper,
    swiperSlide
  }
})
export default class extends Vue {
  private filterText = '';

  @Watch('filterText')
  private onFilterChange(val: any) {}

  mounted() {}
}
</script>

<style lang="scss">
.toc-list-item {
  border-bottom: 1px $border solid;
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: $hoverBg;
  }
  .toc-list-item-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    .toc-list-item-header-avatar {
      flex-grow: 1;
      width: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      .toc-list-item-header-avatar {
      }
      .toc-list-item-header-name {
        flex-grow: 1;
        width: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-left: 10px;
        color: $mainText;
      }
    }
    .toc-list-item-header-actions {
    }
  }
  .toc-list-item-body {
    font-size: 12px;
    color: $darkGray;
    line-height: 20px;
    padding-top: 10px;
  }
  .toc-list-item-footer {
    font-size: 12px;
    color: $darkGray;
    margin-top: 5px;
  }
}
.toc-layout-border-right {
  border-right: 1px $border solid !important;
  border-left: none !important;
}
.widget-data-source {
  height: 53px;
  border-bottom: 1px $border solid !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  .el-dropdown {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .widget-data-source-item {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 5px;
    border-radius: 3px;
    .widget-data-source-name {
      flex-grow: 1;
      margin: 0 10px;
      color: $mainText;
    }
    i {
      font-size: 16px;
    }
  }
}
.widget-data-source-fields {
  .widget-data-source-field {
    border: 1px $border solid;
    display: flex;
    background: #fff;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    margin: 5px;

    .widget-data-source-field-name {
      flex-grow: 1;
      width: 0;
      margin-left: 5px;
      color:$mainText;
    }
  }
}
.widgets-main-header{
  padding: 10px;
  .widgets-main-header-row{
    border:1px $border solid;
    margin-bottom: 10px;
    height: 30px;
    background: #fff;
    display: flex;
    flex-direction: row;
    &:last-child{
      margin-bottom: 0;
    }
    .widgets-main-header-row-left{
      border-right: 1px $border solid;
      width: 150px;
    }
  }
}
.widgets-main-body{
 margin: 0 10px 10px 10px;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
}
</style>
