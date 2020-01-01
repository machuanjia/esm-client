<template>
  <div class="">
    roles
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Form as ElForm, Input } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { isValidUsername } from '@/utils/validate'
import { Dictionary } from 'vue-router/types/router'

@Component({
  name: 'roles',
  components: {
  }
})
export default class extends Vue {
  @Watch('$route', { immediate: true })
  private onRouteChange(route: Route) {
    // const query = route.query as Dictionary<string>
    // if (query) {
    //   this.redirect = query.redirect
    //   this.otherQuery = this.getOtherQuery(query)
    // }
  }

  mounted() {

  }
}
</script>

<style lang="scss">
</style>
