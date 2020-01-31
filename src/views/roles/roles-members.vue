<template>
  <app-content
    class="no-padding"
    :is-flex-header="true"
    :is-hright="true"
    :is-hcenter="true"
  >
    <template v-slot:hcenter>
      <el-input
        v-model="searchText"
        class="search-container"
        placeholder="请输入搜索内容"
        prefix-icon="el-icon-search"
      />
    </template>
    <template v-slot:hright>
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="openAction"
      >
        人员
      </el-button>
    </template>
    <template v-slot:body>
      <el-table
        :data="tableData"
        border
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        />
        <el-table-column
          prop="role"
          label="角色"
          width="180"
        />
        <el-table-column
          prop="phone"
          label="手机"
        />
        <el-table-column
          width="80"
          align="center"
          label="操作"
        >
          <template slot-scope="{row}">
            <i
              class="el-icon-delete table-icon-action"
              @click="removeAction(row)"
            />
          </template>
        </el-table-column>
      </el-table>
    </template>
  </app-content>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import { getRoleMembers } from '@/api/roles';
import AppContent from '@/components/Content/index.vue';

@Component({
  name: 'rolesMembers',
  components: {
    AppContent
  }
})
export default class extends Vue {
  @Prop({ required: true }) private entity!: any;
  private tableData: any = [];

  mounted() {
    this.getRoleMembers();
  }
  removeAction(row: any) {}

  private async getRoleMembers() {
    const { data } = await getRoleMembers(this.entity.id, {});
    if (data) {
      this.tableData = data;
    }
  }
}
</script>

<style lang="scss">
</style>
