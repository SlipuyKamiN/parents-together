import { Button } from './SwiperButton.styled';

const SwiperButton = ({ disabled = false, children, onClick }) => {
  return (
    <Button type="button" disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export default SwiperButton;
