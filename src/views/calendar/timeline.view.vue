<template>
  <app-content>
    <template v-slot:body>
      timeline
    </template>
  </app-content>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Form as ElForm, Input } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { isValidUsername } from '@/utils/validate'
import { Dictionary } from 'vue-router/types/router'
import AppContent from '@/components/Content/index.vue'

@Component({
  name: 'calendar',
  components: {
    AppContent
  }
})
export default class extends Vue {
  mounted() {

  }

  edit(row:any) {

  }
  remove(row:any) {

  }
}
</script>

<style lang="scss">
</style>
