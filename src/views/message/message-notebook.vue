<template>
  <section class="message-main-body">
    <div class="message-nav">
      <div class="message-nav-header" />
    </div>
    <div class="message-content">
      <div class="message-content-header" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';
import { AppModule } from '@/store/modules/app';

@Component({
  name: 'messageNotebook',
  components: {
    AppContent
  }
})
export default class extends Vue {
  mounted() {}
}
</script>

<style lang="scss" scoped>

</style>
