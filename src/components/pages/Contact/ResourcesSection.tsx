import { type JSX } from "react";
import frame from "../../../assets/images/contact/frame-2.png";

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
}

export const ResourcesSection = (): JSX.Element => {
  const resources: ResourceItem[] = [
    {
      id: "market-reports",
      title: "Market Reports",
      description:
        "Quarterly analysis of property market trends in Nigeria, UK, UAE, and other key investment destinations.",
      buttonText: "Download ecopy",
    },
    {
      id: "first-time-buyer-guide",
      title: "First-Time Buyer's Guide",
      description:
        "Essential information and advice for first-time property buyers in both Nigerian and international markets.",
      buttonText: "Download ecopy",
    },
    {
      id: "property-calculator",
      title: "Property Cost Calculator",
      description:
        "Excel template to calculate all costs associated with property purchase, including taxes, fees, and maintenance.",
      buttonText: "Download ecopy",
    },
  ];

  const handleDownload = (resourceId: string) => {
    console.log(`Downloading resource: ${resourceId}`);
  };

  return (
    <section className="w-full bg-[#fff9ed] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1050px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        {/* Left Column: Frame Image */}
        <div className="w-full lg:w-[45%] xl:w-[50%] flex justify-center">
          <img
            className="w-full max-w-[564px] h-auto object-contain"
            alt="Resources illustration"
            src={frame}
          />
        </div>

        {/* Right Column: Title + Resource Cards */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <h2 className="font-[Montserrat] font-normal text-3xl sm:text-4xl md:text-[42px] text-black leading-tight sm:leading-snug md:leading-[48px]">
            Helpful Resources
          </h2>

          <div className="flex flex-col gap-5">
            {resources.map((resource) => (
              <article
                key={resource.id}
                className="rounded-xl border border-[#e2dfd8] bg-[#fff9ed] p-4 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-[Montserrat] font-normal text-xl sm:text-2xl md:text-[26px] leading-snug mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-black text-base sm:text-[15px] font-[Montserrat] leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                <button
                  onClick={() => handleDownload(resource.id)}
                  className="w-full md:w-[157px] h-[48px] md:h-[52px] flex items-center justify-center rounded-[12px] md:rounded-[15px] bg-[#d0c8a0] text-[#fffdf9] font-[Montserrat] text-base font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#d0c8a0] focus:ring-offset-2 transition"
                  aria-label={`Download ${resource.title}`}
                >
                  {resource.buttonText}
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
