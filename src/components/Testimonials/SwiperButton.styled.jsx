import styled from '@emotion/styled';
import { colors, transition } from 'styles/common/vars';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 72px;

  padding: 21px;

  border-radius: 50%;
  border: none;
  color: ${colors.primaryWhite};
  background-color: ${colors.primaryBlack};

  transition: background-color ${transition.duration};

  &:disabled {
    pointer-events: none;
    background-color: ${colors.whiteGray};
  }

  &:hover,
  &:focus {
    background-color: ${colors.descriptionGray};
  }
`;
