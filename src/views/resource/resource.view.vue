<template>
  <app-content>
    <template v-slot:body>
      sss
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
  name: 'resource',
  components: {
    AppContent
  }
})
export default class extends Vue {
  private searchText = ''

  private rolesData = [{
    id: 1,
    description: '新购人员100',
    status: '1',
    name: '新购人员'
  }, {
    id: 2,
    description: '新购插件钉钉',
    status: '0',
    name: '新购插件'
  }]

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
