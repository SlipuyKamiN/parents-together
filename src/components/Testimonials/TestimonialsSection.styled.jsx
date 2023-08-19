import styled from '@emotion/styled';
import testimonialBg from 'images/testimonials-background.png';
import testimonialsBgImage from 'images/testimonials-background-image.png';
import testimonialsBgImageRetina from 'images/testimonials-background-image@2x.png';
import { BenefitItem } from 'components/AboutUs/AboutUsSection.styled';
import { colors } from 'styles/common/vars';

export const Section = styled.section`
  padding: 60px 5px;
  background-image: url(${testimonialBg}), url(${testimonialsBgImage});
  background-size: cover, 45%;
  background-position: top left, top right;
  background-repeat: no-repeat, no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${testimonialBg}), url(${testimonialsBgImageRetina});
  }

  @media screen and (min-width: 1280px) {
    padding: 247px 0 193px;
    background-size: 100%, 888px;
    background-position: top, top right;
  }
`;

export const SectionTextWrapper = styled.div`
  max-width: 505px;
`;

export const FeedbackList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 40px;
  gap: 20px;
`;

export const FeedbackItem = styled(BenefitItem)`
  min-height: 380px;
`;

export const AuthorDataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  margin-bottom: 25px;

  img {
    width: 63px;
    height: 63px;
  }

  h3 {
    margin-bottom: 7px;

    font-size: 20px;
    font-weight: 600;

    color: #000;
  }

  svg {
    color: ${colors.accentPurple};
  }
`;

export const FeedbackStarsList = styled.ul`
  display: flex;
  gap: 4px;
`;

export const FeedbackComment = styled.p`
  color: ${colors.descriptionGray};
`;

export const SwiperButtonsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
`;
