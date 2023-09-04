import { Button as Buttonn } from 'antd';

const Button = (props) => {
  return <Buttonn {...props}>{props.children}</Buttonn>;
};

export default Button;
