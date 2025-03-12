import dayjs from "dayjs";

export const localizeDate = (date: Date): string => {
  return dayjs().format(`YYYY년 MM월 DD일`);
};
