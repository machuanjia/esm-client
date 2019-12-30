<template>
  <el-radio-group
    v-model="value"
    size="small"
    @change="handleSetSize"
  >
    <el-radio-button label="Default">
      Default
    </el-radio-button>
    <el-radio-button label="Medium">
      Medium
    </el-radio-button>
    <el-radio-button label="Small">
      Small
    </el-radio-button>
    <el-radio-button label="Mini">
      Mini
    </el-radio-button>
  </el-radio-group>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import { TagsViewModule } from '@/store/modules/tags-view'

@Component({
  name: 'SizeSelect'
})
export default class extends Vue {
  private value = 'Medium'

  get size() {
    return AppModule.size
  }

  private handleSetSize() {
    (this as any).$ELEMENT.size = this.value
    AppModule.SetSize(this.value)
    this.refreshView()
    this.$message({
      message: 'Switch Size Success',
      type: 'success'
    })
  }

  private refreshView() {
    // In order to make the cached page re-rendered
    TagsViewModule.delAllCachedViews()
    const { fullPath } = this.$route
    this.$nextTick(() => {
      this.$router.replace({
        path: '/redirect' + fullPath
      })
    })
  }
}
</script>
