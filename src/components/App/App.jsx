import AboutUsSection from 'components/AboutUs/AboutUsSection';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/HeroSection';
import JoinUsSection from 'components/JoinUs/JoinUsSection';
import Testimonials from 'components/Testimonials/TestimonialsSection';
import WhyWeSection from 'components/WhyWe/WhyWeSection';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AboutUsSection />
        <WhyWeSection />
        <Testimonials />
        <JoinUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
