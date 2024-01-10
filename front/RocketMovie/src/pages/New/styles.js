import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Inputs = styled.div`
  display: flex;
  gap: 40px;

  > div {
    width: 410px;
  }
`;

export const Form = styled.form`
  width: 900px;
  height: 70vh;
  overflow-y: scroll;
  margin: 70px auto;

  > a {
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.PINK_900};
  }

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 24px;
    margin-bottom: 30px;

    > div {
      width: 300px;
      display: flex;
      margin-right: 20px;
    }

    h1 {
      font-size: 36px;
    }
  }

  > .buttons {
    display: grid;

    gap: 10px;
    grid-template-columns: 1fr 1fr;

    > button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK_900};
    }
  }
`;

export const Footer = styled.div`
  width: 860px;

  border-radius: 10px;
  margin-top: 10px;
  padding-bottom: 20px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > .tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    gap: 10px;

    margin-left: 10px;

    padding-top: 20px;
  }
`;
