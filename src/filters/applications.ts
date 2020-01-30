const applicationsMap: any = {
  0: "自定义",
  1: "系统"
};
export const appliationsType = (type: number) => {
  return applicationsMap[type];
};
