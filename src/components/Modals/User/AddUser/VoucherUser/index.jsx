import { DatePicker, Form, Input, InputNumber } from 'antd';

import { useTranslation } from '../../../../../hooks';
import { ModalButtonsWrapper } from '../../../../../tools/styles';
import { Button } from '../../../../../generic';
import { useDispatch, useSelector } from 'react-redux';
import { setAddUserModalVisibility } from '../../../../../store/modalSlice';

const { RangePicker } = DatePicker;

const VoucherUser = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.user);

  console.log(selectedUser, '-------');

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
        label={t('information_about_user.edit_user.building_number')}
        name={'buildingNumber'}
      >
        <Input defaultValue={2} disabled />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.edit_user.room_number')}
        name={'roomNumber'}
      >
        <Input />
      </Form.Item>

      <ModalButtonsWrapper>
        <Button onClick={() => dispatch(setAddUserModalVisibility())}>
          {t('generic.cancel')}
        </Button>
        <Button type="primary" htmlType="submit">
          {t('generic.add')}
        </Button>
      </ModalButtonsWrapper>
    </>
  );

  // ===========================  FORM SUBMIT =================================
  const formSubmit = () => {};

  // ===========================  RENDER =================================
  return (
    <>
      {/* {contextHolder} */}
      <Form
        labelCol={{}}
        wrapperCol={{}}
        layout="vertical"
        style={{
          maxWidth: 600,
          paddingTop: 20,
        }}
        onFinish={formSubmit}
      >
        {formItems()}
      </Form>
    </>
  );
};

export default VoucherUser;
