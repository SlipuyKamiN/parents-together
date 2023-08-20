import styled from '@emotion/styled';

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 25px;
`;

export const HeroTitle = styled.h1`
  max-width: 611px;

  text-transform: uppercase;
  font-size: 33px;
  font-weight: 600;
  line-height: 1.1;

  @media screen and (min-width: 1280px) {
    font-size: 70px;
    flex-shrink: 0;
  }
`;

export const HeroDescription = styled.p`
  font-size: 22px;
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 4px;

  &,
  & + p {
    max-width: 505px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;
