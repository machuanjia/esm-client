import { Component, Vue } from "vue-property-decorator";
import { dialogSize, drawerSize } from "@/constant/common";

@Component({
  name: "ViewMixin"
})
export default class extends Vue {
  private searchText = "";

  private entity: any = null;

  private collectionTitle = "新建";

  private collectionVisible = false;

  private collectionSize = dialogSize.md;

  private detailVisible = false;

  private drawerSize = drawerSize.md;

  mounted() {}

  beforeDestroy() {}

  activated() {}

  deactivated() {}

  openCollectionAction() {
    this.collectionTitle = "新建";
    this.collectionVisible = true;
  }

  closeCollectionaction() {
    this.collectionVisible = false;
  }

  editCollectionAction(entity: any) {
    this.entity = entity;
    this.collectionTitle = "编辑";
    this.collectionVisible = true;
  }
  openDetailAction(entity: any) {
    this.entity = entity;
    this.detailVisible = true;
  }

  removeAction(entity: any) {
    this.$confirm("此操作将永久删除该人员, 是否继续?", "删除", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "error"
    })
      .then(() => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      })
      .catch(() => {});
  }
}
