import { type JSX } from "react";
import luxuryLagos from "../../../assets/images/home/properties/luxury-homes-in-lagos.jpg";
import premiumAbuja from "../../../assets/images/home/properties/premium-apartments-in-abuja.jpg";
import waterfrontDubai from "../../../assets/images/home/properties/waterfront-properties-in-dubai.jpg";
import vacationToronto from "../../../assets/images/home/properties/vacation-homes-in-toronto.jpg";
import investmentLondon from "../../../assets/images/home/properties/investment-opportunities-in-london.jpg";
import img6 from "../../../assets/images/home/properties/img_6.jpg";

const propertyData = [
  { id: 1, title: "Luxury Homes in Lagos", image: luxuryLagos },
  { id: 2, title: "Premium Apartments in Abuja", image: premiumAbuja },
  { id: 3, title: "Waterfront Properties in Dubai", image: waterfrontDubai },
  { id: 4, title: "Vacation Homes in Toronto", image: vacationToronto },
  { id: 5, title: "Investment Opportunities in London", image: investmentLondon },
  { id: 6, title: "", image: img6 },
];

export const PropertiesSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-[#F7BD01] py-24 my-16"
      aria-label="Properties showcase"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 px-4">
        <p className="[font-family:'Montserrat',Helvetica] font-medium text-black text-[36px] text-center tracking-[-0.55px] leading-[normal] mb-6">
          Discover exceptional real estate opportunities in
          <br />
          Nigeria and around the world
        </p>

        {/* First row (shrinks on small screens, exact pixels on lg) */}
        <div className="mx-auto w-full max-w-[1066px] flex justify-start gap-4 sm:gap-6 mb-6">
          {/* 396 × 250 */}
          <div className="relative overflow-hidden rounded-[162px] group flex-[1_1_37.14%] 
                          h-[180px] sm:h-auto aspect-auto sm:aspect-[396/250]">
            <img
              src={propertyData[0].image}
              alt={propertyData[0].title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-100 brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-500 group-hover:opacity-0">
              <span className="text-white font-semibold text-xs sm:text-base md:text-lg lg:text-xl text-center px-2 sm:px-4">
                {propertyData[0].title}
              </span>
            </div>
          </div>

          {/* 429 × 251 */}
          <div className="relative overflow-hidden rounded-[162px] group flex-[1_1_40.25%] 
                          h-[180px] sm:h-auto aspect-auto sm:aspect-[429/251] lg:flex-none lg:w-[429px]">
            <img
              src={propertyData[1].image}
              alt={propertyData[1].title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-100 brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-500 group-hover:opacity-0">
              <span className="text-white font-semibold text-xs sm:text-base md:text-lg lg:text-xl text-center px-2 sm:px-4">
                {propertyData[1].title}
              </span>
            </div>
          </div>

          {/* 241 × 251 */}
          <div className="relative overflow-hidden rounded-[162px] group flex-[1_1_22.61%] 
                          h-[180px] sm:h-auto aspect-auto sm:aspect-[241/251] lg:flex-none lg:w-[241px]">
            <img
              src={propertyData[2].image}
              alt={propertyData[2].title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-100 brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-500 group-hover:opacity-0">
              <span className="text-white font-semibold text-xs sm:text-base md:text-lg lg:text-xl text-center px-2 sm:px-4">
                {propertyData[2].title}
              </span>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="mx-auto w-full max-w-[1066px] flex justify-start gap-4 sm:gap-6">
          {/* 241 × 250 */}
          <div className="relative overflow-hidden rounded-[162px] group flex-[1_1_22.61%] 
                          h-[180px] sm:h-auto aspect-auto sm:aspect-[241/250] lg:flex-none lg:w-[241px]">
            <img
              src={propertyData[3].image}
              alt={propertyData[3].title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-100 brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-500 group-hover:opacity-0">
              <span className="text-white font-semibold text-xs sm:text-base md:text-lg lg:text-xl text-center px-2 sm:px-4">
                {propertyData[3].title}
              </span>
            </div>
          </div>

          {/* 396 × 250 */}
          <div className="relative overflow-hidden rounded-[162px] group flex-[1_1_37.14%] 
                          h-[180px] sm:h-auto aspect-auto sm:aspect-[396/250]">
            <img
              src={propertyData[0].image}
              alt={propertyData[0].title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-100 brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-500 group-hover:opacity-0">
              <span className="text-white font-semibold text-xs sm:text-base md:text-lg lg:text-xl text-center px-2 sm:px-4">
                {propertyData[0].title}
              </span>
            </div>
          </div>

          {/* 429 × 250 (blank) */}
          <div className="relative overflow-hidden rounded-[162px] group flex-[1_1_38.53%] 
                          h-[180px] sm:h-auto aspect-auto sm:aspect-[429/250] lg:flex-none lg:w-[429px]">
            <img
              src={propertyData[5].image}
              alt={propertyData[5].title || "Property image"}
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-100 brightness-75"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
