import HeroSection from "../HeroSection";
import FeaturedProducts from "../FeaturedProducts";
import PromoBanner from "../PromoBanner";
import WhyChooseUs from "../WhyChooseUs";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <PromoBanner />
      <WhyChooseUs />
    </main>
  );
}

export default HomePage;