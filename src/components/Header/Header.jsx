import PageLogo from 'components/Global/PageLogo';
import {
  ArrowIcon,
  DropMenuButton,
  HeaderAnchorLink,
  HeaderInnerWrapper,
  LogoWrapper,
  PageHeader,
} from './Header.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Container } from 'components/Global/Container.styled';
import HeaderNav from './HeaderNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <PageHeader className={isMenuOpen ? 'is-open' : ''}>
      <Container>
        <HeaderInnerWrapper>
          <LogoWrapper>
            <PageLogo />
            <DropMenuButton type="button" onClick={toggleMenu}>
              <GiHamburgerMenu size={24} />
            </DropMenuButton>
          </LogoWrapper>
          <HeaderNav />
          <HeaderAnchorLink href="#address">
            <span>Зв'язатись з нами</span>
            <ArrowIcon />
          </HeaderAnchorLink>
        </HeaderInnerWrapper>
      </Container>
    </PageHeader>
  );
};

export default Header;
