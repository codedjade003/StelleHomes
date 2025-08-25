import { type JSX } from "react";
import hero from "../../../assets/images/contact/hero.png";

export const Hero = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#fffdf8]">
        {/* Hero Image */}
        <img
            src={hero}
            alt="Contact Hero"
            className="w-full h-[300px] sm:h-[400px] md:h-[510px] object-cover object-right"
        />

      {/* Heading */}
      <div className="py-8 sm:py-10 px-6 sm:px-4 md:px-12 lg:px-28 xl:40">
        <h1 className="font-[Montserrat] text-3xl sm:text-4xl md:text-[43px] font-normal text-[#ce9811] leading-snug sm:leading-tight md:leading-[43px]">
          Visit Our Office
        </h1>
      </div>
    </section>
  );
};
