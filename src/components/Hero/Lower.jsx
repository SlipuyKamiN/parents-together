import MainButton from 'components/Global/MainButton';
import {
  HeroBottomWrapper,
  ParentsImagesList,
  ParentsInfoWrapper,
  ParentsQuantity,
} from './Lower.styled';
import parentAvatarPath from 'images/parents-rounded-1.png';
import parentAvatarPath2 from 'images/parents-rounded-2.png';

const LowerContent = () => {
  return (
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
  );
};

export default LowerContent;
