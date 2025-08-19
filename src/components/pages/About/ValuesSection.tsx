import { type JSX } from "react";
import img_1 from "../../../assets/images/about/values/img_1.png";

// Import the SVGs
import svg_1 from "../../../assets/images/about/values/svg_1.svg";
import svg_2 from "../../../assets/images/about/values/svg_2.svg";
import svg_3 from "../../../assets/images/about/values/svg_3.svg";
import svg_4 from "../../../assets/images/about/values/svg_4.svg";
import svg_5 from "../../../assets/images/about/values/svg_5.svg";

export const ValuesSection = (): JSX.Element => {
  const valuesData = [
    {
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty at every step.",
      svg: svg_1,
    },
    {
      title: "Expertise",
      description:
        "We continuously expand our knowledge of global real estate markets to provide informed guidance to our clients.",
      svg: svg_2,
    },
    {
      title: "Cultural Understanding",
      description:
        "We continuously expand our knowledge of global real estate markets to provide informed guidance to our clients.",
      svg: svg_3,
    },
    {
      title: "Client-Centered Approach",
      description:
        "We tailor our services to meet the unique needs and goals of each client, providing personalized attention throughout the investment process.",
      svg: svg_4,
    },
    {
      title: "Innovation",
      description:
        "We leverage technology and creative solutions to overcome the challenges of cross-border real estate transactions.",
      svg: svg_5,
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24">
        {/* Cards */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center
            [@media(min-width:1024px)_and_(max-width:1271px)]:grid-cols-2
          "
        >

        {valuesData.map((value, index) => (
          <div
            key={index}
            className="group relative w-full max-w-[393px] h-[370px] bg-[#d9d9d9] rounded-2xl p-8 flex flex-col transition-colors duration-300 hover:bg-[#F7BD01]"
          >
            <h3 className="font-[MAINLUX-Regular] [-webkit-text-stroke:0.55px_#000000] text-black text-3xl md:text-[40px] leading-[1.1] font-medium mb-4">
              {value.title}
            </h3>
            <p className="font-[Montserrat] text-black text-[20px] md:text-lg leading-relaxed">
              {value.description}
            </p>

            {/* Hover SVG bottom right */}
            <img
              src={value.svg}
              alt={`${value.title} icon`}
              className="absolute md:bottom-8 bottom-2 right-3 md:right-8 w-[97px] h-[97px] opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
            />
          </div>
        ))}

      {/* Image Card */}
      <div className="w-full max-w-[393px] h-[370px] rounded-2xl overflow-hidden">
        <img
          src={img_1}
          alt="Values illustration"
          className="brightness-90 w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-110"
        />
      </div>

      </div>
    </section>
  );
};
