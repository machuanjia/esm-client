<template>
  <div class="article-wrap">
    <div class="article-header">
      <div class="article-header-left">
        <el-input
          v-model="ruleForm.title"
          placeholder="请输入名称"
        />
      </div>
      <div class="article-header-right">
        <el-button
          type="primary"
          @click="submitArticleForm()"
        >
          保存
        </el-button>
        <el-button
          class="mr10"
          @click="cancelArticleForm()"
        >
          取消
        </el-button>
      </div>
    </div>
    <div class="article-body">
      <tinymce
        ref="editor"
        v-model="ruleForm.content"
        :height="height"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { Form as ElForm, Input } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { isValidUsername } from '@/utils/validate';
import { Dictionary } from 'vue-router/types/router';
import AppContent from '@/components/Content/index.vue';
import { mixins } from 'vue-class-component';
import CollectionMixin from '@/components/Mixin/collection';
import { getOrganizations } from '@/api/organizations';
import { getRoles } from '@/api/roles';
import Tinymce from '@/components/Tinymce/index.vue';

@Component({
  name: 'articlesCollection',
  components: {
    AppContent,
    Tinymce
  }
})
export default class extends mixins(CollectionMixin) {
  @Prop({ required: true }) private entity!: any;
  private height = document.body.clientHeight - 60;

  created() {
    this.ruleForm = {
      title: '',
      content: ''
    };
  }
  mounted() {
    if (this.entity) {
      this.ruleForm = {
        title: this.entity.title || '',
        content: this.entity.content || ''
      };
    }
  }
  submitArticleForm() {
    if (this.ruleForm.title && this.ruleForm.content) {
      this.$emit('saveAction', this.ruleForm);
    }
  }
  cancelArticleForm() {
    this.$emit('cancelAction');
  }
}
</script>

<style lang="scss">
</style>
