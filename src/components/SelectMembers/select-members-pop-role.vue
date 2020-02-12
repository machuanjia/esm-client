<template>
  <div class="role-wrap">
    <el-tree
      class="org-tree"
      :data="roles"
      :props="rolesProps"
      :expand-on-click-node="false"
      default-expand-all
      show-checkbox
      @check-change="handleCheckChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getRoles } from '@/api/roles';

@Component({
  name: 'SelectMembersPopRole'
})
export default class extends Vue {
  private roles: any = [];
  private rolesProps = {
    children: 'children',
    label: 'name'
  };
  created() {
    this.getRoles();
  }
  mounted() {}

  beforeDestory() {}

  handleCheckChange() {}

  private async getRoles() {
    const { data } = await getRoles({});
    if (data) {
      this.roles = data;
    }
  }
}
</script>
<style lang="scss" scoped>
.role-wrap {
}
</style>
