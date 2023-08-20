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

export const HeroBottomWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ParentsInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  width: 456px;

  margin-top: 66px;
`;

export const ParentsImagesList = styled.ul`
  display: flex;

  li {
    width: 98px;
  }

  li:not(:first-of-type) {
    margin-left: -25px;
  }
`;

export const ParentsQuantity = styled.span`
  font-size: 24px;
  font-weight: 700;

  color: ${colors.accentPurple};
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
