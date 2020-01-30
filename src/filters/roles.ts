import * as _ from "lodash";
export const rolesPermissions = (permissions: any) => {
  if (!permissions) {
    return "";
  }
  return _.map(permissions, "name").join();
};
