import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { Button, DatePicker, Form, Input, InputNumber, Modal } from 'antd';

import { setEditBookedModalVisibility } from '../../../../../store/modalSlice';
import { useTranslation } from '../../../../../hooks';
import { useUpdateUser } from '../../../../../hooks/useQueryActions';
import { useBuildingDetector, useMessageAPI } from '../../../../../tools';
import useGetQueryDataHandler from '../../../../../hooks/useGetQueryData';
import { ModalButtonsWrapper } from '../../../../../tools/styles';

const { RangePicker } = DatePicker;

const EditBookedModal = ({ id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { mutate } = useUpdateUser();
  const { selectedUser } = useSelector((state) => state.user);
  const { editBookedModalVisibility } = useSelector((state) => state.modal);
  const { openNotificationWithIcon, contextHolder } = useMessageAPI();
  const { decodeBuilding } = useBuildingDetector();

  const userData = useGetQueryDataHandler({
    queryKey: `booked-user/${id}`,
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
        label={t('information_about_user.observing_user.pre_paid')}
        name={'prePaid'}
        rules={[
          {
            required: true,
            message: t('information_about_user.observing_user.pre_paid'),
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.observing_user.building_number')}
        name={'buildingNumber'}
        rules={[
          {
            required: true,
            message: t('information_about_user.observing_user.pre_paid'),
          },
        ]}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        label={t('information_about_user.observing_user.room_number')}
        name={'roomNumber'}
        rules={[
          {
            required: true,
            message: t('information_about_user.observing_user.room_number'),
          },
        ]}
      >
        <Input disabled />
      </Form.Item>

      <ModalButtonsWrapper>
        <Button onClick={() => dispatch(setEditBookedModalVisibility())}>
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
      arrivalDate: new Date(e.range[0].$d).getTime(),
      endDate: new Date(e.range[1].$d).getTime(),
    };
    delete updatedUserData.range;

    mutate({ body: updatedUserData });
  };

  // ===========================  RENDER =================================
  return (
    <Modal
      open={editBookedModalVisibility}
      onCancel={() => dispatch(setEditBookedModalVisibility())}
      footer={false}
    >
      <p>Hello</p>
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
          range: [
            dayjs(Number(userData?.arrivalDate)),
            dayjs(Number(userData?.endDate)),
          ],
          phoneNumber: userData?.phoneNumber,
          address: userData?.address,
          prePaid: userData?.prePaid,
          buildingNumber: decodeBuilding(userData?.buildingNumber).label,
          roomNumber: userData?.roomNumber,
        }}
        onFinish={formSubmit}
      >
        {formItems()}
      </Form>
    </Modal>
  );
};

export default EditBookedModal;
