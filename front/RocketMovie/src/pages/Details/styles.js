import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 1100px;
  height: 70vh;
  overflow-y: auto;
  margin: 3rem auto;

  > p {
    margin-bottom: 30px;
  }

  .info-time {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    > span {
      margin-right: 8px;
      margin-left: 8px;
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.PINK_900};
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  > p {
    text-align: justify;
    font-size: 15px;
    max-width: 113ch;

    margin-top: 25px;
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  color: white;

  > h1 {
    font-size: 35px;
    margin-right: 20px;
    font-weight: 800;
  }
`;

export const Delete = styled(Link)`
  color: ${({ theme }) => theme.COLORS.PINK_900};
  padding: 10px;
  border-radius: 5px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;

  width: 500px;

  border-radius: 5px;
  border: none;
  outline: none;

  background: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 10px 20px;

  &&::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
`;
