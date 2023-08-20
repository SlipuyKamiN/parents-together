import styled from '@emotion/styled';
import { colors } from 'styles/common/vars';

export const FooterSection = styled.footer`
  padding: 83px 0 74px;

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
  padding: 0 20px;

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
