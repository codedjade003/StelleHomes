import { useEffect, useLayoutEffect, useRef, useState, type JSX } from "react";
import button_1 from "../../../assets/images/properties/button_1.svg";
import button_2 from "../../../assets/images/properties/button_2.svg";
import bedIcon from "../../../assets/images/properties/bed.png";
import complexIcon from "../../../assets/images/properties/complex.png";
import bathroomIcon from "../../../assets/images/properties/bathroom.svg";
import areaIcon from "../../../assets/images/properties/area.svg";
import locationIcon from "../../../assets/images/properties/location.svg";

import { properties } from "./Featured/data";
import type { PropertyData } from "./Featured/types";
import PropertyModal from "./Featured/PropertyModal";

export const FeaturedPropertiesSection = (): JSX.Element => {
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buttonVisible, setButtonVisible] = useState<"button1" | "button2">("button1");

    // Add this state to your component
  const [selectedProperty, setSelectedProperty] = useState<PropertyData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePropertyClick = (property: PropertyData) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  // Viewport lock during expand so the user doesn't see the page move
  const trayRef = useRef<HTMLDivElement | null>(null);
  const [trayMax, setTrayMax] = useState<number>(0);
  const scrollYRef = useRef(0);
  const lockRef = useRef(false);

  // mount + quick skeleton
  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  // Preload buttons to avoid flicker
  useEffect(() => {
    const b1 = new Image();
    const b2 = new Image();
    b1.src = button_1;
    b2.src = button_2;
  }, []);

  // keep content always mounted so we can measure height
  useLayoutEffect(() => {
    if (trayRef.current) {
      // measure full height of hidden content
      const h = trayRef.current.scrollHeight;
      setTrayMax(h);
    }
  }, [mounted, properties.length]);

  // rAF loop to hold viewport steady during expand
  const keepViewport = () => {
    if (!lockRef.current) return;
    window.scrollTo(0, scrollYRef.current);
    requestAnimationFrame(keepViewport);
  };

  const handleExpand = () => {
    // Lock current viewport
    scrollYRef.current = window.scrollY || 0;
    lockRef.current = true;
    requestAnimationFrame(keepViewport);

    // Ensure we have an up-to-date height before animating
    if (trayRef.current) setTrayMax(trayRef.current.scrollHeight);

    setShowAll(true); // start expand (button_1 stays visible until transition ends)
  };

  const handleCollapse = () => {
    setShowAll(false); // collapse now
    setButtonVisible("button1"); // swap back immediately is fine per your note
  };

  // After the expand transition ends, unlock viewport and swap to button_2
  const onTrayTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "max-height") return;
    if (showAll) {
      lockRef.current = false; // stop locking viewport
      setButtonVisible("button2"); // now swap buttons (user didn't watch it move)
    }
  };

  const PropertyCard = ({ property }: { property: PropertyData }) => {
    return (
      <div
        className={`w-screen relative ${property.backgroundColor} overflow-hidden cursor-pointer group`}
        onClick={() => handlePropertyClick(property)}
      >
        <div className="mx-auto max-w-[1240px] px-4 py-10 lg:py-16 flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              className="w-full lg:w-[610px] h-[240px] lg:h-[404px] object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
              alt="Property"
              src={property.image}
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col justify-center transition-all duration-300 ease-in-out group-hover:scale-[1.02]">
            <h3 className="text-xl lg:text-[35px] font-semibold mb-2 transition-colors duration-300 group-hover:text-[#f7bd01]">
              {property.title}
            </h3>
            <div className="flex items-center text-gray-700 text-sm mb-6">
              <img
                src={locationIcon}
                alt="Location"
                className="w-4 h-4 mr-2"
              />
              {property.location}
            </div>
            <div className="font-[Montserrat] text-[#f7bd01] font-bold text-lg lg:text-3xl mb-1">
              {property.price}
            </div>

            {/* Icons row */}
            <div className="flex gap-6 text-sm text-black mb-6">
              {property.bedrooms && (
                <div className="flex items-center gap-2">
                  <img src={bedIcon} alt="Bedrooms" className="w-4 h-4" />
                  {property.bedrooms}
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center gap-2">
                  <img src={bathroomIcon} alt="Bathrooms" className="w-5 h-5" />
                  {property.bathrooms}
                </div>
              )}
              {property.complex && (
                <div className="flex items-center gap-2">
                  <img src={complexIcon} alt="Complex" className="w-5 h-5" />
                  {property.complex}
                </div>
              )}
              <div className="flex items-center gap-2">
                <img src={areaIcon} alt="Area" className="w-5 h-5" />
                {property.area}
              </div>
            </div>

            <p className="font-[Montserrat] text-sm lg:text-[15px] text-black max-w-[518px] mb-4 transition-colors duration-300 group-hover:text-gray-700">
              {property.description}
            </p>
          </div>
        </div>
      </div>
    );
  };


  const SkeletonCard = () => (
    <div className="w-screen bg-[#fff9ed]">
      <div className="mx-auto max-w-[1240px] px-4 py-10 animate-pulse">
        <div className="h-[240px] lg:h-[404px] bg-gray-200 rounded-lg mb-6" />
        <div className="h-6 bg-gray-200 w-1/2 rounded mb-2" />
        <div className="h-4 bg-gray-200 w-1/3 rounded mb-2" />
        <div className="h-4 bg-gray-200 w-2/3 rounded" />
      </div>
    </div>
  );

  return (
    <section className="w-full flex flex-col items-center">
      {loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        <>
          {properties.slice(0, 2).map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}

          {/* Expandable tray (content always mounted so we can measure height) */}
          <div
            ref={trayRef}
            onTransitionEnd={onTrayTransitionEnd}
            style={{ maxHeight: showAll ? trayMax : 0 }}
            className="transition-[max-height] duration-700 ease-in-out overflow-hidden w-full will-change-[max-height]"
          >
            <div
              className={`${
                showAll ? "opacity-100 delay-150" : "opacity-0"
              } transition-opacity duration-300`}
            >
              {mounted &&
                properties.slice(2).map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          </div>

          {/* Buttons (fixed container height to prevent layout shift) */}
          <div className="flex justify-center my-8 min-h-[60px]">
            {buttonVisible === "button1" ? (
              <img
                src={button_1}
                alt="Show more"
                className="cursor-pointer w-[60px] h-[60px] hover:scale-105 transition-transform"
                onClick={handleExpand}
              />
            ) : (
              <img
                src={button_2}
                alt="Show less"
                className="cursor-pointer w-[60px] h-[60px] hover:scale-105 transition-transform"
                onClick={handleCollapse}
              />
            )}

            <PropertyModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
              property={selectedProperty} 
            />
          </div>
        </>
      )}
    </section>
  );
};
