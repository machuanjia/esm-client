<template>
  <el-radio-group
    v-model="value"
    size="small"
    @change="handleSetLanguage"
  >
    <el-radio-button label="zh">
      中文
    </el-radio-button>
    <el-radio-button label="en">
      English
    </el-radio-button>
    <el-radio-button label="es">
      Español
    </el-radio-button>
    <el-radio-button label="ja">
      日语
    </el-radio-button>
  </el-radio-group>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'

@Component({
  name: 'Login'
})
export default class extends Vue {
  private value = ''

  get language() {
    return AppModule.language
  }

  private handleSetLanguage(lang: string) {
    this.$i18n.locale = lang
    AppModule.SetLanguage(lang)
    this.$message({
      message: 'Switch Language Success',
      type: 'success'
    })
  }
}
</script>
