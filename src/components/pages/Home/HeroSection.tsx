import React from "react";
import heroImage from "../../../assets/images/home/hero-placeholder.png";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white pt-24 sm:pt-32 pb-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-4">

        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-mainlux font-normal text-black leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)", // scales smoothly from small mobile to desktop
              lineHeight: "1.2"
            }}
          >
            <span>Your </span>
            <span className="text-[#f7bd01]">Bridge</span>
            <span> to <br /> Global Real Estate <br /> Opportunities</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg md:text-xl max-w-full md:max-w-md mx-auto md:mx-0">
            Connecting Nigerian properties to international investors and opening global markets to Nigerian clients
          </p>

          <div className="mt-6 sm:mt-8">
            <button
              className="w-full sm:w-[240px] h-[49px] rounded-[15px] px-4 bg-[#F7BD01] text-black font-semibold shadow hover:opacity-90 transition"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Global Opportunities"
            className="w-full h-auto max-w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
