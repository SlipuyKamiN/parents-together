import MainButton from 'components/Global/MainButton';
import {
  HeroBottomWrapper,
  HeroDescription,
  HeroDownLink,
  HeroTextWrapper,
  HeroTitle,
  ParentsImagesList,
  ParentsInfoWrapper,
  ParentsQuantity,
  Section,
} from './HeroSection.styled';
import parentAvatarPath from 'images/parents-rounded-1.png';
import parentAvatarPath2 from 'images/parents-rounded-2.png';
import { FaArrowDown } from 'react-icons/fa';
import { Container } from 'components/Global/Container.styled';

const Hero = () => {
  return (
    <Container>
      <Section>
        <HeroTextWrapper>
          <HeroTitle>Вітаємо у "Батьки разом"</HeroTitle>
          <div>
            <HeroDescription>
              ми колаборативна мережа для успішного старту у шкільне життя!
            </HeroDescription>
            <p>
              Приєднуйтесь зараз щоб створювати спільні ініціативи для наших
              дітей разом!
            </p>
          </div>
        </HeroTextWrapper>
        <HeroBottomWrapper>
          <MainButton innerText={'Приєднатися зараз'} />
          <ParentsInfoWrapper>
            <ParentsImagesList>
              <li>
                <img src={parentAvatarPath} alt="parent-avatar" width={98} />
              </li>
              <li>
                <img src={parentAvatarPath2} alt="parent-avatar" width={98} />
              </li>
            </ParentsImagesList>
            <p>
              <ParentsQuantity>200,000 + </ParentsQuantity>
              задоволених батьків, у нашій спільноті
            </p>
          </ParentsInfoWrapper>
        </HeroBottomWrapper>
        <HeroDownLink href="#about-us">
          <FaArrowDown size={32} />
        </HeroDownLink>
      </Section>
    </Container>
  );
};

export default Hero;
