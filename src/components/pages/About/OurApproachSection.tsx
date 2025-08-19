import { useState, useEffect, useRef, type JSX } from "react";

import img_1 from "../../../assets/images/about/approach/img_1.png";
import img_2 from "../../../assets/images/about/approach/img_2.png";
import img_3 from "../../../assets/images/about/approach/img_3.png";
import img_4 from "../../../assets/images/about/approach/img_4.png";
import img_5 from "../../../assets/images/about/approach/img_5.png";

export const OurApproachSection = (): JSX.Element => {
  const approachSteps = [
    {
      id: 1,
      title: "Understand",
      step: "Step 1",
      description:
        "We begin by deeply understanding your investment goals, preferences, and constraints. Whether you're looking for capital appreciation, rental income, or a second home, we tailor our approach to your specific needs.",
      backgroundImage: img_1,
    },
    {
      id: 2,
      title: "Educate",
      step: "Step 2",
      description:
        "We believe informed investors make better decisions. We provide comprehensive market insights, legal requirements, tax implications, and potential risks specific to your target market, ensuring you have all the information needed to make confident choices.",
      backgroundImage: img_2
    },
    {
      id: 3,
      title: "Connect",
      step: "Step 3",
      description:
        "Leveraging our extensive network across multiple countries, we connect you with the right properties, professionals, and services to facilitate your investment. From property developers to legal advisors, we bring together all the necessary expertise.",
      backgroundImage: img_3
    },
    {
      id: 4,
      title: "Simplify",
      step: "Step 4",
      description:
        "We handle the complexities of cross-border transactions, including documentation, legal compliance, currency exchange, and closing procedures, making the process as seamless as possible regardless of where you're based.",
      backgroundImage: img_4
    },
    {
      id: 5,
      title: "Support",
      step: "Step 5",
      description:
        "Our relationship continues after the purchase. We offer property management, rental services, and ongoing market updates to ensure your investment thrives over the long term.",
      backgroundImage: img_5
    },
  ];

const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollTimeout = useRef<number>(0);

  // Auto-scroll every 8 seconds (increased from 1.5s)
  useEffect(() => {
    const autoScroll = () => {
      if (!isDragging) {
        setActiveIndex((prev) => (prev + 1) % approachSteps.length);
      }
      autoScrollTimeout.current = setTimeout(autoScroll, 8000);
    };

    autoScrollTimeout.current = setTimeout(autoScroll, 8000);
    return () => {
      if (autoScrollTimeout.current) {
        clearTimeout(autoScrollTimeout.current);
      }
    };
  }, [approachSteps.length, isDragging]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
    if (autoScrollTimeout.current) {
      clearTimeout(autoScrollTimeout.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const diff = startX - x;
    if (Math.abs(diff) > 5) setIsDragging(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.changedTouches[0].clientX;
    const diff = startX - x;
    
    if (diff > 50 && activeIndex < approachSteps.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (diff < -50 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
    
    setStartX(0);
    setIsDragging(false);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
    if (autoScrollTimeout.current) {
      clearTimeout(autoScrollTimeout.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.clientX;
    const diff = startX - x;
    if (Math.abs(diff) > 5) setIsDragging(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.clientX;
    const diff = startX - x;
    
    if (diff > 50 && activeIndex < approachSteps.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (diff < -50 && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
    
    setStartX(0);
    setIsDragging(false);
  };

  return (
    <section className="flex flex-col xl:flex-row gap-12 xl:gap-[105px] justify-center items-center mt-12 pt-0 pb-32 px-6 xl:px-12">
      {/* Left Column */}
      <header className="flex flex-col max-w-full lg:max-w-[447px] gap-6 text-center lg:text-left">
        <h2 className="[-webkit-text-stroke:0.8px_#000000] [font-family:'MAINLUX-Regular',Helvetica] font-normal text-black text-3xl sm:text-4xl lg:text-6xl leading-tight">
          Our Approach
        </h2>

        <p className="[font-family:'Montserrat',Helvetica] font-normal text-black text-base sm:text-lg lg:text-xl leading-relaxed">
          At Stelle Homes, we understand that cross-border real estate
          investment presents unique challenges and opportunities. Our approach
          combines local market expertise, international perspective, and
          personalized service to ensure successful outcomes for our clients.
        </p>
      </header>

      {/* Right Column - Carousel */}
      <div 
        ref={carouselRef}
        className="relative w-full max-w-[727px] h-[350px] sm:h-[400px] lg:h-[690px] rounded-[15px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          if (isDragging) {
            setStartX(0);
            setIsDragging(false);
          }
        }}
      >
          {approachSteps.map((step, index) => (
          <article
            key={step.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background layer (dimmed image) */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${step.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.3)",
              }}
            />

            {/* Content layer */}
            <div className="absolute bottom-10 sm:bottom-16 left-4 sm:left-6 lg:left-12 max-w-[90%] lg:w-[642px] z-10">
              <div className="[font-family:'MAINLUX-Regular',Helvetica] text-white text-sm sm:text-base lg:text-[25px] leading-snug mb-2">
                {step.step}
              </div>
              <h3 className="[font-family:'MAINLUX-Regular',Helvetica] text-white text-xl sm:text-2xl lg:text-[40px] leading-snug mb-3 sm:mb-4 [-webkit-text-stroke:0.55px_#fffdf9]">
                {step.title}
              </h3>
              <p className="[font-family:'Montserrat',Helvetica] text-white text-sm sm:text-base lg:text-xl leading-relaxed max-w-[446px]">
                {step.description}
              </p>
            </div>
          </article>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 lg:bottom-16 lg:right-10 flex flex-row lg:flex-col gap-1 z-20">
          {approachSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-[#f7bd01]" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
