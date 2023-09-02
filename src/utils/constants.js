import { formatDate } from '../helpers/date.helper';

export const userInfo = (data) => [
  {
    title: 'information_about_user.observing_user.full_name',
    content: data?.fullName,
  },
  {
    title: 'information_about_user.observing_user.birth_date',
    content: formatDate(data?.birthDate),
  },
  {
    title: 'information_about_user.observing_user.password_number',
    content: data?.passportID,
  },
  {
    title: 'information_about_user.observing_user.phone_number',
    content: data?.phoneNumber,
  },
  {
    title: 'information_about_user.observing_user.address',
    content: data?.address,
  },
  {
    title: 'information_about_user.observing_user.came_date',
    content: formatDate(data?.arrivalDate),
  },
  {
    title: 'information_about_user.observing_user.end_date',
    content: formatDate(data?.endDate),
  },
  {
    title: 'information_about_user.observing_user.remaining_days',
    content: '12',
  },
  {
    title: 'information_about_user.observing_user.daily_price',
    content: data?.dayCost,
  },
  {
    title: 'information_about_user.observing_user.total_price',
    content: data?.total,
  },
  {
    title: 'information_about_user.observing_user.voucher_status',
    content: data?.hasVoucher ? 'With voucher' : 'Without voucher',
  },
  {
    title: 'information_about_user.observing_user.pay_by_cash',
    content: data?.paidByCash,
  },
  {
    title: 'information_about_user.observing_user.pay_by_card',
    content: data?.paidByPlasticCard,
  },
  {
    title: 'information_about_user.observing_user.payment_difference',
    content: -data?.total,
  },
  {
    title: 'information_about_user.observing_user.building_number',
    content: data?.buildingNumber,
  },
  {
    title: 'information_about_user.observing_user.room_number',
    content: data?.roomNumber,
  },
];
