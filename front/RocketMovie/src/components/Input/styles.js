import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 500px;

  border-radius: 0.5rem;

  background: ${({ theme }) => theme.COLORS.GRAY_900};

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
    margin-left: 10px;
  }

  > input {
    width: 500px;
    height: 40px;

    outline: none;
    border: none;

    background: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE};

    padding-left: 1.6rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2.1rem;
  }

  &&::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
`;
