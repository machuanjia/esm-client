import { Component, Vue } from "vue-property-decorator";
import { dialogSize, drawerSize } from "@/constant/common";
import * as _ from "lodash";

@Component({
  name: "ViewMixin"
})
export default class extends Vue {
  public searchText = "";

  public entity: any = null;

  private collectionTitle = "新建";

  private collectionVisible = false;

  private collectionSize = dialogSize.md;

  private detailVisible = false;

  private drawerSize = drawerSize.md;

  mounted() {}

  beforeDestroy() {}

  activated() {}

  deactivated() {}

  pushCollection(list: any, entity: {}) {
    if (list && entity) {
      list.push(entity);
    }
  }

  updateCollection(list: any, entity: any) {
    if (list && entity) {
      const index = _.findIndex(list, { id: entity.id });
      if (index > -1) {
        list.splice(index, 1, entity);
      }
    }
  }

  deleteCollection(list: any, entity: any) {
    if (list && entity) {
      _.remove(list, { id: entity.id });
    }
  }

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

  removeCollectionAction(callback: any) {
    this.$confirm("此操作将永久删除该数据, 是否继续?", "删除", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "error"
    })
      .then(() => {
        if (callback) {
          // eslint-disable-next-line standard/no-callback-literal
          callback(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          });
        }
      })
      .catch(() => {});
  }
}
