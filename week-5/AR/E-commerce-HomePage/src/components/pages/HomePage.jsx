import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PromoBanner from "./PromoBanner";
import WhyChooseUs from "./WhyChooseUs";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <PromoBanner />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;