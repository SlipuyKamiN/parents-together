import AboutUsSection from 'components/AboutUs/AboutUsSection';
import Footer from 'components/Footer/Footer';
import { Container } from 'components/Global/Container.styled';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/HeroSection';
import JoinUsSection from 'components/JoinUs/JoinUsSection';
import Testimonials from 'components/Testimonials/TestimonialsSection';
import WhyWeSection from 'components/WhyWe/WhyWeSection';

const App = () => {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <main>
        <Container>
          <Hero />
          <AboutUsSection />
          <WhyWeSection />
          <Testimonials />
          <JoinUsSection />
        </Container>
      </main>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
