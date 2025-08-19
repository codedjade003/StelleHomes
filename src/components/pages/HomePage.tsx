import HeroSection from "./Home/HeroSection";
import { HeroSection2 } from "./Home/HeroSection2";
import { PropertiesSection } from "./Home/PropertiesSection";
import { TestimonialsSection } from "./Home/TestimonialsSection";
import { WhyChooseUsSection } from "./Home/WhyChooseUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <PropertiesSection />
      <TestimonialsSection />
      <HeroSection2 />
    </>
  );
}
