<template>
  <div class="app-content-wrap">
    <el-tabs
      :tab-position="'left'"
      class="permissions-wrap"
    >
      <el-tab-pane label="智慧看板">
        <permissionsApp />
      </el-tab-pane>
      <el-tab-pane label="日程">
        <permissionsApp />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import permissionsApp from '@/views/permissions/permissions-app.vue';

@Component({
  name: 'permissions',
  components: {
    permissionsApp
  }
})
export default class extends Vue {
  private searchText = '';

  private rolesData = [
    {
      id: 1,
      type: 0,
      description: '这个是管理员',
      name: '管理员'
    },
    {
      id: 2,
      type: 0,
      description: '这个是普通成员',
      name: '普通成员'
    },
    {
      id: 3,
      type: 0,
      description: '这个是只读成员',
      name: '只读成员'
    },
    {
      id: 4,
      type: 1,
      description: '这个是自定义权限',
      name: '自定义权限'
    }
  ];

  mounted() {}

  edit(row: any) {}
  remove(row: any) {}
}
</script>

<style lang="scss" >
.permissions-wrap {
  height: 100%;
  padding: 20px;
  background: $white;
}
</style>
