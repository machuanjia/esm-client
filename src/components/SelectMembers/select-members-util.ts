export const selectMembersDialogKey = "SelectMembersDialogKey";
export const setSelectMemberDialogVisible = (isVisible: boolean) => {
  localStorage.removeItem(selectMembersDialogKey);
  localStorage.setItem(selectMembersDialogKey, isVisible.toString());
};
export const getSelectMemberDialogVisible = () => {
  const ss = localStorage.getItem(selectMembersDialogKey)
  debugger
  return localStorage.getItem(selectMembersDialogKey);
};
