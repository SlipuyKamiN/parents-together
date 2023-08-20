import { HiOutlineArrowRight } from 'react-icons/hi';
import { BlockTitle, FooterBlock } from './Footer.styled';
import {
  MapList,
  SubmitButton,
  SubscribeForm,
  SubscribeInput,
} from './SiteMap.styled';
import { mapLinks } from 'data/footerData';

const SiteMapBlock = () => {
  return (
    <FooterBlock>
      <div>
        <BlockTitle>Карта сайту</BlockTitle>
        <MapList>
          {mapLinks.map(({ href, text }) => (
            <li key={href}>
              <a href={href}>{text}</a>
            </li>
          ))}
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
            <HiOutlineArrowRight size={25} />
          </SubmitButton>
        </SubscribeForm>
      </div>
    </FooterBlock>
  );
};

export default SiteMapBlock;
