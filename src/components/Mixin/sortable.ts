import { Component, Vue } from "vue-property-decorator";
import Sortable from "sortablejs";

@Component({
  name: "SortableMixin"
})
export default class extends Vue {
  public sortable: Sortable | null = null;

  public setSort(list: any[], callBack: any) {
    const el = (this.$refs.draggableTable as Vue).$el.querySelectorAll(
      ".el-table__body-wrapper > table > tbody"
    )[0] as HTMLElement;
    this.sortable = Sortable.create(el, {
      ghostClass: "sortable-ghost", // Class name for the drop placeholder
      onEnd: evt => {
        if (
          typeof evt.oldIndex !== "undefined" &&
          typeof evt.newIndex !== "undefined"
        ) {
          const targetRow = list.splice(evt.oldIndex, 1)[0];
          list.splice(evt.newIndex, 0, targetRow);
          if (callBack) {
            callBack();
          }
        }
      }
    });
  }
}
