import styled from 'styled-components';

export const Container = styled.span`
  display: flex;

  width: 70px;

  align-items: center;
  gap: 3px;
  margin-bottom: 16px;

  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.PINK_900};

  transition: opacity 0.5s;

  &:hover {
    opacity: 0.4;
  }
`;
