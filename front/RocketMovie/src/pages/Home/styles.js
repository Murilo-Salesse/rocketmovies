import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    max-width: 1100px;
    margin: 50px auto;
    height: 70vh;
    overflow-y: auto;

    color: black;
    padding: 10px;
    border-radius: 5px;

    > .header-cards {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      > a {
        width: 200px;
      }

      > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 35px;

        font-weight: 800;
      }
    }
  }
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
