import { ArrowIcon, ButtonTextWrapper, Button } from './MainButton.styled';
import { HiOutlineArrowRight } from 'react-icons/hi';

const MainButton = ({ innerText }) => {
  return (
    <Button>
      <ButtonTextWrapper>{innerText}</ButtonTextWrapper>
      <ArrowIcon>
        <HiOutlineArrowRight size={25} />
      </ArrowIcon>
    </Button>
  );
};

export default MainButton;
