import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

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
