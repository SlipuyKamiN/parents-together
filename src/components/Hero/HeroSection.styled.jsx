import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';
import heroBgImagePath from 'images/hero-background.png';
import heroBgImagePathRetina from 'images/hero-background@2x.png';

export const Section = styled.section`
  padding-top: 55px;
  height: 1057px;

  background-color: ${colors.primaryWhite};
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    url(${heroBgImagePath});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${colors.primaryWhite};
    background-image: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0.5) 100%
      ),
      url(${heroBgImagePathRetina});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${heroBgImagePath});
    background-position: 0 280px;
    background-size: contain;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${heroBgImagePathRetina});
    }
  }
`;

export const HeroDownLink = styled.a`
  display: block;
  width: 90px;
  height: 90px;
  margin: 50% auto 0;
  padding: 30px;

  color: ${colors.primaryWhite};
  background-color: ${colors.accentPurple};
  border-radius: 50%;

  transition: background-color ${transition.duration};
  &:hover,
  &:focus {
    background-color: ${colors.hoverGray};
  }

  @media screen and (min-width: 1280px) {
    margin: 380px auto 0;
  }
`;
