import { useState, useEffect } from "react";

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  // fallback: if only one image, duplicate it
  const filledImages = images.length > 1 ? images : [...images, ...images, ...images];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + filledImages.length) % filledImages.length);
  const next = () => setCurrent((c) => (c + 1) % filledImages.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-2xl">
        <img
          src={filledImages[current]}
          alt="Property"
          className="w-full h-96 object-cover rounded-lg"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
        >
          ▶
        </button>
      </div>

      <div className="flex gap-2 mt-4 overflow-x-auto max-w-full">
        {filledImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            onClick={() => setCurrent(idx)}
            className={`w-20 h-16 object-cover rounded cursor-pointer border-2 ${
              current === idx ? "border-yellow-400" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
