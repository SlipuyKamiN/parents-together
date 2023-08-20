import styled from '@emotion/styled';
import { BenefitItem } from 'components/AboutUs/BenefitItem.styled';
import { colors } from 'styles/common/vars';

export const FeedbackItem = styled(BenefitItem)`
  display: flex;
  align-items: center;
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
