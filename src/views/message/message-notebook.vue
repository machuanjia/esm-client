<template>
  <section class="message-main-body">
    <messageNotebookNav />
    <messageNotebookMain :entity="entity" />
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
import messageNotebookNav from '@/views/message/message-notebook-nav.vue';
import messageNotebookMain from '@/views/message/message-notebook-main.vue';

@Component({
  name: 'messageNotebook',
  components: {
    AppContent,
    messageNotebookNav,
    messageNotebookMain
  }
})
export default class extends Vue {
  private entity: any = null;
  mounted() {}
}
</script>

<style lang="scss" scoped>
</style>
