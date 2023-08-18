import styled from '@emotion/styled';
import { FaArrowRight } from 'react-icons/fa';
import { colors } from 'styles/common/vars';

export const Button = styled.button`
  margin: 0;
  padding: 0;

  display: flex;
  flex-grow: 0;
  align-items: center;
  gap: 10px;

  color: ${colors.whiteGray};
  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    flex-direction: row-reverse;
  }

  &:hover span,
  &:focus span,
  &:hover svg,
  &:focus svg {
    background-color: ${colors.descriptionGray};
  }
`;

export const ButtonTextWrapper = styled.span`
  padding: 25px 47px;

  font-size: 18px;
  font-weight: 600;

  background-color: ${colors.primaryBlack};
  border-radius: 36px;
`;

export const ArrowIcon = styled(FaArrowRight)`
  width: 72px;
  height: 72px;

  padding: 21px;

  border-radius: 50%;

  background-color: ${colors.primaryBlack};
`;
