import dayjs from "dayjs";
import "dayjs/locale/es";

const formatDate = (date: Date) => {
  const formattedDate = dayjs(date).format("DD/MM/YYYY");
  return formattedDate;
};

export default formatDate;
