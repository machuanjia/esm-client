import moment from "moment";
import * as _ from "lodash";

// 13位时间戳
export const dateFull = (date: number) => {
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
};

export const membersName = (members: []) => {
  if (members) {
    return _.map(members, "name").join();
  }
  return "";
};
