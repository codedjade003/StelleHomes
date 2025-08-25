import { useState, useEffect } from "react";
import img_1 from "../../../../assets/images/properties/img_1.png";

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  // Normalize images
  const normalizedImages = (() => {
    if (!images || images.length === 0) {
      return Array(4).fill(img_1);
    }
    if (images.length === 1) {
      return Array(4).fill(images[0]);
    }
    if (images.length < 4) {
      const repeated = [...images];
      while (repeated.length < 4) {
        repeated.push(...images);
      }
      return repeated.slice(0, 4);
    }
    return images;
  })();

  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const prev = () =>
    setCurrent((c) => (c - 1 + normalizedImages.length) % normalizedImages.length);
  const next = () =>
    setCurrent((c) => (c + 1) % normalizedImages.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) next();
    if (touchStart - touchEnd < -50) prev();
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [normalizedImages.length]);

  return (
    <div className="flex flex-col items-center">
      {/* Main image */}
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-lg cursor-zoom-in"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-video">
          <img
            src={normalizedImages[current]}
            alt="Property"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Navigation */}
        {normalizedImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors"
              aria-label="Previous image"
            >
              ◀
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors"
              aria-label="Next image"
            >
              ▶
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white px-2 py-1 rounded text-sm">
              {current + 1} / {normalizedImages.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {normalizedImages.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto max-w-full pb-2 scrollbar-hide">
          {normalizedImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setCurrent(idx)}
              className={`w-24 h-20 object-cover rounded cursor-pointer border-2 transition-all ${
                current === idx
                  ? "border-yellow-400 scale-105"
                  : "border-transparent hover:border-gray-300"
              }`}
              alt={`Thumbnail ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => {
            setIsModalOpen(false);
            setZoom(1);
          }}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setIsModalOpen(false)}
          >
            ✕
          </button>
          <img
            src={normalizedImages[current]}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain transition-transform"
            style={{ transform: `scale(${zoom})` }}
            onWheel={(e) => {
              e.stopPropagation();
              setZoom((z) => Math.min(Math.max(1, z + e.deltaY * -0.001), 3));
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
