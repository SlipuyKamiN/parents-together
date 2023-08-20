import { AdvantageItem, ItemTitle } from './WhyWeSection.styled';

const Advantage = ({ item: { imagePath, title, description } }) => {
  return (
    <AdvantageItem>
      <img src={imagePath} alt={title} />
      <div>
        <ItemTitle>{title}</ItemTitle>
        <p>{description}</p>
      </div>
    </AdvantageItem>
  );
};

export default Advantage;
