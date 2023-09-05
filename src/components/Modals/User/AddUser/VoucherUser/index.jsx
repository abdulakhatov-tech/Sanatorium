import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker, Form, Input, InputNumber, Select } from 'antd';

import { Button } from '../../../../../generic';
import { useTranslation } from '../../../../../hooks';
import { useBuildingDetector } from '../../../../../tools';
import { useAddUser } from '../../../../../hooks/useQueryActions';
import { ModalButtonsWrapper } from '../../../../../tools/styles';
import { setAddUserModalVisibility } from '../../../../../store/modalSlice';

const { RangePicker } = DatePicker;

const VoucherUser = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { mutate } = useAddUser();
  const { selectedUser } = useSelector((state) => state.user);
  const { ordinaryUserBuildingOptions } = useBuildingDetector();
  const [loading, setLoading] = useState(false);

  // ===========================  FORM SUBMIT =================================
  const onFinish = (e) => {
    setLoading(true);
    const shouldAddData = {
      ...e,
      birthDate: new Date(e.birthDate.$d).getTime(),
      arrivalDate: new Date(e.range[0].$d).getTime(),
      endDate: new Date(e.range[1].$d).getTime(),
      clienteID: selectedUser?.clienteValue?.clienteID,
      hasVoucher: true,
      roomID: selectedUser?.roomValue?._id,
    };
    delete shouldAddData.range;

    mutate({ body: shouldAddData });

    setTimeout(() => {
      dispatch(setAddUserModalVisibility());
      setLoading(false);
    }, 2000);
  };

  // ===========================  FORM ITEMS =================================
  const formItems = () => (
    <>
      <Form.Item
        label={t('information_about_user.edit_user.full_name')}
        name="fullName"
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
        name="birthDate"
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
        name="passportID"
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
        name="address"
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
        name="phoneNumber"
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
        name="range"
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
        label={t('information_about_user.add_user.voucher_cost')}
        name="voucherCost"
        rules={[
          {
            required: true,
            message: t('information_about_user.add_user.voucher_cost_error'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.add_user.voucher_number')}
        name="voucherNumber"
        rules={[
          {
            required: true,
            message: t('information_about_user.add_user.voucher_number_error'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.add_user.work_place')}
        name="workPlace"
        rules={[
          {
            required: true,
            message: t('information_about_user.add_user.work_place_error'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.add_user.voucher_organization')}
        name="voucherOrganization"
        rules={[
          {
            required: true,
            message: t(
              'information_about_user.add_user.voucher_organization_error'
            ),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.edit_user.building_number')}
        name={'buildingNumber'}
        rules={[{ required: true }]}
      >
        <Select disabled options={ordinaryUserBuildingOptions} />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.edit_user.room_number')}
        name={'roomNumber'}
        rules={[{ required: true }]}
      >
        <Input disabled />
      </Form.Item>

      <ModalButtonsWrapper>
        <Button
          disabled={loading}
          onClick={() => dispatch(setAddUserModalVisibility())}
        >
          {t('generic.cancel')}
        </Button>
        <Button type="primary" htmlType="submit" loading={loading}>
          {t('generic.add')}
        </Button>
      </ModalButtonsWrapper>
    </>
  );

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
        initialValues={{
          buildingNumber: `building/${selectedUser?.buildingMutation}`,
          roomNumber: selectedUser?.roomValue?.roomNumber,
        }}
        onFinish={onFinish}
      >
        {formItems()}
      </Form>
    </>
  );
};

export default VoucherUser;
