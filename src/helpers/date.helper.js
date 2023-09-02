import dayjs from 'dayjs';

export const getNumberOfDays = (arg) => {
  const arrivalDate = +arg.arrivalDate;
  const endDate = +arg.endDate;
  const millisecondDiff = endDate - arrivalDate;
  const aDayInMillisecond = 24 * 60 * 60 * 1000;
  const day = Math.round(millisecondDiff / aDayInMillisecond);
  return day;
};

export const leftDays = (date) => dayjs(new Date(+date)).diff(new Date(), 'd');

export const formatDate = (date) => {
  let day = dayjs(date).$D;
  let month = dayjs(date).$M + 1;
  let year = dayjs(date).$y;

  if (day < 9) {
    day = '0' + day;
  } else if (month < 9) {
    month = '0' + month;
  }

  return `${day}.${month}.${year}`;
};
