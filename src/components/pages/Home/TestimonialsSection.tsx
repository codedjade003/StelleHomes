import { useState, useEffect, useRef, type JSX } from "react";
import QuoteSVG from "../../../assets/images/home/testimonials/svg_1.svg";
import QuoteIMG from "../../../assets/images/home/testimonials/img_1.png";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

interface TestimonialsSectionProps {
  items?: Testimonial[];
  className?: string;
}

const DEFAULT_ITEMS: Testimonial[] = [
  {
    quote: "Stelle Homes made purchasing my Lagos property incredibly smooth despite me being based in London. Their expertise in handling cross-border transactions saved me countless headaches and ensured I made a sound investment",
    name: "James Wilson",
    title: "UK-based Investor",
  },
  {
    quote: "Their team guided me from start to finish with complete transparency. It felt effortless, even from overseas.",
    name: "Sarah Thompson",
    title: "Canada-based Buyer",
  },
  {
    quote: "Professional, fast, and highly knowledgeable. I couldn't have asked for a better experience.",
    name: "Michael Lee",
    title: "Singapore-based Investor",
  },
];

export const TestimonialsSection = ({
  items,
  className = "",
}: TestimonialsSectionProps): JSX.Element => {
  const testimonials = items?.length ? items : DEFAULT_ITEMS;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const startXRef = useRef(0);
  const sliderWidthRef = useRef(0);

  // Initialize slider width
  useEffect(() => {
    if (sliderRef.current) {
      sliderWidthRef.current = sliderRef.current.offsetWidth;
    }
  }, []);

  const goTo = (index: number, animate = true) => {
    const newIndex = (index + testimonials.length) % testimonials.length;
    setCurrent(newIndex);
    setDragOffset(0);
    
    if (animate) {
      setIsDragging(false);
      setIsPaused(false);
    }
  };

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      goTo(current + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, isPaused, isDragging]);

  const handleDragStart = (clientX: number) => {
    startXRef.current = clientX;
    setIsPaused(true);
    setIsDragging(true);
    cancelAnimationFrame(animationRef.current!);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - startXRef.current;
    setDragOffset(deltaX);
  };

const handleDragEnd = () => {
  if (!isDragging) return;
  
  const threshold = sliderWidthRef.current * 0.3; // 30% threshold for snap
  let targetIndex = current;
  
  if (dragOffset > threshold) {
    // Dragged right (toward previous slide)
    targetIndex = current - 1;
  } else if (dragOffset < -threshold) {
    // Dragged left (toward next slide)
    targetIndex = current + 1;
  }
  
  // Directly go to target index without animation
  goTo(targetIndex, false);
  setIsDragging(false);
  setIsPaused(false);
};



  // Event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  return (
    <section className={`w-full py-12 sm:py-16 px-4 bg-white ${className}`} aria-label="Customer Testimonials">
      <div className="max-w-6xl mx-auto">
        <article
          className="bg-[#f7bd01] rounded-[20px] sm:rounded-[40px] mx-auto flex items-center w-full max-w-[968px] px-10 sm:px-[60px] py-6 sm:py-[37px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-[minmax(80px,140px)_1fr] items-center gap-6 sm:gap-[37px] w-full">
            <div className="flex justify-center sm:justify-start self-center">
              <img
                src={QuoteIMG}
                alt="Quotation mark"
                className="select-none pointer-events-none max-w-[80px] sm:max-w-[160px] h-auto"
                aria-hidden="true"
              />
            </div>

            <div
              ref={sliderRef}
              className="relative flex flex-col justify-center items-left text-left overflow-hidden min-h-[200px] sm:min-h-[250px]"
              aria-roledescription="carousel"
              aria-label="Testimonials"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
                aria-live="polite"
              >
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="min-w-full flex flex-col items-start justify-center text-left px-4 select-none"
                  >
                    <blockquote className="font-[Montserrat] text-black text-sm sm:text-base lg:text-xl leading-relaxed max-w-3xl">
                      {t.quote}
                    </blockquote>
                    <cite className="font-[Montserrat] not-italic block mt-4 text-black text-sm sm:text-base lg:text-lg">
                      <span className="font-semibold">{t.name} </span>
                      <span>{t.title}</span>
                    </cite>
                  </div>
                ))}
              </div>

              <nav className="mt-6 flex justify-end gap-2" aria-label="Testimonial pagination">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === current ? "bg-[#fef8e6]" : "bg-black/70 hover:bg-black/50"
                    }`}
                    aria-current={i === current}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </nav>
            </div>
          </div>
        </article>

        <img
          className="w-16 sm:w-[105px] h-auto -mt-3 mx-auto"
          alt="Decorative mark"
          src={QuoteSVG}
        />
      </div>
    </section>
  );
};