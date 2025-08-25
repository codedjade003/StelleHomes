import { type JSX } from "react";

import img_2 from "../../../assets/images/services/advisory/img_2.png";
import img_1 from "../../../assets/images/services/advisory/img_1.png";
import img_3 from "../../../assets/images/services/advisory/img_3.png";
import img_4 from "../../../assets/images/services/advisory/img_4.png";
import img_5 from "../../../assets/images/services/advisory/img_5.png";
import img_6 from "../../../assets/images/services/advisory/img_6.png";
import img_7 from "../../../assets/images/services/advisory/img_7.png";
import img_8 from "../../../assets/images/services/advisory/img_8.png";
import img_9 from "../../../assets/images/services/advisory/img_9.png";
import img_10 from "../../../assets/images/services/advisory/img_10.png";
import img_11 from "../../../assets/images/services/advisory/img_11.png";
import img_12 from "../../../assets/images/services/advisory/img_12.png";
import img_13 from "../../../assets/images/services/advisory/img_13.png";
import img_14 from "../../../assets/images/services/advisory/img_14.png";
import img_15 from "../../../assets/images/services/advisory/img_15.png";
import img_16 from "../../../assets/images/services/advisory/img_16.png";
import img_17 from "../../../assets/images/services/advisory/img_17.png";
import img_18 from "../../../assets/images/services/advisory/img_18.png";
import img_19 from "../../../assets/images/services/advisory/img_19.png"; // Nigerian property card
import img_20 from "../../../assets/images/services/advisory/img_20.png"; // International property card
import img_21 from "../../../assets/images/services/advisory/img_21.png"; // Nigerian Properties for International Investors section
import img_22 from "../../../assets/images/services/advisory/img_22.png"; // International Properties for Nigerian Investors section
import svg_1  from "../../../assets/images/services/advisory/svg_1.svg";  // Strategic Investment Advisory section
import img_23 from "../../../assets/images/services/advisory/img_23.png"; // Cross-Border Legal Guidance section


// Types for our services
interface Service {
  id: number;
  title: string;
  image: string;
  description: string[];
}

// Data for all services
const servicesData = {
  internationalInvestor: [
    { id: 1, title: "Market Research and Analysis", image: img_1, description: [ "Detailed insights into emerging neighborhoods and growth corridors", "Rental yield and capital appreciation projections", "Risk assessment and mitigation strategies", "Comparative analysis of different Nigerian cities and property types", ] },
    { id: 2, title: "Property Acquisition", image: img_2, description: [ "Sourcing properties that meet your investment criteria", "Due diligence and verification of property documentation", "Negotiation with sellers and developers", "Structuring transactions to optimize tax efficiency", ] },
    { id: 3, title: "Legal and Compliance Support", image: img_3, description: [ "Guidance on foreign investment regulations", "Title verification and transfer assistance", "Contract review and documentation", "Tax compliance and planning", ] },
    { id: 4, title: "Property Management", image: img_4, description: [ "Tenant sourcing and screening", "Rent collection and remittance", "Property maintenance and inspections", "Regular financial reporting and performance updates", ] },
    { id: 5, title: "Exit Strategy Planning", image: img_5, description: [ "Market timing guidance for property disposal", "Buyer identification and negotiation", "Capital gains optimization", "Reinvestment opportunities", ] },
  ],
  nigerianInvestor: [
    { id: 1, title: "Global Market Navigation", image: img_6, description: [ "Identification of suitable investment destinations based on your goals", "Comparative analysis of different markets and property types", "Currency risk management strategies", "Yield and appreciation projections across markets", ] },
    { id: 2, title: "Property Sourcing and Selection", image: img_7, description: [ "Access to exclusive listings in premium locations", "Virtual and in-person property viewings", "Detailed property analysis and investment case", "Neighborhood and amenity assessments", ] },
    { id: 3, title: "Transaction Facilitation", image: img_8, description: [ "Guidance on foreign ownership regulations", "Coordination with international legal and tax advisors", "Currency exchange and fund transfer assistance", "Remote closing capabilities", ] },
    { id: 4, title: "Financing Assistance", image: img_9, description: [ "Introduction to international mortgage providers", "Structuring of financing options", "Guidance on down payment requirements", "Assistance with mortgage application documentation", ] },
    { id: 5, title: "Ongoing Management", image: img_10, description: [ "International property management coordination", "Tenant placement and management", "Regular property inspections", "Income repatriation assistance", ] },
  ],
  advisory: [
    { id: 1, title: "Portfolio Strategy Development", image: img_11, description: [ "Assessment of current investments and goals", "Risk tolerance and time horizon analysis", "Geographic and property type diversification planning", "Return optimization strategies", ] },
    { id: 2, title: "Market Intelligence", image: img_12, description: [ "Regular market reports and analysis", "Emerging trend identification", "Regulatory change updates", "Economic indicator monitoring", ] },
    { id: 3, title: "Opportunity Identification", image: img_13, description: [ "Off-market and pre-launch opportunities", "Distressed property acquisitions", "Development and renovation projects", "Alternative real estate investments", ] },
    { id: 4, title: "Performance Analysis", image: img_14, description: [ "Regular portfolio performance reviews", "Yield enhancement recommendations", "Hold/sell analysis for existing properties", "Reinvestment strategies", ] },
  ],
  legal: [
    { id: 1, title: "Ownership Structures", image: img_15, description: [ "Individual vs. corporate ownership options", "Trust and foundation considerations", "Joint venture structures", "Special purpose vehicles", ] },
    { id: 2, title: "Documentation and Contracts", image: img_16, description: [ "Purchase agreements review and negotiation", "Lease agreement standardization", "Property management contracts", "Service level agreements", ] },
    { id: 3, title: "Regulatory Compliance", image: img_17, description: [ "Foreign ownership restrictions", "Anti-money laundering requirements", "Beneficial ownership disclosure", "Tax reporting obligations", ] },
    { id: 4, title: "Estate Planning", image: img_18, description: [ "Property inheritance planning", "Cross-border will considerations", "Succession planning for international assets", "Tax-efficient wealth transfer strategies", ] },
  ],
};

const ServiceCard = ({ service, layout = "default" }: { service: Service; layout?: string }) => {
  return (
    <div
      className={`
        relative w-full max-w-[568px] 
        h-auto flex flex-col items-start
        md:h-[172px] 
        ${layout === "overflow" ? "overflow-hidden" : ""} 
      `}
    >
      <img
        className="relative top-0 left-0 md:absolute md:w-[130px] md:h-[138px] md:top-1 md:left-[9px]"
        alt={service.title}
        src={service.image}
      />
      <div
        className="w-full pl-0 pr-0 mt-[8px] relative top-auto md:pl-40 md:pr-4 md:absolute md:top-1"
      >
        <h4 className="[-webkit-text-stroke:0.38px_#000000] font-[MAINLUX-Light] text-black text-[28.2px] leading-[29.3px] mb-1">
          {service.title}
        </h4>
        <ul className="list-disc pl-5 font-[Montserrat] text-black text-[14.1px] leading-[16.9px] marker:text-[10px] marker:text-black">
          {service.description.map((item, idx) => (
            <li key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const SectionHeader = ({
  title,
  description,
  image,
  reverse = false,
}: {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto flex flex-col gap-8 mb-16 
        md:flex-row 
        ${reverse ? "md:flex-row-reverse md:ml-[30px]" : ""}`}
    >
      {/* Text */}
      <div
        className={`w-full flex flex-col justify-center 
          
          ${reverse ? "" : ""}`}
      >
        <h2 className="[-webkit-text-stroke:1.54px_#000000] font-[MAINLUX-Regular] text-black mb-4 text-4xl leading-snug 
          md:text-5xl 
          lg:text-6xl">
          {title}
        </h2>
        <p className="font-[Montserrat] text-black text-base leading-relaxed 
          md:text-lg 
          lg:text-xl">
          {description}
        </p>
      </div>

      {/* Image */}
      <div
        className={`w-full 
          md:w-[550px] md:flex-shrink-0 
          ${reverse ? "md:ml-[-50px] md:mr-0" : ""}`}
      >
        <div className="bg-black bg-opacity-20 rounded-[15px] overflow-hidden w-full h-auto">
          <img
            className="w-full h-auto object-cover aspect-[1.7] 
              lg:max-w-none lg:max-h-none"
            alt={title}
            src={image}
          />
        </div>
      </div>
    </div>
  );
};


// Reusable Services Grid Component
const ServicesGrid = ({ services, title }: { services: Service[]; title: string }) => {
  return (
    <div className="mb-10">
      <h3 className="font-[MAINLUX-semibold] text-black text-[35px] leading-[36.4px] mb-12">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-6 
        md:grid-cols-2 md:gap-12">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            layout={index % 3 === 0 ? "overflow" : "default"} 
          />
        ))}
      </div>
    </div>
  );
};

// Property Management Section Component
export const PropertyManagementSection = () => {
  return (
    <section className="py-20">
      {/* Section header */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="[-webkit-text-stroke:1.54px_#000000] font-[MAINLUX-Regular] text-black text-4xl leading-[62.4px] mb-8 
          md:text-6xl">
          Comprehensive Property Management
        </h2>
        <p className="font-[Montserrat] text-black text-xl leading-[24px]">
          Our property management services ensure your investments are well-maintained and profitable, 
          whether they're local or international properties.
        </p>
      </div>

      {/* Cards container */}
      <div className="flex flex-col 
        lg:flex-row">
        {/* Nigerian Properties Card */}
        <div className="px-4 
          lg:w-1/2">
          <div className="bg-[#ffbf00] rounded-[15px] overflow-hidden flex flex-col h-full">
            <div className="h-[383px] w-full overflow-hidden rounded-t-[15px]">
              <img
                className="w-full h-full object-cover"
                alt="Nigerian property management"
                src={img_19}
              />
            </div>

            <div className="p-8 ml-4 flex-1 flex flex-col justify-start">
              <h3 className="[-webkit-text-stroke:0.38px_#000000] font-[MAINLUX-Regular] text-black text-[28.2px] leading-[29.3px] mb-4">
                For Nigerian Properties
              </h3>
              <ul className="list-disc pl-10 font-[Montserrat] text-black text-[15px] leading-[18px] space-y-2 marker:text-[10px] marker:text-black">
                <li>Local team with deep market knowledge</li>
                <li>Regular property inspections and maintenance</li>
                <li>Tenant sourcing, screening, and management</li>
                <li>Rent collection and financial reporting</li>
                <li>Legal compliance and documentation</li>
                <li>Tax filing assistance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* International Properties Card */}
        <div className="px-4 
          lg:w-1/2">
          <div className="bg-[#ffbf00] rounded-[15px] overflow-hidden flex flex-col h-full">
            <div className="h-[383px] w-full overflow-hidden rounded-t-[15px]">
              <img
                className="w-full h-full object-cover"
                alt="International property management"
                src={img_20}
              />
            </div>

            <div className="p-8 ml-4 flex-1 flex flex-col justify-start">
              <h3 className="[-webkit-text-stroke:0.38px_#000000] font-[MAINLUX-Regular] text-black text-[28.2px] leading-[29.3px] mb-4">
                For International Properties
              </h3>
              <ul className="list-disc pl-10 font-[Montserrat] text-black text-[15px] leading-[18px] space-y-2  marker:text-[10px] marker:text-black">
                <li>Coordination with trusted partners in each location</li>
                <li>Tenant placement and management</li>
                <li>Regular condition reports and updates</li>
                <li>Income collection and repatriation</li>
                <li>Annual tax preparation assistance</li>
                <li>Property enhancement recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export const AdvisorySection = (): JSX.Element => {
  return (
    <section className="container mx-auto px-4 py-20 max-w-[1447px]">
      {/* Nigerian Properties for International Investors Section */}
      <div className="mb-4">
        <SectionHeader
          title="Nigerian Properties for International Investors"
          description="Nigeria's real estate market offers compelling opportunities for international investors seeking strong returns and portfolio diversification. With rapid urbanization, a growing middle class, and infrastructure development, strategic property investments in key Nigerian cities can deliver both rental income and capital appreciation."
          image={img_21}
        />
        <ServicesGrid
          services={servicesData.internationalInvestor}
          title="Our services for international investors include"
        />
      </div>

      {/* International Properties for Nigerian Investors Section */}
      <div className="mb-4">
        <SectionHeader
          title="International Properties for Nigerian Investors"
          description="Investing in international real estate markets offers Nigerian clients portfolio diversification, wealth preservation, and access to stable rental income in foreign currencies. We specialize in connecting Nigerian investors with carefully selected properties in the UK, UAE, US, and Canada, navigating the complexities of cross-border transactions."
          image={img_22}
          reverse
        />
        <ServicesGrid
          services={servicesData.nigerianInvestor}
          title="Our services for Nigerian investors include"
        />
      </div>

      {/* Comprehensive Property Management Section */}
      <PropertyManagementSection />

      {/* Strategic Investment Advisory Section */}
      <div className="mb-4">
        <SectionHeader
          title="Strategic Investment Advisory"
          description="Our investment advisory services help you build a diversified real estate portfolio aligned with your financial goals. We provide data-driven insights and personalized recommendations to optimize your property investments across different markets."
          image={svg_1}
        />
        <ServicesGrid
          services={servicesData.advisory}
          title="Our advisory services include"
        />
      </div>

      {/* Cross-Border Legal Guidance Section */}
      <div>
        <SectionHeader
          title="Cross-Border Legal Guidance"
          description="Navigating the legal aspects of international real estate transactions requires specialized expertise. Our team works with qualified legal professionals across multiple jurisdictions to ensure your investments are structured correctly and comply with all relevant regulations."
          image={img_23}
          reverse
        />
        <ServicesGrid
          services={servicesData.legal}
          title="Our legal guidance covers"
        />
      </div>
    </section>
  );
};