<template>
  <div class="toc-layout-wrap">
    <div class="toc-layout-toc">
      <div class="toc-layout-toc-header">
        <div class="toc-layout-title">
          <svg-icon name="tab" />
          <span>{{ $t('route.boards') }}</span>
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
    <div class="toc-layout-main">
      <grid-layout
        v-if="layout.length > 0"
        :layout.sync="layout"
        :col-num="layoutColNum"
        :row-height="60"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
        @layout-updated="layoutUpdatedEvent"
        @layout-ready="layoutReadyEvent"
      >
        <grid-item
          v-for="item in layout"
          :key="item.i"
          class="grid-item-wrap"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
        >
          <!-- <div class="grid-item-header">
            <div class="grid-item-header-title">人口分布图</div>
            <div class="grid-item-header-actions">人口分布图</div>
          </div> -->
          <!-- <div class="grid-item-body"> -->
          <radar-chart />
          <!-- </div> -->
        </grid-item>
      </grid-layout>
    </div>
    <div class="toc-layout-aside">
      s
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
import VueGridLayout from 'vue-grid-layout';
import RadarChart from '@/views/dashboard/admin/components/RadarChart.vue';

@Component({
  name: 'boards',
  components: {
    AppContent,
    AppContentFull,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    RadarChart
  }
})
export default class extends Vue {
  private filterText = '';

  private list = [
    { x: 0, y: 0, w: 4, h: 4, i: '0' },
    { x: 2, y: 0, w: 6, h: 6, i: '1' },
    { x: 4, y: 0, w: 4, h: 4, i: '2' },
    { x: 6, y: 0, w: 6, h: 4, i: '3' },
    { x: 8, y: 0, w: 4, h: 4, i: '4' },
    { x: 10, y: 0, w: 8, h: 4, i: '5' },
    { x: 0, y: 5, w: 12, h: 6, i: '6' }
  ];

  // 布局位置数据
  private layout: any = [];
  // 布局二维数组地图
  private layoutMap: any = [];
  // 布局列数
  private layoutColNum = 12;

  mounted() {
    this.list.forEach(n => {
      this.addItem(n);
    });
  }

  // 添加项目
  addItem(item: any) {
    // 产生随机宽高
    var itemW = item.w;
    var itemH = item.h;
    var addItem = {
      x: 0,
      y: this.layoutMap.length,
      w: itemW,
      h: itemH,
      i: this.layout[this.layout.length - 1]
        ? parseInt(this.layout[this.layout.length - 1].i) + 1
        : 0
    };
    if (this.layoutMap.length) {
      // console.log(this.layoutMap.length);
      for (let r = 0, rLen = this.layoutMap.length; r < rLen; r++) {
        for (let c = 0; c <= this.layoutColNum - itemW; c++) {
          let res = this.regionalTest(
            c,
            r,
            itemW,
            rLen > r + itemH ? itemH : rLen - r
          );

          if (res.result) {
            // 更新添加数据内容
            addItem = {
              x: res.x,
              y: res.y,
              w: itemW,
              h: itemH,
              i: parseInt(this.layout[this.layout.length - 1].i) + 1
            };

            c = this.layoutColNum + 1;
            r = rLen + 1;
          } else {
            c = res.offsetX;
          }
        }
      }
    }
    // 更新二维数组地图
    for (let itemR = 0; itemR < itemH; itemR++) {
      for (let itemC = 0; itemC < itemW; itemC++) {
        // 如果没有该行，初始化
        if (!this.layoutMap[addItem.y + itemR]) {
          this.layoutMap[addItem.y + itemR] = new Array(this.layoutColNum);
          for (let i = 0; i < this.layoutColNum; i++) {
            this.layoutMap[addItem.y + itemR][i] = 0;
          }
        }
        // 标记点
        this.layoutMap[addItem.y + itemR][addItem.x + itemC] = 1;
      }
    }

    // console.log(this.layoutMap);
    // 添加数据
    this.layout.push(addItem);
  }
  // 生成二维数组地图
  genereatePlaneArr(data: any) {
    var map = [];
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        var one = data[i];
        // 循环行
        for (var r = one.y; r < one.y + one.h; r++) {
          // 循环列
          for (var c = one.x; c < one.x + one.w; c++) {
            // 检修当前行是否存在
            if (!map[r]) {
              map[r] = new Array(this.layoutColNum);

              for (let i = 0; i < this.layoutColNum; i++) {
                map[r][i] = 0;
              }
            }
            // 占据为1
            map[r][c] = 1;
          }
        }
      }
    }
    return map;
  }
  // 区域检测 x,y 二维数据地图起始坐标点  w,h 检测区域宽高
  regionalTest(x: any, y: any, w: any, h: any) {
    // 定义返回 x,y 偏移 及 是否有空位置
    let offsetX = 0;
    let offsetY = 0;
    let res = true;
    // 按区域循环检测 二维数组地图
    for (let r = 0; r < w; r++) {
      for (let c = 0; c <= h; c++) {
        let point = this.layoutMap[y + r] ? this.layoutMap[y + r][x + c] : 0;
        // 如该点被占据 记录偏移值
        if (point === 1) {
          res = false;
          offsetX = offsetX > x + c ? offsetX : x + c;
          offsetY = offsetY > y + r ? offsetY : y + r;
        }
      }
    }

    return {
      result: res,
      offsetX: offsetX,
      x: x,
      y: y
    };
  }
  // 组件更新完成生命周期
  layoutReadyEvent(newLayout: any) {
    // console.log("4Ready");
    // console.log(this.layout);
    // 当插件加载完成后  获取现在的二维地图树
    this.layoutMap = this.genereatePlaneArr(this.layout);
  }
  layoutUpdatedEvent(newLayout: any) {
    // console.log("Updated");
    // console.log(this.layout);
    // 当插件内容布局发生变化后  获取现在的二维地图树
    this.layoutMap = this.genereatePlaneArr(this.layout);
  }
  rnd(m: any, n: any) {
    return (Math.random() * (m - n + 1) + n) | 0;
  }
}
</script>

<style lang="scss">
.grid-item-wrap {
  border: 1px $border solid;
  background: #fff;
  display: flex;
  flex-direction: column;
  .grid-item-header {
    display: flex;
    flex-direction: row;
    padding: 10px;
    .grid-item-header-title {
      flex-grow: 1;
      width: 0;
    }
    .grid-item-header-actions {
    }
  }
  .grid-item-body {
    flex-grow: 1;
    height: 0;
    padding: 10px;
  }
}
</style>
