import { useEffect, useLayoutEffect, useRef, useState, type JSX } from "react";
import { PropertyCard } from "./Featured/PropertyCard";
import { SkeletonCard } from "./Featured/SkeletonCard";
import { ExpandTray } from "./Featured/ExpandTray";
import { ToggleButton } from "./Featured/ToggleButton";
import { properties } from "./Featured/data";
import PropertyModal from "./Featured/PropertyModal";          // 🔥 NEW
import type { PropertyData } from "./Featured/types";          // 🔥 NEW

export const FeaturedPropertiesSection = (): JSX.Element => {
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buttonVisible, setButtonVisible] = useState<"button1" | "button2">("button1");

  const trayRef = useRef<HTMLDivElement | null>(null);
  const [trayMax, setTrayMax] = useState<number>(0);
  const scrollYRef = useRef(0);
  const lockRef = useRef(false);

  // 🔥 NEW modal state
  const [selectedProperty, setSelectedProperty] = useState<PropertyData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (property: PropertyData) => {
    console.log("Opening modal for:", property.title);
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  useLayoutEffect(() => {
    if (trayRef.current) setTrayMax(trayRef.current.scrollHeight);
  }, [mounted, properties.length]);

  const keepViewport = () => {
    if (!lockRef.current) return;
    window.scrollTo(0, scrollYRef.current);
    requestAnimationFrame(keepViewport);
  };

  const handleExpand = () => {
    scrollYRef.current = window.scrollY || 0;
    lockRef.current = true;
    requestAnimationFrame(keepViewport);

    if (trayRef.current) setTrayMax(trayRef.current.scrollHeight);
    setShowAll(true);
  };

  const handleCollapse = () => {
    setShowAll(false);
    setButtonVisible("button1");
  };

  const onTrayTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "max-height") return;
    if (showAll) {
      lockRef.current = false;
      setButtonVisible("button2");
    }
  };

  return (
    <section className="w-full flex flex-col items-center">
      {loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        <>
          {/* first two */}
          {properties.slice(0, 2).map((p) => (
            <PropertyCard key={p.id} property={p} onClick={() => handleOpenModal(p)} />   /* 🔥 add onClick */
          ))}

          {/* expandable tray */}
          <ExpandTray
            showAll={showAll}
            trayMax={trayMax}
            trayRef={trayRef}
            onTrayTransitionEnd={onTrayTransitionEnd}
          >
            {mounted &&
              properties.slice(2).map((p) => (
                <PropertyCard key={p.id} property={p} onClick={() => handleOpenModal(p)} />   /* 🔥 add onClick */
              ))}
          </ExpandTray>

          <ToggleButton
            buttonVisible={buttonVisible}
            onExpand={handleExpand}
            onCollapse={handleCollapse}
          />
        </>
      )}

      {/* 🔥 The modal (always mounted, controlled by state) */}
      <PropertyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        property={selectedProperty}
      />
    </section>
  );
};
