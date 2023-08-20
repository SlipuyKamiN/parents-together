import { SectionTitle } from 'components/AboutUs/AboutUsSection.styled';
import { Container } from 'components/Global/Container.styled';
import MainButton from 'components/Global/MainButton';
import {
  AdvantageItem,
  AdvantagesList,
  ItemTitle,
  Section,
  SectionDescription,
} from './WhyWeSection.styled';
import shape4Path from 'images/shapes-4.png';
import shape5Path from 'images/shapes-5.png';
import shape6Path from 'images/shapes-6.png';

const advantagesData = [
  {
    imagePath: shape4Path,
    title: 'Сила спільноти:',
    description:
      'Завдяки нашій колаборативній мережі, ви отримуєте можливість знаходити нових друзів і рівнодумців, що полегшить вашу подорож підготовки до школи.',
  },
  {
    imagePath: shape5Path,
    title: 'Економія коштів:',
    description:
      'Разом з іншими батьками, ви можете придбати необхідні речі для школи оптом за зниженою ціною, що дозволить економити ваші кошти.',
  },
  {
    imagePath: shape6Path,
    title: 'Досвід та знання:',
    description:
      'Обмінюйтесь досвідом та знаннями з іншими батьками, щоб створити комфортне та успішне навчальне середовище для вашої дитини.',
  },
];

const WhyWeSection = () => {
  return (
    <Section id="why-we">
      <Container>
        <SectionTitle>Чому ми?</SectionTitle>
        <SectionDescription>
          Приєднуючись до нас, ви отримуєте унікальні переваги:
        </SectionDescription>
        <AdvantagesList>
          {advantagesData.map(({ imagePath, title, description }) => (
            <AdvantageItem key={imagePath}>
              <img src={imagePath} alt={title} />
              <div>
                <ItemTitle>{title}</ItemTitle>
                <p>{description}</p>
              </div>
            </AdvantageItem>
          ))}
        </AdvantagesList>
        <MainButton innerText={'Приєднатись зараз'} />
      </Container>
    </Section>
  );
};

export default WhyWeSection;
