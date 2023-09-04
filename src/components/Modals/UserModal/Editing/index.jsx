import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { Button, DatePicker, Form, Input, InputNumber } from 'antd';

import { Btns } from './style';
import { useMessageAPI } from '../../../../tools';
import { useTranslation } from '../../../../hooks';
import { setUserModalVisibility } from '../../../../store/modalSlice';
import useGetQueryDataHandler from '../../../../hooks/useGetQueryData';

const { RangePicker } = DatePicker;

const Edit = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedUser } = useSelector((state) => state.user);
  const { openNotificationWithIcon, contextHolder } = useMessageAPI();

  const userData = useGetQueryDataHandler({
    queryKey: `user/${selectedUser?.userID}`,
  });

  // ===========================  FORM SUBMIT =================================
  const formSubmit = (e) => {
    // mutate(e, {
    //   onSuccess: (res) => {
    //     console.log(res, 'res');
    //     openNotificationWithIcon('success');
    //   },
    // });
  };

  // ===========================  FORM ITEMS =================================
  const formItems = () => (
    <>
      <Form.Item
        label={t('information_about_user.edit_user.full_name')}
        name={'fullName'}
        rules={[
          {
            required: true,
            message: t('information_about_user.edit_user.full_name_error'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.edit_user.birth_date')}
        name={'birthDate'}
        rules={[
          {
            required: true,
            message: t('information_about_user.edit_user.birth_date_error'),
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.edit_user.password_number')}
        name={'passportID'}
        rules={[
          {
            required: true,
            message: t(
              'information_about_user.edit_user.password_number_error'
            ),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.edit_user.phone_number')}
        name={'phoneNumber'}
        rules={[
          {
            required: true,
            message: t('information_about_user.edit_user.phone_number_error'),
          },
        ]}
      >
        <InputNumber style={{ width: '100%' }} type="text" addonBefore="+998" />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.edit_user.address')}
        name={'address'}
        rules={[
          {
            required: true,
            message: t('information_about_user.edit_user.address_error'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.edit_user.range_date')}
        name={'arrivalDate'}
        rules={[
          {
            required: true,
            message: t('information_about_user.edit_user.range_date_error'),
          },
        ]}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.edit_user.daily_price')}
        name={'dayCost'}
        rules={[
          {
            required: true,
            message: t('information_about_user.edit_user.daily_price_error'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.edit_user.pay_by_cash')}
        name={'paidByCash'}
        rules={[
          {
            required: true,
            message: t('information_about_user.edit_user.pay_by_cash_error'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.edit_user.pay_by_card')}
        name={'paidByPlasticCard'}
        rules={[
          {
            required: true,
            message: t('information_about_user.edit_user.pay_by_card_error'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Btns>
        <Button onClick={() => dispatch(setUserModalVisibility())}>
          Cancel
        </Button>
        <Button type="primary" htmlType="submit">
          {t('generic.edit')}
        </Button>
      </Btns>
    </>
  );

  // ===========================  RENDER =================================
  return (
    <>
      {contextHolder}
      <Form
        labelCol={{}}
        wrapperCol={{}}
        layout="vertical"
        style={{
          maxWidth: 600,
          paddingTop: 20,
        }}
        initialValues={{
          fullName: userData?.fullName,
          birthDate: dayjs(Number(userData?.birthDate)),
          arrivalDate: [
            dayjs(Number(userData?.arrivalDate)),
            dayjs(Number(userData?.endDate)),
          ],
          passportID: userData?.passportID,
          phoneNumber: userData?.phoneNumber,
          address: userData?.address,
          dayCost: userData?.dayCost,
          paidByCash: userData?.paidByCash || '0',
          paidByPlasticCard: userData?.paidByPlasticCard || '0',
        }}
        onFinish={formSubmit}
      >
        {formItems()}
      </Form>
    </>
  );
};

export default Edit;
