import { HeroDownLink, Section } from './HeroSection.styled';
import { FaArrowDown } from 'react-icons/fa';
import { Container } from 'components/Global/Container.styled';
import UpperContent from './Upper';
import LowerContent from './Lower';

const Hero = () => {
  return (
    <Container>
      <Section>
        <UpperContent />
        <LowerContent />
        <HeroDownLink href="#about-us">
          <FaArrowDown size={32} />
        </HeroDownLink>
      </Section>
    </Container>
  );
};

export default Hero;
