import { type JSX } from "react";
import svg_1 from "../../../assets/images/services/services/svg_1.png";
import svg_2 from "../../../assets/images/services/services/svg_2.png";

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      {/* Desktop / Tablet (≥768px) */}
      <img
        src={svg_1}
        alt="Services section"
        className="hidden lg:block xl:block md:block w-full h-auto"
      />
      <div className="hidden md:block absolute top-[279px] left-[83px]">
      </div>

      {/* Mobile (<768px) */}
      <div className="block md:hidden w-full px-5">
        <img
          src={svg_2}
          alt="Services section"
          className="w-full h-auto"
        />
        <h2
          id="services-heading-mobile"
          className="mt-16 ml-2 sm:mb-0 mb-4 font-[MAINLUX-Regular] [-webkit-text-stroke:1.54px_#000000] sm:text-4xl text-6xl leading-[48px] text-black text-left"
        >
          Our Services
        </h2>
        <p className="mt-2 ml-3 font-[Montserrat] text-black text-xl leading-[28px] text-left">
          Comprehensive real <br />
          estate solutions for <br />
          cross-border investors
        </p>
      </div>
    </section>
  );
};
