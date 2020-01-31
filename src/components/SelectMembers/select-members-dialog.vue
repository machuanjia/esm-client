<template>
  <el-dialog
    v-if="visible"
    :append-to-body="true"
    :title="'选择人员'"
    :visible.sync="visible"
    :width="collectionSize"
    @close="closeAction"
  >
    {{ visible }}--
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { dialogSize, drawerSize } from '@/constant/common';
import {
  getSelectMemberDialogVisible,
  setSelectMemberDialogVisible
} from './select-members-util';
import { SelectMembersModule } from '@/store/modules/select-members';

@Component({
  name: 'SelectMembersDialog'
})
export default class extends Vue {
  private collectionSize = dialogSize.md;
  private visible = false;

  get isVisible() {
    return SelectMembersModule.isVisible;
  }

  @Watch('isVisible')
  private onVisibleChange(value: any) {
    this.visible = value;
  }

  closeAction() {
    SelectMembersModule.setSelectMembersDialogVisible(false);
  }

  mounted() {}

  beforeDestory() {}
}
</script>
