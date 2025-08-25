// HeroSection.tsx
import { type JSX } from "react";
import img_3 from "../../../assets/images/properties/hero/img_3.png";

export const HeroSection = (): JSX.Element => {

  return (
    <div className="w-full">
      {/* Property Listings Heading Section */}
        <section className="w-full flex justify-center">
        <div
            className="relative w-full max-w-[1240px] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[749px] bg-cover bg-center rounded-lg flex flex-col items-center px-4 sm:px-6 py-12 sm:py-16"
            style={{ backgroundImage: `url(${img_3})` }}
        >
            <h2 className="[-webkit-text-stroke:1.54px_#000000] [font-family:'MAINLUX-Regular',Helvetica] font-normal text-black text-3xl sm:text-5xl lg:text-6xl leading-[1.2] mb-6 text-center">
            Property Listings
            </h2>

            <p className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base sm:text-xl lg:text-3xl leading-[1.5] max-w-[881px] text-center">
            Discover exceptional properties in Nigeria and around the world,
            curated for both local and international investors.
            </p>
        </div>
        </section>
    </div>
  );
};
