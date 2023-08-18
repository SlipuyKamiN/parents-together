import styled from '@emotion/styled';
import aboutUsBgImage from 'images/about-us-background.png';
import { colors } from 'styles/common/vars';

export const Section = styled.section`
  margin-top: -160px;
  padding: 0 5px;

  background-image: url(${aboutUsBgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 1232px) {
    padding: 130px 140px 190px;
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

export const AboutUsTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 44px;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const BenefitsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const BenefitItem = styled.li`
  max-width: 397px;
  background-color: ${colors.primaryWhite};
  padding: 35px;
  border-radius: 80px;
`;

export const ItemImage = styled.img`
  margin-bottom: 25px;
`;

export const ItemTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const ItemSubtitle = styled.h4`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
`;
