// Set utils function parseTime to filter
export { parseTime } from "@/utils";

export * from "./applications";
export * from "./roles";

// Filter for article status
export const articleStatusFilter = (status: string) => {
  const statusMap: { [key: string]: string } = {
    published: "success",
    draft: "info",
    deleted: "danger"
  };
  return statusMap[status];
};

// Filter to uppercase the first character
export const uppercaseFirstChar = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const dataSourceType = (type: number) => {
  const typeMap: any = {
    0: "自定义",
    1: "考勤机",
    2: "钉钉"
  };
  return typeMap[type];
};

export const billType = (type: number) => {
  const typeMap: any = {
    0: {
      label: "未购买",
      type: ""
    },
    1: {
      label: "购买中",
      type: "success"
    },
    2: {
      label: "失败",
      type: "danger"
    },
    3: {
      label: "已完成",
      type: "info"
    }
  };
  return typeMap[type]["type"];
};

export const billTypeLabel = (type: number) => {
  const typeMap: any = {
    0: {
      label: "未购买",
      type: ""
    },
    1: {
      label: "购买中",
      type: "success"
    },
    2: {
      label: "失败",
      type: "danger"
    },
    3: {
      label: "已完成",
      type: "info"
    }
  };
  return typeMap[type]["label"];
};
