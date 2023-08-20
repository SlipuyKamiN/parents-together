import styled from '@emotion/styled';
import { Button } from 'components/Testimonials/SwiperButton.styled';
import { colors } from 'styles/common/vars';

export const MapList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  margin-bottom: 67px;

  max-width: 300px;

  font-size: 16px;

  li {
    flex-grow: 1;
  }

  a:hover,
  a:focus {
    color: ${colors.accentPurple};
  }
`;

export const SubscribeForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  width: 100%;
`;

export const SubscribeInput = styled.input`
  width: 313px;

  padding: 25px;

  line-height: 22px;

  border: 1px solid ${colors.primaryBlack};
  border-radius: 50px;

  background-color: transparent;
`;

export const SubmitButton = styled(Button)`
  color: ${colors.primaryBlack};
  background-color: ${colors.backgroundPurple};

  &:hover,
  &:focus {
    background-color: ${colors.accentPurple};
  }
`;
