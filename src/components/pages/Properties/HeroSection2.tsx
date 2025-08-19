import { type JSX } from "react";

export const HeroSection2 = (): JSX.Element => {

  return (
    <section className="relative w-full flex justify-center px-4 mt-8 md:mt-12">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#fff9ed]"></div>
      <div className="relative w-full max-w-[1345px] rounded-[20px] overflow-hidden">

        {/* Optional dark overlay for readability */}
        <div className="absolute w-screen inset-0 bg-gradient-to-b from-white to-[#fff9ed] z-0"></div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 px-6 md:px-12 py-12">
          {/* Left text block */}
          <div className="flex-1 text-black">
            <h2
              className="font-normal leading-tight mb-6"
              style={{
                fontFamily: "'MAINLUX-Regular', Helvetica, sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                WebkitTextStroke: "1.5px #000",
              }}
            >
              Ready to find your <br /> perfect property?
            </h2>

            <p
              className="mb-8 max-w-xl"
              style={{
                fontFamily: "'Montserrat', Helvetica, sans-serif",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                lineHeight: "1.6",
              }}
            >
              Schedule a consultation with our expert team to discuss your
              investment goals and discover the perfect property opportunities
              across Nigeria and international markets.
            </p>

            <button
              className="w-full sm:w-60 h-[49px] flex items-center justify-center gap-2.5 p-2.5 rounded-[15px] bg-[linear-gradient(0deg,rgba(247,189,1,1)_0%,rgba(247,189,1,1)_100%)] hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => window.location.href = '/contact'}
              aria-label="Schedule a consultation with our expert team"
              type="button"
            >
              <span
                className="font-normal text-black text-base whitespace-nowrap"
                style={{
                  fontFamily: "'MAINLUX-SemiBold-Regular', Helvetica, sans-serif",
                }}
              >
                Schedule Consultation
              </span>
            </button>
          </div>

          {/* Right side cluster of circular images */}
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-sm">
            <img
              src="https://c.animaapp.com/X0kgDNfy/img/ellipse-23@2x.png"
              alt="Team member"
              className="w-full rounded-full object-cover"
            />
            <img
              src="https://c.animaapp.com/X0kgDNfy/img/ellipse-24@2x.png"
              alt="Team member"
              className="w-full rounded-full object-cover"
            />
            <img
              src="https://c.animaapp.com/X0kgDNfy/img/ellipse-25@2x.png"
              alt="Team member"
              className="w-full rounded-full object-cover"
            />
            <img
              src="https://c.animaapp.com/X0kgDNfy/img/ellipse-26@2x.png"
              alt="Team member"
              className="w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
