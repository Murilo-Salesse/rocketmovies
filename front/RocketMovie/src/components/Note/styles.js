import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border: none;
  border-radius: 5px;

  padding: 22px;
  margin-bottom: 16px;

  > h3 {
    text-align: left;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    text-align: justify;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  > footer {
    width: 100%;

    display: flex;
    margin-top: 24px;
  }
`;
