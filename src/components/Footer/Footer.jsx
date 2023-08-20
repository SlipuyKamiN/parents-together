import { Container } from 'components/Global/Container.styled';
import {
  BlockTitle,
  ContactsList,
  FooterBlock,
  FooterInnerWrapper,
  FooterLogo,
  FooterSection,
  MapList,
  MotivationDescription,
  SocialItem,
  SocialLink,
  SocialsList,
  SubmitButton,
  SubscribeForm,
  SubscribeInput,
} from './Footer.styled';
import { FaArrowRight } from 'react-icons/fa';
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoTelegram,
} from 'react-icons/bi';
import PageLogo from 'components/Global/PageLogo';

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterInnerWrapper>
          <FooterBlock>
            <div>
              <BlockTitle>Карта сайту</BlockTitle>
              <MapList>
                <li>
                  <a href="#join-us">Користувачам</a>
                </li>
                <li>
                  <a href="#why-we">Як це працює</a>
                </li>
                <li>
                  <a href="#about-us">Про нас</a>
                </li>
                <li>
                  <a href="#testimonials">Відгуки</a>
                </li>
              </MapList>
            </div>
            <div>
              <BlockTitle>Розсилка наших новин</BlockTitle>
              <SubscribeForm autoComplete="off">
                <SubscribeInput
                  type="text"
                  placeholder="andrijkivbogdana@gmail.com"
                />
                <SubmitButton type="submit">
                  <FaArrowRight size={25} />
                </SubmitButton>
              </SubscribeForm>
            </div>
          </FooterBlock>
          <FooterBlock>
            <MotivationDescription>
              батьки разом - сучасна колоборативні мережа батьків
            </MotivationDescription>
            <FooterLogo>
              <PageLogo />
            </FooterLogo>
            <MotivationDescription>
              створімо спільні ініціативи для наших дітей!
            </MotivationDescription>
          </FooterBlock>
          <FooterBlock>
            <address id="address">
              <BlockTitle>Контакти</BlockTitle>
              <ContactsList>
                <li>
                  <a href="tel:+380962722100">UA: +3 8096 272 2100</a>
                </li>
                <li>
                  <a
                    href="https://www.halo-lab.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    www.halo-lab.com
                  </a>
                </li>
                <li>
                  <a href="mailto:mail@halo-lab.com">mail@halo-lab.com</a>
                </li>
                <li>
                  <a
                    href="https://goo.gl/maps/5AdUtNmhmynsaZdi6"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Ukraine, Odessa
                  </a>
                </li>
              </ContactsList>
              <SocialsList>
                <SocialItem>
                  <SocialLink
                    target="_blank"
                    rel="noopener norefferer"
                    href="https://www.facebook.com/"
                  >
                    <BiLogoFacebook size={22} />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink
                    target="_blank"
                    rel="noopener norefferer"
                    href="https://www.linkedin.com/"
                  >
                    <BiLogoLinkedin size={22} />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink
                    target="_blank"
                    rel="noopener norefferer"
                    href="https://www.instagram.com/"
                  >
                    <BiLogoInstagram size={22} />
                  </SocialLink>
                </SocialItem>
                <SocialItem>
                  <SocialLink
                    target="_blank"
                    rel="noopener norefferer"
                    href="https://web.telegram.org/"
                  >
                    <BiLogoTelegram size={22} />
                  </SocialLink>
                </SocialItem>
              </SocialsList>
            </address>
          </FooterBlock>
        </FooterInnerWrapper>
      </Container>
    </FooterSection>
  );
};

export default Footer;
