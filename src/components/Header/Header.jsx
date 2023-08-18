import PageLogo from 'components/Global/PageLogo';
import {
  ArrowIcon,
  DropMenuButton,
  HeaderAnchorLink,
  HeaderNavList,
  LogoWrapper,
  NavLink,
  PageHeader,
} from './Header.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <PageHeader className={isMenuOpen ? 'is-open' : ''}>
      <LogoWrapper>
        <PageLogo />
        <DropMenuButton type="button" onClick={toggleMenu}>
          <GiHamburgerMenu size={24} />
        </DropMenuButton>
      </LogoWrapper>
      <nav>
        <HeaderNavList>
          <li>
            <NavLink href="/">Про нас</NavLink>
          </li>
          <li>
            <NavLink href="/">Як це працює</NavLink>
          </li>
          <li>
            <NavLink href="/">Користувачам</NavLink>
          </li>
        </HeaderNavList>
      </nav>
      <HeaderAnchorLink href="#address">
        <span>Зв'язатись з нами</span>
        <ArrowIcon />
      </HeaderAnchorLink>
    </PageHeader>
  );
};

export default Header;
