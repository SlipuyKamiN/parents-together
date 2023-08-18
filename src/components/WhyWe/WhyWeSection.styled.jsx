import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const Section = styled.section`
  padding: 5px;
  @media screen and (min-width: 1232px) {
    padding: 34px 0 32px;
  }
`;

export const SectionDescription = styled.p`
  margin-bottom: 60px;
`;

export const AdvantagesList = styled.ul`
  margin-bottom: 60px;
`;

export const AdvantageItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  width: 100%;

  padding: 40px 82px;
  border-radius: 80px;

  border: 4px solid ${colors.accentPurple};

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const ItemTitle = styled.h4`
  margin-bottom: 8px;

  font-size: 24px;
  font-weight: 600;
`;
