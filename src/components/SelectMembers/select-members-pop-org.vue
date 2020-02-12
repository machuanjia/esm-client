<template>
  <div class="org-wrap">
    <el-tree
      class="org-tree"
      :data="orgs"
      :props="orgProps"
      :expand-on-click-node="false"
      default-expand-all
      show-checkbox
      @check-change="handleCheckChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getOrganizations } from '@/api/organizations';

@Component({
  name: 'SelectMembersPopOrg'
})
export default class extends Vue {
  private orgs: any = [
    {
      id: 0,
      name: '北京华阳云正科技有限公司'
    }
  ];

  private orgProps = {
    children: 'children',
    label: 'name'
  };

  handleCheckChange(node: any) {}

  created() {
    this.getOrganizations();
  }

  mounted() {}

  beforeDestory() {}

  private async getOrganizations() {
    const { data } = await getOrganizations({});
    if (data) {
      this.orgs = [
        {
          id: 0,
          name: '北京华阳云正科技有限公司',
          children: data
        }
      ];
    }
  }
}
</script>
<style lang="scss" scoped>
.org-wrap {
}
</style>
