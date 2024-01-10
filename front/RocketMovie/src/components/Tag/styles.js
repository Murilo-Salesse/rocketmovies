import styled from 'styled-components';

export const Container = styled.span`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.PINK_800};

  margin-right: 10px;
  padding: 5px 14px;
  border-radius: 4px;
`;
