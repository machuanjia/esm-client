<template>
  <div class="message-wrap">
    message
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import SplitPane from 'vue-splitpane';
import AppContent from '@/components/Content/index.vue';
import { AppModule } from '@/store/modules/app';

@Component({
  name: 'message',
  components: {
    SplitPane,
    AppContent
  }
})
export default class extends Vue {
  mounted() {}
}
</script>

<style lang="scss">
.message-wrap {
  height: 100vh;
}
</style>
