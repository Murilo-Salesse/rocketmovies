import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  height: 100px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Profile = styled.header`
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;

  > h1 {
    font-size: 30px;
    font-weight: 800;
    margin-right: 10px;
    color: ${({ theme }) => theme.COLORS.PINK_900};
  }

  > .infos-wrapper {
    display: flex;
    flex-direction: column;
  }
`;

export const Information = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 20px;

  > div {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;

    > span {
      margin-right: 10px;
    }

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

export const Logout = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  cursor: pointer;

  > span {
    svg {
      font-size: 35px;
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`;
