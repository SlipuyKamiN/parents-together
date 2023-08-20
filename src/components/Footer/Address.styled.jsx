import { colors, transition } from 'styles/common/vars';
import { MapList } from './SiteMap.styled';
import styled from '@emotion/styled';

export const ContactsList = styled(MapList)`
  max-width: 334px;
  margin-bottom: 147px;

  font-size: 15px;
  line-height: 1.58;
  letter-spacing: 0.17px;
`;

export const SocialsList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const SocialItem = styled.li`
  width: 56px;
  height: 56px;
  border: 1px solid ${colors.primaryBlack};
  border-radius: 20px;

  overflow: hidden;
`;

export const SocialLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  padding: 16px;

  color: ${colors.accentPurple};
  transition: background-color ${transition.duration};

  &:hover,
  &:focus {
    background-color: ${colors.hoverGray};
  }
`;
