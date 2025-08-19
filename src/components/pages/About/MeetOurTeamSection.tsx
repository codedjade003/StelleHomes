import type { JSX } from "react";
import img_1 from "../../../assets/images/about/team/img_1.png";
import img_2 from "../../../assets/images/about/team/img_2.png";
import img_3 from "../../../assets/images/about/team/img_3.png";  
import img_4 from "../../../assets/images/about/team/img_4.png";

export const MeetOurTeamSection = (): JSX.Element => {
  const teamMembers = [
    {
      id: 1,
      name: "Stella Dennis",
      position: "Founder & CEO",
      description:
        "With over 15 years of experience in international real estate and finance, Stella Dennis founded Stelle Homes to help investors navigate cross-border property markets. Her expertise spans Nigerian, UK, Europe and US real estate, with a particular focus on investment strategy and market analysis.",
      image: img_1,
    },
    {
      id: 2,
      name: "Rhodell Williams",
      position: "Head of International Properties",
      description:
        "Based in our London office, Rhodell brings 12 years of experience in European and North American real estate markets. She specializes in helping Nigerian clients identify and secure premium investment properties abroad, with particular expertise in UK property law and investment structures.",
      image: img_2,
    },
    {
      id: 3,
      name: "Edewede Osara",
      position: "Head of Nigerian Properties",
      description:
        "A respected figure in Lagos real estate, Edewede leads our Nigerian property division, helping international clients navigate the local market. His deep connections with developers and extensive knowledge of emerging neighborhoods ensure our clients access the best opportunities.",
      image: img_3,
    },
    {
      id: 4,
      name: "Amina Okafor",
      position: "Legal Compliance Director",
      description:
        "With a background in international property law, Amina ensures all transactions meet legal requirements across multiple jurisdictions. Her expertise is crucial in simplifying the complex regulatory landscape of cross-border real estate investment.",
      image: img_4,
    },
  ];

  return (
    <div className="w-full overflow-x-auto bg-white scrollbar-hide">

      <div className="flex px-5 -mt-[50px] w-max h-[854px] max-sm:h-auto max-sm:py-32 max-sm:gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-center relative max-sm:flex max-sm:gap-6"
          >
          <div className="relative w-[447px] h-[591px] flex-shrink-0 max-sm:w-[300px] max-sm:h-[400px] max-sm:mx-auto">
            <div className="relative w-[418px] h-[501px] top-[15px] left-[19px] max-sm:w-[300px] max-sm:h-[350px] max-sm:top-[24px] max-sm:left-[10px]">
              <div className="absolute top-[54px] w-[418px] h-[447px] bg-[#f7bd01] rounded-[15px] max-sm:top-0 max-sm:w-[300px] max-sm:h-[350px] max-sm:rounded-[10px]" />
              <img
                className="absolute w-[418px] h-[501px] sm:top-0 left-0 object-cover max-sm:w-[300px] max-sm:h-[415px] max-sm:bottom-0"
                alt={member.name}
                src={member.image}
              />
            </div>
          </div>

          {/* Text card - Fixed width + fixed height */}
          <div className="flex-shrink-0 max-sm:w-[90vw] max-sm:max-w-[320px] max-sm:mx-auto">
            <div className="font-[MAINLUX-Regular] flex flex-col w-[567px] h-[450px] 
                            items-start gap-3.5 px-[40px] pt-[83px] pb-9 
                            bg-[#d9d9d9] rounded-[15px] 
                            max-sm:w-[350px] max-sm:h-[350px] max-sm:gap-3 
                            max-sm:px-5 max-sm:pt-10 max-sm:pb-6 max-sm:rounded-[10px]">

              <div className="[-webkit-text-stroke:0.55px_#000000] text-black text-[40px] font-normal leading-[42px] max-sm:text-[28px] max-sm:leading-[32px]">
                {member.name}
              </div>

              <div className="[-webkit-text-stroke:0.55px_#000000] text-black text-3xl font-normal leading-[32px] max-sm:text-[22px] max-sm:leading-[26px]">
                {member.position}
              </div>

              <p className="font-[Montserrat] text-black text-xl leading-[24px] 
                            max-sm:text-base max-sm:leading-[20px] max-sm:w-full max-sm:break-words overflow-hidden">
                {member.description}
              </p>
            </div>
          </div>

          </div>
        ))}
      </div>
    </div>
  );
};
