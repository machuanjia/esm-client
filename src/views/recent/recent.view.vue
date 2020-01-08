<template>
  <div class="">
    <app-content :body-class="'app-content-body-transparent'">
      <template v-slot:body>
        <recent-card />
      </template>
    </app-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Form as ElForm, Input } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { isValidUsername } from '@/utils/validate'
import { Dictionary } from 'vue-router/types/router'
import AppContent from '@/components/Content/index.vue'
import RecentCard from '@/views/recent/recent.card.vue'

@Component({
  name: 'recent',
  components: {
    AppContent,
    RecentCard
  }
})
export default class extends Vue {
  mounted() {

  }
}
</script>

<style lang="scss">
</style>
