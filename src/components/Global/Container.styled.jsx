import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 480px;

  margin: 0 auto;

  outline: 1px solid tomato;

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
  }

  @media screen and (min-width: 1232px) {
    width: 1232px;
  }
`;
