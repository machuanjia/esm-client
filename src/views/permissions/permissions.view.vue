<template>
  <div class="app-content-wrap">
    <el-tabs
      v-if="apps && apps.length > 0"
      v-model="activeName"
      :tab-position="'left'"
      class="permissions-wrap"
    >
      <el-tab-pane
        v-for="app of apps"
        :key="app.id"
        :label="app.name"
        :name="app.id.toString()"
      >
        <permissionsApp
          v-if="activeName === app.id.toString()"
          :app="app"
        />
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
import { getApplications } from '@/api/applications';

@Component({
  name: 'permissions',
  components: {
    permissionsApp
  }
})
export default class extends Vue {
  private apps: any = [];
  private activeName: any = '';
  created() {
    this.getApplications();
  }
  mounted() {}
  private async getApplications() {
    const { data } = await getApplications({});
    if (data) {
      this.apps = data;
      if (this.apps.length > 0) {
        this.activeName = this.apps[0].id + '';
      }
    }
  }
}
</script>

<style lang="scss" >
.permissions-wrap {
  height: 100%;
  padding: 20px;
  background: $white;
}
</style>
