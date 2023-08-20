import {
  BenefitItem,
  ItemImage,
  ItemSubtitle,
  ItemTitle,
} from './BenefitItem.styled';

const Benefit = ({ item: { imagePath, title, subtitle, description } }) => {
  return (
    <BenefitItem>
      <ItemImage src={imagePath} alt={title} width={102} />
      <ItemTitle>{title}</ItemTitle>
      <ItemSubtitle>{subtitle}</ItemSubtitle>
      <p>{description}</p>
    </BenefitItem>
  );
};

export default Benefit;
