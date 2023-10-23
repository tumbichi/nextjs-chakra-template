import dayjs from "dayjs";
import "dayjs/locale/es";

const formatDatetime = (date: Date) => {
  const formattedDate = dayjs(date).format("DD/MM/YYYY HH:mm");
  return formattedDate;
};

export default formatDatetime;
