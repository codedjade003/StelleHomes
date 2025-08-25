import { type JSX } from "react";
import frame_1 from "../../../assets/images/about/mission/frame_1.png";
import frame_2 from "../../../assets/images/about/mission/frame_2.png";
import img_3 from "../../../assets/images/about/mission/img_3.png";
import svg_text from "../../../assets/images/about/mission/svg_text.svg";
import img_4 from "../../../assets/images/about/mission/img_4.png";

export const MissionStatementSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-gradient-to-b from-transparent via-[#fef8e6]/90 to-[#fef8e6]">

      {/* Top Section - Full viewport height SVG */}
      <div className="relative w-full mt-[111px] bg-white flex justify-start items-center">
        {/* Mobile (<768px) */}
        <img
          src={frame_2}
          alt="Mission frame mobile"
          className="block md:hidden w-full h-auto max-h-screen object-contain"
          loading="lazy"
        />

        {/* Tablet+ (>=768px) */}
        <img
          src={frame_1}
          alt="Mission frame desktop"
          className="hidden md:block w-full h-screen max-h-screen object-contain"
          loading="lazy"
        />
      </div>

      {/* Bottom “Our Story” Section */}
      <div
        className="relative w-full flex justify-start items-center px-4 sm:px-4 md:px-32"
        style={{
          backgroundImage: `url(${img_3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full max-w-[900px] px-6 md:px-0 md:-mx-16 py-20 xl:ml-4 lg:py-32">
          <h2 className="font-[MAINLUX-Regular] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black [-webkit-text-stroke:2px_#000000] mb-6 text-left">
            Our Story
          </h2>

          <div className="font-[Montserrat] flex flex-col gap-4 sm:gap-5 md:gap-6 text-left lg:max-w-full">
            <p className="text-base sm:text-lg md:text-lg lg:text-lg text-black leading-relaxed">
              <span className="hidden lg:inline">
                Stelle Homes was founded in 2024 with a vision to bridge the gap<br />
                between Nigerian and international real estate markets. What began<br />
                as a small consultancy helping Nigerians abroad invest in properties<br />
                in Nigeria has grown into a comprehensive real estate firm with<br />
                offices in Lagos, London, Miami and Toronto.
              </span>
              <span className="lg:hidden">
                Stelle Homes was founded in 2024 with a vision to bridge the gap between Nigerian and international real estate markets. What began as a small consultancy helping Nigerians abroad invest in properties in Nigeria has grown into a comprehensive real estate firm with offices in Lagos, London, Miami and Toronto.
              </span>
            </p>

            <p className="text-base sm:text-lg md:text-lg lg:text-lg text-black leading-relaxed">
              <span className="hidden lg:inline">
                Our journey started when our founder, Stella Dennis, experienced<br />
                firsthand the challenges of investing in properties in Nigeria while<br />
                based in The United Kingdon. Recognizing the need for a service that<br />
                could navigate the complexities of cross-border real estate<br />
                transactions, she assembled a team of experts with deep knowledge of<br />
                multiple markets to create a seamless experience for investors.
              </span>
              <span className="lg:hidden">
                Our journey started when our founder, Stella Dennis, experienced firsthand the challenges of investing in properties in Nigeria while based in The United Kingdon. Recognizing the need for a service that could navigate the complexities of cross-border real estate transactions, she assembled a team of experts with deep knowledge of multiple markets to create a seamless experience for investors.
              </span>
            </p>

            <p className="text-base sm:text-lg md:text-lg lg:text-lg text-black leading-relaxed">
              <span className="hidden lg:inline">
                Today, we serve both international investors interested in the<br />
                growing Nigerian real estate market and Nigerian clients looking to<br />
                invest abroad. Our success is built on our commitment to<br />
                understanding the unique needs of each client and providing<br />
                personalized guidance throughout their investment journey.
              </span>
              <span className="lg:hidden">
                Today, we serve both international investors interested in the growing Nigerian real estate market and Nigerian clients looking to invest abroad. Our success is built on our commitment to understanding the unique needs of each client and providing personalized guidance throughout their investment journey.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* New Section - Full bg img_4 with svg_text overlay */}
      <div
        className="relative w-full min-h-[calc(100vh-80px)] flex justify-start items-center px-4 sm:px-6 md:px-20"
        style={{
          backgroundImage: `url(${img_4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bottom-10 sm:bottom-16 md:bottom-20 left-4 sm:left-10 md:left-24 flex justify-start items-center w-full max-w-[820px]">
          <div className="bg-transparent backdrop-blur-xl border-t border-b border-white rounded-2xl">
            <img
              src={svg_text}
              alt="Decorative text overlay"
              className="w-full object-contain max-w-[800px] sm:max-w-[600px] max-[920px]:max-w-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
