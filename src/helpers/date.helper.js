export const getNumberOfDays = (arg) => {
  const arrivalDate = +arg.arrivalDate;
  const endDate = +arg.endDate;
  const millisecondDiff = endDate - arrivalDate;
  const aDayInMillisecond = 24 * 60 * 60 * 1000;
  const day = Math.round(millisecondDiff / aDayInMillisecond);
  return day;
};
