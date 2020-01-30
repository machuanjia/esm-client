import { Component, Vue } from "vue-property-decorator";
import { dialogSize, drawerSize } from "@/constant/common";

@Component({
  name: "CollectionMixin"
})
export default class extends Vue {
  public ruleForm: any = {};
  public rules: any = {};
  submitForm(formName: any) {
    const form: any = this.$refs[formName];
    form.validate((valid: any) => {
      if (valid) {
        this.$emit("saveAction", this.ruleForm);
      }
    });
  }
  cancelForm(formName: any) {
    this.$emit("cancelAction");
  }
}
