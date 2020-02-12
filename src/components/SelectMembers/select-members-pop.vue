<template>
  <div class="select-members-pop-wrap">
    <el-tabs
      v-model="activeName"
      class="select-members-pop-tab"
      @tab-click="tabClick"
    >
      <el-tab-pane
        label="常用"
        name="normal"
      >
        <SelectMembersPopNormal v-if="activeName === 'normal'" />
      </el-tab-pane>
      <el-tab-pane
        label="部门"
        name="organization"
      >
        <SelectMembersPopOrg v-if="activeName === 'organization'" />
      </el-tab-pane>
      <el-tab-pane
        label="角色"
        name="role"
      >
        <SelectMembersPopRole v-if="activeName === 'role'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SelectMembersPopNormal from './select-members-pop-normal.vue';
import SelectMembersPopOrg from './select-members-pop-org.vue';
import SelectMembersPopRole from './select-members-pop-role.vue';

@Component({
  name: 'SelectMembersPop',
  components: {
    SelectMembersPopNormal,
    SelectMembersPopOrg,
    SelectMembersPopRole
  }
})
export default class extends Vue {
  private activeName = 'normal';

  mounted() {}

  beforeDestory() {}

  tabClick() {}
}
</script>
<style lang="scss">
.select-members-pop-tab{
  .el-tabs__nav-scroll{
    display: flex;
    justify-content: center;
  }
}
</style>
