import { FeaturedPropertiesSection } from "./Properties/FeaturedPropertiesSection";
import { HeroSection } from "./Properties/HeroSection";
import { HeroSection2 } from "./Properties/HeroSection2";

export default function PropertiesPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-white from-[1%] via-[#fff9ed] via-[6%] to-[#fff9ed] mt-[111px]">
        <HeroSection />
        <FeaturedPropertiesSection />
        <HeroSection2 />
      </div>
    </>
  );
}
