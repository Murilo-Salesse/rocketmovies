import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PINK_900};
  color: ${({ theme }) => theme.COLORS.PINK_800};

  height: 40px;
  border: 0;
  padding: 0 16px;
  margin: 16px;
  border-radius: 5px;
  font-weight: 500;
`;
