<template>
  <el-table
    :data="permissions"
    row-key="id"
    border
    fit
    highlight-current-row
  >
    <el-table-column
      prop="name"
      label="名称"
      sortable
      width="180"
    />
    <el-table-column
      prop="description"
      label="描述"
    />
    <el-table-column
      width="120"
      align="center"
      label="类型"
    >
      <template slot-scope="{row}">
        {{ row.type ? '自定义' : '系统' }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import { getUserPermissions, getUser } from '@/api/users';

@Component({
  name: 'membersPermissions',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) private entity!: any;
  private permissions: any = [];

  created() {
    this.getUserPermissions();
  }

  mounted() {}
  private async getUserPermissions() {
    const { data } = await getUserPermissions(this.entity.id, {});
    if (data) {
      this.permissions = data;
    }
  }
}
</script>

<style lang="scss">
</style>
