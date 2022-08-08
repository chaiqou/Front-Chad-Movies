import moment from "moment";

export function convertTimestamp() {
  let timestamp = Number(new Date());
  let date = new Date(timestamp);
  let formatedDate = moment(date).fromNow();
  return formatedDate;
}
