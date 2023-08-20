import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

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
