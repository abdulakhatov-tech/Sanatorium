import dayjs from 'dayjs';
import { Button, Input } from 'antd';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import { UsersTable } from './style';

const Table = ({ data }) => {
  const { t } = useTranslation();
  const searchInput = useRef(null);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const changed = data.map(
    (value) =>
      value && {
        ...value,
        arrivalDate: `${dayjs(value.arrivalDate).$D}.${
          dayjs(value.arrivalDate).$M + 1
        }.${dayjs(value.arrivalDate).$y}`,
        endDate: `${dayjs(value.endDate).$D}.${dayjs(value.endDate).$M + 1}.${
          dayjs(value.endDate).$y
        }`,
        leftDay: 10,
      }
  );

  const columns = [
    {
      title: t('users_table.full_name'),
      dataIndex: 'fullName',
      key: 'fullName',
      ...getColumnSearchProps('fullName'),
    },
    {
      title: t('users_table.phone_number'),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      ...getColumnSearchProps('phoneNumber'),
    },
    {
      title: t('users_table.arrived_date'),
      dataIndex: 'arrivalDate',
      key: 'arrivalDate',
    },
    {
      title: t('users_table.end_date'),
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: t('users_table.left_day'),
      dataIndex: 'leftDay',
      key: 'leftDay',
    },
    {
      title: t('users_table.total_pay'),
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: t('users_table.pay_by_cash'),
      dataIndex: 'paidByCash',
      key: 'paidByCash',
    },
    {
      title: t('users_table.pay_by_card'),
      dataIndex: 'paidByPlasticCard',
      key: 'paidByPlasticCard',
    },
    {
      title: t('users_table.pay_difference'),
      dataIndex: 'payDifference',
      key: 'payDifference',
    },
    {
      title: t('users_table.pay_building'),
      dataIndex: 'buildingNumber',
      key: 'buildingNumber',
    },
    {
      title: t('users_table.room'),
      dataIndex: 'roomNumber',
      key: 'roomNumber',
    },
    {
      title: t('users_table.action'),
      dataIndex: 'action',
      key: 'action',
      render: () => <Button type="primary">{t('users_table.go_to')}</Button>,
    },
  ];

  return <UsersTable columns={columns} dataSource={changed} />;
};

export default Table;
