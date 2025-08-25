import type { PropertyData } from "./types";
import bedIcon from "../../../../assets/images/properties/bed.png";
import complexIcon from "../../../../assets/images/properties/complex.png";
import bathroomIcon from "../../../../assets/images/properties/bathroom.svg";
import areaIcon from "../../../../assets/images/properties/area.svg";
import locationIcon from "../../../../assets/images/properties/location.svg";

interface PropertyCardProps {
  property: PropertyData;
  onClick?: () => void;
}

export const PropertyCard = ({ property, onClick }: PropertyCardProps) => {
  return (
    <div
      className={`w-screen relative ${property.backgroundColor} overflow-hidden`}
    >
      <div
        className="mx-auto max-w-[1240px] px-4 py-10 lg:py-16 flex flex-col lg:flex-row gap-6 lg:gap-12
        rounded-lg transform transition duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]}"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-full lg:w-[610px] h-[240px] lg:h-[404px] object-cover rounded-lg transition-transform duration-300 ease-out hover:scale-105"
            alt={property.title}
            src={property.image}
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center transition-all duration-300 ease-out hover:[&>*]:scale-[1.01]">
          <h3 className="text-xl lg:text-[35px] font-semibold mb-2">{property.title}</h3>
          <div className="flex items-center text-gray-700 text-sm mb-6">
            <img src={locationIcon} alt="Location" className="w-4 h-4 mr-2" />
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

          <p className="font-[Montserrat] text-sm lg:text-[15px] text-black max-w-[518px] mb-4">
            {property.description}
          </p>

          {/* Debug button to open modal */}
          <button
            onClick={() => {
              console.log("Open Modal button clicked for:", property.title);
              onClick?.();
            }}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Open Modal
          </button>
        </div>
      </div>
    </div>
  );
};
