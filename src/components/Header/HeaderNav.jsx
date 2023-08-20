import { navLinks } from 'data/headerData';
import { HeaderNavList, NavLink } from './HeaderNav.styled';

const HeaderNav = () => {
  return (
    <nav>
      <HeaderNavList>
        {navLinks.map(({ href, text }) => (
          <li key={href}>
            <NavLink href={href}>{text}</NavLink>
          </li>
        ))}
      </HeaderNavList>
    </nav>
  );
};

export default HeaderNav;
