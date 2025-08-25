import { ContactSection } from "./Contact/ContactSection";
import { Hero } from "./Contact/HeroSection";

export default function ContactPage() {
  return (
    <>
        <div className="mt-[111px] bg-[#fffdf8]">
            <Hero />
            <ContactSection />
        </div>
    </>
  );
}


