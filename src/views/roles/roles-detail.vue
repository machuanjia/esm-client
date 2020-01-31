<template>
  <el-tabs
    v-model="activeName"
    class="plr20"
  >
    <el-tab-pane
      label="基本信息"
      name="basic"
    >
      <rolesBasic
        v-if="activeName === 'basic'"
        :entity.sync="entity"
      />
    </el-tab-pane>
    <!-- <el-tab-pane label="权限" name="permissions">
      <rolesMembers :entity.sync="entity" />
    </el-tab-pane>-->
    <el-tab-pane
      label="人员"
      name="members"
    >
      <rolesMembers
        v-if="activeName === 'members'"
        :entity.sync="entity"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import rolesBasic from '@/views/roles/roles-basic.vue';
import rolesMembers from '@/views/roles/roles-members.vue';
import rolesPermissions from '@/views/roles/roles-permissions.vue';

@Component({
  name: 'rolesDetail',
  components: {
    rolesBasic,
    rolesMembers,
    rolesPermissions
  }
})
export default class extends Vue {
  @Prop({ required: true }) private entity!: any;

  private activeName = 'basic';

  mounted() {}
}
</script>

<style lang="scss">
</style>
