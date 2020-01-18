<template>
  <div>membersPermissions</div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';

@Component({
  name: 'membersPermissions',
  components: {}
})
export default class extends Vue {
  @Prop({ required: true }) private entity!: any;

  mounted() {}
}
</script>

<style lang="scss">
</style>
