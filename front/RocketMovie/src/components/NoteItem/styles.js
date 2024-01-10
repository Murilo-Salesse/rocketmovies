import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.COLORS.GRAY_900};

  color: ${({ theme }) => theme.COLORS.GRAY_600};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.GRAY_600}` : 'none'};

  margin-bottom: 8px;
  border-radius: 5px;
  padding-right: 10px;

  > button {
    border: none;
    outline: none;
    background: none;
  }

  .svg {
    color: ${({ theme }) => theme.COLORS.PINK_900};
  }

  > input {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    outline: none;

    height: 40px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`;
