import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 480px;

  margin: 0 auto;
  padding: 0 15px;

  /* outline: 1px solid tomato; */

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 24px;
  }
`;
