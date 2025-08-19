import React from "react";
import img_1 from "../../../assets/images/home/whyChoose/img_1.png";
import svg_1 from "../../../assets/images/home/whyChoose/svg_1.svg";
import img_2 from "../../../assets/images/home/whyChoose/img_2.png";

interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundColor?: string;
  illustration?: string;
  position: "left" | "top-right" | "bottom-right";
}

const whyChooseUsData: WhyChooseItem[] = [
  {
    id: 1,
    title: "Local Expertise, Global Reach",
    description:
      "Our team combines deep knowledge of Nigerian real estate with extensive experience in international markets, providing you with informed guidance wherever your investment journey takes you.",
    backgroundImage: img_1,
    position: "left",
  },
  {
    id: 2,
    title: "Seamless Cross-Border Transactions",
    description:
      "We handle all aspects of your property acquisition, from legal compliance and documentation to currency exchange and closing, making international real estate investment accessible and stress-free.",
    illustration: svg_1,
    position: "top-right",
  },
  {
    id: 3,
    title: "Personalized Investment Strategy",
    description:
      "Whether you're a Nigerian looking to invest abroad or an international client interested in Nigerian properties, we tailor our approach to your specific goals, preferences, and financial situation.",
    backgroundImage: img_2,
    position: "bottom-right",
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section
  className="relative w-full max-w-[1241px] mx-auto my-16 px-4 grid grid-cols-1 lg:grid-cols-[439px_1fr] gap-6"
  role="region"
  aria-labelledby="why-choose-us-heading"
>
  {/* Absolute heading */}
  <h2
    id="why-choose-us-heading"
    className="
      absolute top-0 left-0 px-4
      text-black font-bold 
      text-[28px] sm:text-[32px] lg:text-[40px] 
      mb-6
    "
  >
    Why Choose StelleHomes
  </h2>

  {/* Left Card (img_1) */}
  <article className="group relative w-full lg:w-[439px] h-[661px] rounded-[15px] overflow-hidden mt-24">
    <img
      src={whyChooseUsData[0].backgroundImage}
      alt={whyChooseUsData[0].title}
      className="w-full h-[486px] object-cover object-top"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)",
      }}
    />

    {/* Hover gradient with middle yellow */}
    <div
      className="
        absolute bottom-0 left-0 right-0 h-[45%]
        opacity-10 group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
      "
      style={{
        background:
          "linear-gradient(to top, rgba(247,189,1,1) 0%, rgba(247,189,1,0.65) 65%, rgba(247,189,1,0) 100%)",
      }}
    ></div>

    <div className="absolute bottom-0 left-0 p-5 z-10">
      <h3 className="font-bold text-black text-2xl mb-2">
        {whyChooseUsData[0].title}
      </h3>
      <p className="font-medium text-base text-black leading-snug">
        {whyChooseUsData[0].description}
      </p>
    </div>
  </article>

  {/* Right Column */}
  <div className="flex flex-col gap-6 lg:mt-24">
    {/* Top Right (svg_1) */}
    <article
      className="group relative flex flex-col lg:flex-row items-center gap-6 p-6 rounded-[15px] overflow-hidden min-h-[300px]"
      style={{ backgroundColor: whyChooseUsData[1].backgroundColor }}
    >
      {/* Hover overlay */}
      <div
        className="absolute inset-0 bg-[#F7BD01] opacity-10 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
      <div className="relative z-10 flex-1">
        <h3 className="font-bold text-black text-2xl mb-2">
          {whyChooseUsData[1].title}
        </h3>
        <p className="font-medium text-base text-black leading-snug">
          {whyChooseUsData[1].description}
        </p>
      </div>
      {whyChooseUsData[1].illustration && (
        <img
          className="relative z-10 w-60 h-auto transition-all duration-300 group-hover:brightness-110"
          src={whyChooseUsData[1].illustration}
          alt="Cross-border transactions illustration"
        />
      )}
    </article>

    {/* Bottom Right (img_2) */}
    <article className="group relative flex items-end justify-end rounded-[15px] min-h-[300px] lg:min-h-[330px] overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={whyChooseUsData[2].backgroundImage}
        alt="Investment strategy background"
      />

      {/* Adjusted hover gradient with middle yellow */}
      <div
        className="absolute inset-y-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(247,189,1,0) 10%, rgba(247,189,1,1) 75%, rgba(247,189,1,1) 100%)",
        }}
      ></div>

      <div className="relative z-10 max-w-[363px] text-right p-6">
        <h3 className="font-bold text-black text-2xl mb-2">
          {whyChooseUsData[2].title}
        </h3>
        <p className="font-medium text-base text-black leading-snug">
          {whyChooseUsData[2].description}
        </p>
      </div>
    </article>
  </div>
</section>
  );
};
