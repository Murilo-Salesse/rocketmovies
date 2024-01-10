import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.PINK_800};

    display: flex;
    align-items: center;
    padding: 0 124px;

    a {
      color: ${({ theme }) => theme.COLORS.PINK_900};
      display: flex;
      align-items: center;

      gap: 8px;
      font-size: 16px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_900};
      font-size: 20px;
    }
  }
`;

export const Form = styled.form`
  max-width: 300px;
  margin: 30px auto 0;

  > div {
    width: 350px;
    margin-bottom: 10px;
  }

  > div:nth-child(4) {
    margin-top: 24px;
  }

  > a {
    width: 350px;
    margin: 0 auto;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -100px 90px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK_900};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0px;
    right: 175px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.GRAY_900};
    }
  }
`;
