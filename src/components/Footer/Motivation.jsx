import PageLogo from 'components/Global/PageLogo';
import { FooterBlock } from './Footer.styled';
import {
  FooterLogo,
  LowerDescription,
  UpperDescription,
} from './Motivation.styled';

const MotivationBlock = () => {
  return (
    <FooterBlock>
      <UpperDescription>
        батьки разом - сучасна колоборативні мережа батьків
      </UpperDescription>
      <FooterLogo>
        <PageLogo />
      </FooterLogo>
      <LowerDescription>
        створімо спільні ініціативи для наших дітей!
      </LowerDescription>
    </FooterBlock>
  );
};

export default MotivationBlock;
