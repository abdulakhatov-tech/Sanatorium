import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { Button, DatePicker, Form, Input, InputNumber } from 'antd';

import EmptySpace from '../EmptySpace';
import { useMessageAPI } from '../../../../tools';
import { ModalButtonsWrapper } from '../../../../tools/styles';
import { useTranslation, useUpdateUser } from '../../../../hooks';
import { setUserModalVisibility } from '../../../../store/modalSlice';
import useGetQueryDataHandler from '../../../../hooks/useGetQueryData';

const { RangePicker } = DatePicker;

const Edit = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { mutate } = useUpdateUser();
  const { selectedUser } = useSelector((state) => state.user);
  const { openNotificationWithIcon, contextHolder } = useMessageAPI();

  const userData = useGetQueryDataHandler({
    queryKey: `user/${selectedUser?.userID}`,
  });

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
        name={'range'}
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
      <ModalButtonsWrapper>
        <Button onClick={() => dispatch(setUserModalVisibility())}>
          {t('generic.cancel')}
        </Button>
        <Button type="primary" htmlType="submit">
          {t('generic.edit')}
        </Button>
      </ModalButtonsWrapper>
    </>
  );

  // ===========================  FORM SUBMIT =================================
  const formSubmit = (e) => {
    const updatedUserData = {
      ...userData,
      ...e,
      birthDate: new Date(e.birthDate.$d).getTime(),
      arrivalDate: new Date(e.range[0].$d).getTime(),
      endDate: new Date(e.range[1].$d).getTime(),
    };
    delete updatedUserData.range;

    mutate({ body: updatedUserData });
  };

  if (!selectedUser.userID) return <EmptySpace />;

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
          range: [
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
