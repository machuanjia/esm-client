<template>
  <app-content-full
    :is-hleft="true"
    :is-hright="true"
    :is-hcenter="true"
  >
    <template v-slot:hleft>
      <span class="app-content-full-title">
        <svg-icon name="recent" />
        <span class="ml5">{{ $t('route.recent') }}</span>
      </span>
    </template>
    <template v-slot:hcenter />
    <template v-slot:hright />

    <template v-slot:body>
      <app-content :body-class="'app-content-body-transparent'">
        <template v-slot:body>
          <recent-card />
        </template>
      </app-content>
    </template>
  </app-content-full>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';
import AppContentFull from '@/components/Content/content-full.vue';
import RecentCard from '@/views/inoutboard/recent/recent.card.vue';

@Component({
  name: 'recent',
  components: {
    AppContentFull,
    AppContent,
    RecentCard
  }
})
export default class extends Vue {
  mounted() {}
}
</script>

<style lang="scss">
</style>
