import styled from '@emotion/styled';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { colors, transition } from 'styles/common/vars';

export const PageHeader = styled.header`
  width: 100%;
  height: 100px;
  padding: 22px 15px;

  overflow: hidden;

  &.is-open {
    height: 223px;
  }

  @media screen and (min-width: 1280px) {
    padding: 22px 0;

    height: 123px;
  }
`;

export const HeaderInnerWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropMenuButton = styled.button`
  width: 37px;
  height: 37px;
  padding: 6px;

  border-radius: 50%;
  border: none;

  background-color: ${colors.accentPurple};
  transition: background-color ${transition.duration};

  @media screen and (min-width: 1280px) {
    display: none;
  }

  &:hover,
  &:focus {
    background-color: ${colors.hoverGray};
  }
`;

export const HeaderAnchorLink = styled.a`
  display: flex;
  align-items: center;
  max-width: 251px;
  gap: 10px;

  margin: 0 auto;
  padding: 10px 20px;

  letter-spacing: 0.24px;

  border: 1px solid ${colors.primaryBlack};
  border-radius: 30px;

  &:hover svg,
  &:focus svg {
    transform: rotate(180deg);
    background-color: ${colors.hoverGray};
  }

  @media screen and (min-width: 1280px) {
    margin: 0;
  }
`;

export const ArrowIcon = styled(HiOutlineArrowDown)`
  flex-shrink: 0;
  width: 37px;
  height: 37px;
  padding: 7px;

  border-radius: 50%;

  background-color: ${colors.accentPurple};
  transition: transform ${transition.duration},
    background-color ${transition.duration};
`;
