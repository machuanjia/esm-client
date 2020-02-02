import moment from "moment";
import * as _ from "lodash";

export const dateFull = (date: number) => {
  return moment(date * 1000).format("YYYY-mm-DD");
};

export const membersName = (members: []) => {
  if (members) {
    return _.map(members, "name").join();
  }
  return "";
};
