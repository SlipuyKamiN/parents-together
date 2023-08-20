import {
  ContactsList,
  SocialItem,
  SocialLink,
  SocialsList,
} from './Address.styled';
import { BlockTitle, FooterBlock } from './Footer.styled';
import { contactsLinks, socialsLinks } from 'data/footerData';

const AddressBlock = () => {
  return (
    <FooterBlock>
      <address id="address">
        <BlockTitle>Контакти</BlockTitle>
        <ContactsList>
          {contactsLinks.map(({ href, text }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noreferrer noopener">
                {text}
              </a>
            </li>
          ))}
        </ContactsList>
        <SocialsList>
          {socialsLinks.map(({ href, icon: Icon }) => (
            <SocialItem key={href}>
              <SocialLink target="_blank" rel="noopener norefferer" href={href}>
                <Icon size={22} />
              </SocialLink>
            </SocialItem>
          ))}
        </SocialsList>
      </address>
    </FooterBlock>
  );
};

export default AddressBlock;
