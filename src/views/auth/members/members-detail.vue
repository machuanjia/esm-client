<template>
  <el-tabs
    v-model="activeName"
    class="plr20"
  >
    <el-tab-pane
      label="基本信息"
      name="basic"
    >
      <membersBasic
        v-if="activeName === 'basic'"
        :entity="entity"
      />
    </el-tab-pane>
    <el-tab-pane
      label="角色"
      name="roles"
    >
      <membersRoles
        v-if="activeName === 'roles'"
        :entity="entity"
      />
    </el-tab-pane>
    <el-tab-pane
      label="权限"
      name="permissions"
    >
      <membersPermissions
        v-if="activeName === 'permissions'"
        :entity="entity"
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
import membersBasic from '@/views/auth/members/members-basic.vue';
import membersRoles from '@/views/auth/members/members-roles.vue';
import membersPermissions from '@/views/auth/members/members-permissions.vue';

@Component({
  name: 'membersDetail',
  components: {
    membersBasic,
    membersRoles,
    membersPermissions
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
