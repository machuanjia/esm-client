<template>
  <el-table
    :data="roles"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    fit
    highlight-current-row
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
  >
    <el-table-column
      prop="name"
      label="名称"
      sortable
      width="180"
    />

    <el-table-column
      label="权限"
      sortable
      width="260"
    >
      <template slot-scope="{row}">
        {{ row.permissions | rolesPermissions }}
      </template>
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述"
    />
    <el-table-column
      width="80"
      align="center"
      label="操作"
    >
      <template slot-scope="{row}">
        <i
          v-if="!row.type"
          class="el-icon-delete table-icon-action"
          @click="removeAction(row)"
        />
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
import { getRoles } from '@/api/roles';

@Component({
  name: 'membersRoles',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) private entity!: any;
  private roles: any = [];

  created() {
    this.getRoles();
  }

  mounted() {}

  private async getRoles() {
    const { data } = await getRoles({ id: this.entity.id });
    if (data) {
      this.roles = data;
    }
  }
}
</script>

<style lang="scss">
</style>
