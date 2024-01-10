import styled from 'styled-components';

export const Container = styled.textarea`
  width: 860px;
  margin-top: 30px;
  height: 150px;

  outline: none;

  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 5px;

  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
`;
