import { HeroDescription, HeroTextWrapper, HeroTitle } from './Upper.styled';

const UpperContent = () => {
  return (
    <HeroTextWrapper>
      <HeroTitle>Вітаємо у "Батьки разом"</HeroTitle>
      <div>
        <HeroDescription>
          ми колаборативна мережа для успішного старту у шкільне життя!
        </HeroDescription>
        <p>
          Приєднуйтесь зараз щоб створювати спільні ініціативи для наших дітей
          разом!
        </p>
      </div>
    </HeroTextWrapper>
  );
};

export default UpperContent;
