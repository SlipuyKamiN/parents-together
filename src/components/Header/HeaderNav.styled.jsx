import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const HeaderNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 40px;
`;

export const NavLink = styled.a`
  display: block;
  padding: 20px 0;

  font-size: 16px;

  transition: color ${transition.duration};

  &:hover,
  &:focus {
    color: ${colors.accentPurple};
  }
`;
