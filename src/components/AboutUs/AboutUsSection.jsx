import { Container } from 'components/Global/Container.styled';
import {
  SectionTitle,
  AboutUsTopWrapper,
  BenefitItem,
  BenefitsList,
  ItemImage,
  ItemSubtitle,
  ItemTitle,
  Section,
} from './AboutUsSection.styled';
import MainButton from 'components/Global/MainButton';
import shape1Path from 'images/shapes-1.png';
import shape2Path from 'images/shapes-2.png';
import shape3Path from 'images/shapes-3.png';

const benefitsData = [
  {
    imagePath: shape1Path,
    title: 'Що ми пропонуємо:',
    subtitle: 'Спільні закупівлі: Разом - сильніше!',
    description:
      "Об'єднуйтесь з іншими батьками, щоб купувати речі для школи оптом та економити кошти.",
  },
  {
    imagePath: shape2Path,
    title: 'Ідеї та поради:',
    subtitle: 'Поділіться своїми ідеями та порадами з іншими батьками!',
    description:
      'Як підготувати дітей до школи, створити зручне навчальне середовище та багато іншого.',
  },
  {
    imagePath: shape3Path,
    title: 'Підтримка та мотивація:',
    subtitle: 'Взаємопідтримка - ключовий аспект нашої спільноти.',
    description:
      'Ми підтримуємо один одного та мотивуємо до досягнення успіхів у підготовці дітей до школи.',
  },
];

const AboutUsSection = () => {
  return (
    <Section id="about-us">
      <Container>
        <AboutUsTopWrapper>
          <div>
            <SectionTitle>Що таке "Батьки разом"?</SectionTitle>
            <p>
              "Батьки разом" - це ідея об'єднатися разом для того, щоб
              підтримати один одного у процесі підготовки дітей до початкової
              школи. Наша спільнота дозволяє батькам об'єднатися в мережу, де
              вони можуть ділитися досвідом, знаннями та ресурсами.
            </p>
          </div>
          <MainButton innerText={'Отримати консультацію'} />
        </AboutUsTopWrapper>
        <BenefitsList>
          {benefitsData.map(({ imagePath, title, subtitle, description }) => (
            <BenefitItem key={imagePath}>
              <ItemImage src={imagePath} alt={title} width={102} />
              <ItemTitle>{title}</ItemTitle>
              <ItemSubtitle>{subtitle}</ItemSubtitle>
              <p>{description}</p>
            </BenefitItem>
          ))}
        </BenefitsList>
      </Container>
    </Section>
  );
};

export default AboutUsSection;
