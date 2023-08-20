import styled from '@emotion/styled';
import { Button } from 'components/Testimonials/SwiperButton.styled';
import { colors, transition } from 'styles/common/vars';

export const FooterSection = styled.footer`
  background-color: ${colors.inputBg};

  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
`;

export const FooterInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;

  :not(:last-child) {
    border-bottom: 1px solid ${colors.footerBlockBorder};

    @media screen and (min-width: 1280px) {
      border-bottom: none;
      border-right: 1px solid ${colors.footerBlockBorder};
    }
  }
`;

export const BlockTitle = styled.h3`
  font-size: 32px;
  font-weight: 600;

  margin-bottom: 25px;
`;

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

  border: 1px solid ${colors.primaryBlack};
  border-radius: 50px;

  background-color: transparent;
`;

export const SubmitButton = styled(Button)`
  background-color: ${colors.backgroundPurple};

  &:hover,
  &:focus {
    background-color: ${colors.accentPurple};
  }
`;

// 2

export const FooterLogo = styled.span`
  text-align: center;
`;

export const MotivationDescription = styled.p`
  max-width: 305px;
  font-size: 14px;
  text-align: center;
`;

// 3

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
