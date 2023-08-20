import styled from '@emotion/styled';
import aboutUsBgImage from 'images/about-us-background.png';

export const Section = styled.section`
  margin-top: -160px;

  background-image: url(${aboutUsBgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 1280px) {
    padding: 130px 0 190px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const AboutUsTopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 60px;
  gap: 20px;

  div {
    max-width: 582px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 34px;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    font-size: 44px;
  }
`;

export const BenefitsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
