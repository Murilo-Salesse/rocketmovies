import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 6px;

  svg {
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.PINK_900};
    font-size: 13px;
    margin-bottom: 5px;
  }
`;
