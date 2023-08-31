import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  cursor: pointer;
  padding: 30px;
  border-radius: 17px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;

  @media (max-width: 884px) {
    width: 250px;
    gap: 25px;
    padding: 25px;
  }

  @media (max-width: 710px) {
    width: 220px;
    gap: 25px;
    padding: 25px;
    border-radius: 14px;
  }

  @media (max-width: 650px) {
    width: 200px;
    gap: 20px;
    padding: 20px;
  }

  @media (max-width: 550px) {
    width: 180px;
    gap: 15px;
    border-radius: 12px;
  }

  @media (max-width: 500px) {
    width: 160px;
    gap: 13px;
  }

  @media (max-width: 450px) {
    width: 140px;
    gap: 11px;
    border-radius: 10px;
  }

  @media (max-width: 330px) {
    width: 100%;
  }
`;

Wrapper.Title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: rgb(0, 0, 0);
  text-align: center;

  @media (max-width: 884px) {
    font-size: 16px;
  }

  @media (max-width: 650px) {
    font-size: 14px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }

  @media (max-width: 350px) {
    font-size: 10px;
  }
`;

Wrapper.Icon = styled.img`
  width: 133px;
  height: 192px;

  @media (max-width: 884px) {
    width: 110px;
    height: 160px;
  }

  @media (max-width: 710px) {
    width: 100px;
    height: 140px;
  }

  @media (max-width: 650px) {
    width: 85px;
    height: 120px;
  }

  @media (max-width: 550px) {
    width: 70px;
    height: 100px;
  }

  @media (max-width: 500px) {
    width: 63px;
    height: 90px;
  }

  @media (max-width: 350px) {
    @media (max-width: 500px) {
      width: 50px;
      height: 80px;
    }
  }
`;
