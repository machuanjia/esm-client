import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";

export interface ISelectMembersState {
  isVisible: boolean;
}

@Module({ dynamic: true, store, name: "selectMembers" })
class SelectMembers extends VuexModule implements ISelectMembersState {
  public isVisible = false;

  @Mutation
  private SET_VISIBLE(visible: boolean) {
    this.isVisible = visible;
  }

  @Action
  public setSelectMembersDialogVisible(visible: boolean) {
    this.SET_VISIBLE(visible);
  }
}

export const SelectMembersModule = getModule(SelectMembers);
