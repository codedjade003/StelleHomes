import { useEffect } from "react";
import Gallery from "./Gallery";
import ProposalForm from "./ProposalForm";
import type { PropertyData } from "./types";

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: PropertyData | null;
}

const PropertyModal = ({ isOpen, onClose, property }: PropertyModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      ></div>

      {/* modal */}
      <div className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-2">{property.title}</h2>
        <p className="text-gray-600 mb-4">{property.location}</p>
        <div className="text-yellow-500 font-bold text-lg mb-4">{property.price}</div>

        {/* Gallery */}
        <Gallery images={property.images || [property.image]} />

        {/* Details */}
        <div className="mt-6 space-y-2">
          {property.bedrooms && <p><strong>Bedrooms:</strong> {property.bedrooms}</p>}
          {property.bathrooms && <p><strong>Bathrooms:</strong> {property.bathrooms}</p>}
          {property.complex && <p><strong>Complex:</strong> {property.complex}</p>}
          <p><strong>Area:</strong> {property.area}</p>
          <p className="mt-4">{property.description}</p>
        </div>

        {/* Proposal Form */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Send a Proposal</h3>
          <ProposalForm />
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;
