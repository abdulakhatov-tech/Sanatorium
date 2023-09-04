import { Wrapper } from './style';

const Card = ({ title, image, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Wrapper.Title>{title}</Wrapper.Title>
      <Wrapper.Icon src={image} alt={title} loading="lazy" />
    </Wrapper>
  );
};

export default Card;
