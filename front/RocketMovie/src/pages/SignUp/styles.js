import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > div {
    width: 480px;

    padding: 10px 0;
    margin-bottom: 20px;
  }

  > a {
    width: 300px;
    padding: 30px;

    text-transform: uppercase;
  }

  > h1 {
    margin-top: 100px;
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_900};
  }

  > h2 {
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.GRAY_800};
    margin: 24px;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WGHITE};
  }

  > .redirect {
    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      margin-top: 20px;
      color: ${({ theme }) => theme.COLORS.PINK_900};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
