import { Tooltip } from 'antd';

const TooltipAPI = ({ title, color, children }) => {
  return (
    <Tooltip title={title} color={color}>
      {children}
    </Tooltip>
  );
};

export default TooltipAPI;
