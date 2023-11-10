import moment from "moment";

export const formatDate = (date, format = "DD MMM YYYY") => {
  return moment(date).format(format);
};
