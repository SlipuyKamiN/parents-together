import { Container } from 'components/Global/Container.styled';
import { FooterInnerWrapper, FooterSection } from './Footer.styled';

import SiteMapBlock from './SiteMap';
import MotivationBlock from './Motivation';
import AddressBlock from './Address';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterInnerWrapper>
          <SiteMapBlock />
          <MotivationBlock />
          <AddressBlock />
        </FooterInnerWrapper>
      </Container>
    </FooterSection>
  );
};

export default Footer;
