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
              class="avatar-reverse"
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
        <draggable
          class="dragArea list-group"
          :list="list"
          :group="{name: 'people', pull: 'clone', put: false}"
          :clone="cloneDog"
        >
          <div
            v-for="element in list"
            :key="element.name"
            class="widget-data-source-field list-group-item"
          >
            <el-avatar
              class="avatar-default"
              :size="'small'"
            >
              #
            </el-avatar>
            <div class="widget-data-source-field-name">
              {{ element.name }}
            </div>
          </div>
        </draggable>
      </div>
    </div>
    <div class="toc-layout-main flex-c">
      <div class="widgets-main-header">
        <div class="widgets-main-header-row">
          <div class="widgets-main-header-row-left">
            <svg-icon name="list" />列
          </div>
          <div class="widgets-main-header-row-right">
            <draggable
              class="dragArea list-group"
              :ghost-class="'tag-ghost-class'"
              :list="listCol"
              group="people"
              @change="log"
            >
              <el-tag
                v-for="element in listCol"
                :key="element.id"
                effect="plain"
                class="ml5"
                :size="'small'"
                closable
              >
                {{ element.name }}
              </el-tag>
            </draggable>
          </div>
        </div>
        <div class="widgets-main-header-row">
          <div class="widgets-main-header-row-left">
            <svg-icon name="list" />行
          </div>
          <div class="widgets-main-header-row-right">
            <draggable
              class="dragArea list-group"
              :ghost-class="'tag-ghost-class'"
              :list="listRow"
              group="people"
              @change="log"
            >
              <el-tag
                v-for="element in listRow"
                :key="element.id"
                effect="plain"
                class="ml5"
                :size="'small'"
                closable
              >
                {{ element.name }}
              </el-tag>
            </draggable>
          </div>
        </div>
      </div>
      <div class="widgets-main-body flex-grow" />
    </div>
    <div class="toc-layout-aside">
      <div class="widgets-aside">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              标题
            </template>
            <el-input
              v-model="input"
              placeholder="请输入内容"
            />
          </el-collapse-item>
          <el-collapse-item
            title="图表类型"
            name="2"
          >
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item
            title="过滤"
            name="3"
          >
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item
            title="描述"
            name="4"
          >
            <el-input
              v-model="textarea"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
            />
          </el-collapse-item>
        </el-collapse>
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
import AppContentFull from '@/components/Content/content-full.vue';
import Draggable from 'vuedraggable';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

@Component({
  name: 'boards',
  components: {
    AppContent,
    AppContentFull,
    swiper,
    swiperSlide,
    Draggable
  }
})
export default class extends Vue {
  private filterText = '';

  private activeNames = ['1', '2', '3', '4'];

  private list = [
    { name: 'John', id: 1 },
    { name: 'Joao', id: 2 },
    { name: 'Jean', id: 3 },
    { name: 'Gerard', id: 4 }
  ];

  private listCol = [];

  private listRow = [];

  private idGlobal = 1;

  @Watch('filterText')
  private onFilterChange(val: any) {}

  mounted() {}
  cloneDog(item: any) {
    return {
      id: this.idGlobal++,
      name: item.name
    };
  }
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
    background: $activeBg;
    padding: 5px;
    border-radius: 3px;
    .widget-data-source-name {
      flex-grow: 1;
      margin: 0 10px;
      color: #fff;
    }
    i {
      font-size: 16px;
      color: #fff;
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
    padding: 5px;
    margin: 5px;

    .widget-data-source-field-name {
      flex-grow: 1;
      width: 0;
      margin-left: 5px;
      color: $mainText;
    }
  }
}
.widgets-main-header {
  padding: 10px;
  .widgets-main-header-row {
    border: 1px $border solid;
    margin-bottom: 10px;
    height: 30px;
    background: #fff;
    display: flex;
    flex-direction: row;
    &:last-child {
      margin-bottom: 0;
    }
    .widgets-main-header-row-left {
      border-right: 1px $border solid;
      width: 120px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: $mainText;
      svg {
        font-size: 12px;
        margin-right: 5px;
        margin-left: 5px;
      }
    }
    .widgets-main-header-row-right {
      flex-grow: 1;
      display: flex;
      align-items: center;
      .list-group {
        flex-grow: 1;
      }
    }
  }
}
.widgets-main-body {
  margin: 0 10px 10px 10px;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
}
.widgets-aside {
  // padding: 10px;
  .el-collapse-item__header {
    padding: 10px;
  }
  .el-collapse-item__content {
    padding: 10px;
  }
}
.tag-ghost-class {
  display: inline-block;
  margin-left: 5px;
  height: 24px;
  padding: 0 8px;
  line-height: 22px;
  background-color: white;
  border-color: #a3d3ff;
  color: #fff !important;
  font-size: 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  background: $green;
  .el-avatar {
    display: none !important;
  }
}
</style>
