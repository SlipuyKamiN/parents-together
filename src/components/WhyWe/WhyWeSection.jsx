import { SectionTitle } from 'components/AboutUs/AboutUsSection.styled';
import { Container } from 'components/Global/Container.styled';
import MainButton from 'components/Global/MainButton';
import {
  AdvantagesList,
  Section,
  SectionDescription,
} from './WhyWeSection.styled';
import Advantage from './Advantage';
import { advantagesData } from 'data/advantagesData';

const WhyWeSection = () => {
  return (
    <Section id="why-we">
      <Container>
        <SectionTitle>Чому ми?</SectionTitle>
        <SectionDescription>
          Приєднуючись до нас, ви отримуєте унікальні переваги:
        </SectionDescription>
        <AdvantagesList>
          {advantagesData.map(item => (
            <Advantage key={item.imagePath} item={item} />
          ))}
        </AdvantagesList>
        <MainButton innerText={'Приєднатись зараз'} />
      </Container>
    </Section>
  );
};

export default WhyWeSection;
