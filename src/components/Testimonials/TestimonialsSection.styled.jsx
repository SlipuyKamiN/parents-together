import styled from '@emotion/styled';
import testimonialBg from 'images/testimonials-background.png';
import testimonialsBgImage from 'images/testimonials-background-image.png';
import testimonialsBgImageRetina from 'images/testimonials-background-image@2x.png';

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
