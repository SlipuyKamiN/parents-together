import { ArrowIcon, ButtonTextWrapper, Button } from './MainButton.styled';

const MainButton = ({ innerText }) => {
  return (
    <Button>
      <ButtonTextWrapper>{innerText}</ButtonTextWrapper>
      <ArrowIcon />
    </Button>
  );
};

export default MainButton;
