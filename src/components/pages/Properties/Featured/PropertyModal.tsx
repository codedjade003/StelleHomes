import { useEffect, useState } from "react";
import Gallery from "./Gallery.tsx";
import ProposalForm from "./ProposalForm.tsx";
import type { PropertyData } from "./types.ts";

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: PropertyData | null;
}

const TAG_COLORS = [
  "bg-red-100 text-red-700 border border-red-300",
  "bg-blue-100 text-blue-700 border border-blue-300",
  "bg-green-100 text-green-700 border border-green-300",
  "bg-yellow-100 text-yellow-700 border border-yellow-300",
  "bg-purple-100 text-purple-700 border border-purple-300",
];

const PropertyModal = ({ isOpen, onClose, property }: PropertyModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = "unset";
      setIsVisible(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !property) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      {/* modal */}
      <div className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide z-10 transform transition-transform duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-600 hover:text-black text-xl bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
        >
          ✕
        </button>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Gallery + Features */}
        <div className="flex flex-col">
          <Gallery images={property.images || [property.image]} />

        {/* ✅ Features under gallery (desktop only) */}
        {property.features && property.features.length > 0 && (
          <div className="hidden md:flex flex-wrap gap-2 mt-4">
            {property.features.map((feature, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  TAG_COLORS[idx % TAG_COLORS.length]
                }`}
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        </div>

          {/* Right: Details + Form */}
          <div className="font-[Montserrat] flex flex-col">
            <h2 className="font-[MAINLUX-SemiBold] text-2xl font-semibold mb-2">
              {property.title}
            </h2>
            <p className="text-gray-600 mb-4">{property.location}</p>
            <div className="text-yellow-500 font-bold text-lg mb-6">
              {property.price}
            </div>

            <div className="space-y-2 mb-6">
              {property.bedrooms && (
                <p>
                  <strong>Bedrooms:</strong> {property.bedrooms}
                </p>
              )}
              {property.bathrooms && (
                <p>
                  <strong>Bathrooms:</strong> {property.bathrooms}
                </p>
              )}
              {property.complex && (
                <p>
                  <strong>Complex:</strong> {property.complex}
                </p>
              )}
              <p>
                <strong>Area:</strong> {property.area}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {property.description}
            </p>

            {/* ✅ Features under details (mobile only) */}
            {property.features && property.features.length > 0 && (
              <div className="flex md:hidden flex-wrap gap-2 mb-6">
                {property.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      TAG_COLORS[idx % TAG_COLORS.length]
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}


            <ProposalForm propertyTitle={property.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
