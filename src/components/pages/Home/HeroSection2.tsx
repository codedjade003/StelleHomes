import type { JSX } from "react";
import hero2Img from "../../../assets/images/home/hero_2.png";

export const HeroSection2 = (): JSX.Element => {
  return (
    <section className="relative w-full flex justify-center px-4 py-8">
      <div className="relative w-full max-w-[1345px] rounded-[20px] overflow-hidden">
        {/* Background image fills container */}
        <img
          src={hero2Img}
          alt="Real estate promotional background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col justify-center items-start w-full px-4 sm:px-8 md:px-12 py-12 md:py-16">
          <h2
            className="text-white mb-6 font-semibold leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3.5rem)", // scales with viewport
            }}
          >
            Ready to Expand Your <br />
            Real Estate Portfolio?
          </h2>

          <p
            className="text-white mb-8 max-w-full sm:max-w-2xl"
            style={{
              fontSize: "clamp(0.875rem, 2.5vw, 1.25rem)",
              lineHeight: "1.5",
            }}
          >
            Schedule a consultation with our cross-border property experts to
            discuss your investment goals and discover opportunities in Nigeria
            and international markets.
          </p>

        <button
          className="w-full sm:w-60 h-[49px] flex items-center justify-center gap-2.5 p-2.5 rounded-[15px] bg-[linear-gradient(0deg,rgba(247,189,1,1)_0%,rgba(247,189,1,1)_100%)] hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          type="button"
          onClick={() => window.location.href = '/contact'}
          aria-label="Schedule a consultation with our property experts"
        >
          <span
            className="font-normal text-black text-base whitespace-nowrap"
            style={{
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
            }}
          >
            Schedule Consultation
          </span>
        </button>
        </div>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>
      </div>
    </section>
  );
};
