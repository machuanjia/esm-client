<template>
  <div class="toc-layout-wrap">
    <div class="toc-layout-toc">
      <div class="toc-layout-toc-header">
        <div class="toc-layout-title">
          <svg-icon name="story" />
          <span>{{ $t('route.story') }}</span>
        </div>
        <div class="toc-layout-action">
          <el-dropdown>
            <el-button
              icon="el-icon-plus"
              :size="'small'"
              circle
            />
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>分组</el-dropdown-item>
              <el-dropdown-item>故事版</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="toc-layout-toc-body">
        <el-input
          v-model="filterText"
          placeholder="输入关键字进行过滤"
        />
        <el-tree
          ref="tree"
          class="story-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          @node-click="handleNodeClick"
        >
          <span
            slot-scope="{node, data}"
            class="custom-tree-node"
          >
            <span>{{ node.label }}</span>
            <span class="custom-tree-node-action">
              <i
                class="el-icon-delete"
                @click="() => remove(node, data)"
              />
            </span>
          </span>
        </el-tree>
      </div>
    </div>
    <div class="toc-layout-main flex-c">
      <div class="story-main-header">
        <swiper :options="swiperOption">
          <swiper-slide
            v-for="(slide, index) in swiperSlides"
            :key="index"
            class="swiper-item-wrap"
          >
            <div class="swiper-item-content">
              <el-input
                v-model="swiperSlides[index]"
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
              />
            </div>
          </swiper-slide>
          <div
            slot="pagination"
            class="swiper-pagination"
          />
          <div
            slot="button-prev"
            class="swiper-button-prev"
          />
          <div
            slot="button-next"
            class="swiper-button-next"
          />
        </swiper>
      </div>
      <div class="story-main-body flex-grow" />
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
  private data = [
    {
      id: 1,
      label: '分组一',
      category: 1,
      children: [
        {
          id: 4,
          category: 0,
          label: '研发日报'
        }
      ]
    },
    {
      id: 2,
      label: '分组二',
      category: 0,
      children: [
        {
          id: 5,
          category: 0,
          label: '研发周报'
        },
        {
          id: 6,
          category: 0,
          label: '研发周报'
        }
      ]
    },
    {
      id: 3,
      category: 0,
      label: '分组三',
      children: [
        {
          id: 7,
          category: 0,
          label: '研发月报'
        },
        {
          id: 8,
          category: 0,
          label: '研发月报'
        }
      ]
    }
  ];
  private defaultProps = {
    children: 'children',
    label: 'label'
  };

  // private swiperOption = {
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev"
  //   }
  // };

  private swiperOption = {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };
  private swiperSlides = [1, 2, 3, 4, 5];

  @Watch('filterText')
  private onFilterChange(val: any) {
    const tree: any = this.$refs.tree;
    tree.filter(val);
  }
  filterNode(value: any, data: any) {
    if (!value) return true;
    return data.label.indexOf(value) !== -1;
  }
  mounted() {
    setInterval(() => {
      console.log('simulate async data');
      if (this.swiperSlides.length < 10) {
        this.swiperSlides.push(this.swiperSlides.length + 1);
      }
    }, 3000);
  }
  handleNodeClick(data: any) {
    console.log(data);
  }

  remove(node: any, data: any) {
    const parent = node.parent;
    const children = parent.data.children || parent.data;
    const index = children.findIndex(d => d.id === data.id);
    children.splice(index, 1);
  }
}
</script>

<style lang="scss" scoped>
.story-tree {
  background: none;
  .el-tree-node__content {
    height: 36px;
    &:hover {
      background: $hoverBg;
    }
  }
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  &:hover {
    .custom-tree-node-action {
      visibility: visible;
    }
  }
  .custom-tree-node-action {
    visibility: hidden;
  }
}
.story-main-header {
  // background: #fff;
  margin: 10px;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
  .swiper-item-wrap {
    padding: 40px 60px;
    .swiper-item-content {
      text-align: center;
      textarea {
        border: none;
        outline: none;
        resize: none;
        height: 60px;
        line-height: 60px;
        text-align: center;
        vertical-align: middle;
        font-size: 24px;
        color:$darkText;
        // background: $mainBg;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    background-size: 17px 34px;
  }
  .swiper-pagination {
    color: $darkText;
  }
}
.story-main-body{
  margin: 0 10px 10px 10px;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
}
</style>
