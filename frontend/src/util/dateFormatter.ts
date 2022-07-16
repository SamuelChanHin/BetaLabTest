import moment from "moment";

export const dataFormatConvertor = (data: Date | string) => {
  return moment(data).format("DD MMMM YYYY"); // July 10th 2022, 5:45:57 pm
};
