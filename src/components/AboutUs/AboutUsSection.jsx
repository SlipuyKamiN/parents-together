import { Container } from 'components/Global/Container.styled';
import {
  SectionTitle,
  AboutUsTopWrapper,
  BenefitsList,
  Section,
} from './AboutUsSection.styled';
import MainButton from 'components/Global/MainButton';
import Benefit from './BenefitItem';
import { benefitsData } from 'data/benefitsData';

const AboutUsSection = () => {
  return (
    <Section id="about-us">
      <Container>
        <AboutUsTopWrapper>
          <div>
            <SectionTitle>
              Що таке <br />
              "Батьки разом"?
            </SectionTitle>
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
          {benefitsData.map(item => (
            <Benefit item={item} key={item.imagePath} />
          ))}
        </BenefitsList>
      </Container>
    </Section>
  );
};

export default AboutUsSection;
