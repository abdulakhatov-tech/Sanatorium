import { useTranslation } from '../../hooks';

const useBuildingDetector = () => {
  const { t } = useTranslation();

  const ordinaryUserBuildingOptions = [
    {
      label: `2 ${t('building_control_page.building')}`,
      value: 'building/2',
    },
    {
      label: `3 ${t('building_control_page.building')}`,
      value: 'building/3',
    },
    {
      label: `4 ${t('building_control_page.building')}`,
      value: 'building/4',
    },
    {
      label: `5-1 ${t('building_control_page.building')}`,
      value: 'building/5-1',
    },
    {
      label: `5-2 ${t('building_control_page.building')}`,
      value: 'building/5-2',
    },
    {
      label: `6-1 ${t('building_control_page.building')}`,
      value: 'building/6-1',
    },
    {
      label: `6-2 ${t('building_control_page.building')}`,
      value: 'building/6-2',
    },
    {
      label: `6-3 ${t('building_control_page.building')}`,
      value: 'building/6-3',
    },
  ];

  const decodeBuilding = (value) => {
    console.log(value, 'decode');
    switch (value) {
      case 'building/2':
        return {
          label: `2 ${t('building_control_page.building')}`,
          value: 'building/2',
        };
      case 'building-2':
        return {
          label: `2 ${t('building_control_page.building')}`,
          value: 'building/2',
        };
      case 'building/3':
        return {
          label: `3 ${t('building_control_page.building')}`,
          value: 'building/3',
        };
      case 'building-3':
        return {
          label: `3 ${t('building_control_page.building')}`,
          value: 'building/3',
        };
      case 'building/4':
        return {
          label: `4 ${t('building_control_page.building')}`,
          value: 'building/4',
        };
      case 'building-4':
        return {
          label: `4 ${t('building_control_page.building')}`,
          value: 'building/4',
        };
      case 'building/5-1':
        return {
          label: `5 - 1 ${t('building_control_page.building')}`,
          value: 'building/5-1',
        };
      case 'building/5-2':
        return {
          label: `5 - 2 ${t('building_control_page.building')}`,
          value: 'building/5-2',
        };
      case 'building/6-1':
        return {
          label: `6 - 1 ${t('building_control_page.building')}`,
          value: 'building/6-1',
        };
      case 'building/6-2':
        return {
          label: `6 - 2 ${t('building_control_page.building')}`,
          value: 'building/6-2',
        };
      case 'building/6-3':
        return {
          label: `6 - 3 ${t('building_control_page.building')}`,
          value: 'building/6-3',
        };
      default:
        return 'Not provided any value!';
    }
  };

  return { ordinaryUserBuildingOptions, decodeBuilding };
};

export default useBuildingDetector;
