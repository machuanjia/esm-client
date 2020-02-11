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
      ss
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

@Component({
  name: 'boards',
  components: {
    AppContent,
    AppContentFull
  }
})
export default class extends Vue {
  private searchText = '';

  private rolesData = [
    {
      id: 1,
      scope: '管理员',
      status: '1',
      description: '这个是管理员',
      name: '在线状态'
    },
    {
      id: 2,
      scope: '普通成员',
      status: '1',
      description: '这个是状态查看',
      name: '状态查看'
    }
  ];

  mounted() {}

  edit(row: any) {}
  remove(row: any) {}
}
</script>

<style lang="scss">
</style>
