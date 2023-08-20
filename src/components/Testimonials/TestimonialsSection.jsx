import { SectionTitle } from 'components/AboutUs/AboutUsSection.styled';
import { Section, SectionTextWrapper } from './TestimonialsSection.styled';
import { SectionDescription } from 'components/WhyWe/WhyWeSection.styled';

import { Container } from 'components/Global/Container.styled';
import FeedbackSwiper from './FeedbackSwiper';

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <Container>
        <SectionTextWrapper>
          <SectionTitle>Слова наших користувачів</SectionTitle>
          <SectionDescription>
            Деякі з наших користувачів поділились своїм досвідом перебуваючи у
            нашому комюніті:
          </SectionDescription>
        </SectionTextWrapper>
        <FeedbackSwiper />
      </Container>
    </Section>
  );
};

export default Testimonials;
