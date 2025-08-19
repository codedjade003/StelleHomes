import { AdvisorySection } from "./Services/AdvisorySection";
import { ServicesSection } from "./Services/ServicesSection";

const ServicesPage = () => {
  return (
    <div className="w-full bg-[#fffdf8] flex justify-center relative mt-[111px] overflow-hidden">
      {/* Full-width parent */}
      <div className="w-full max-w-[1440px]">
        {/* Services section stays full-width */}
        <ServicesSection />

        {/* Advisory Section centered with reduced width */}
        <div className="w-full max-w-[1300px] mx-auto bg-[#fffdf8] overflow-visible px-4">
          <AdvisorySection />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
