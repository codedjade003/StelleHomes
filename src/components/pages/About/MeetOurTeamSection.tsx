import type { JSX } from "react";
import img_1 from "../../../assets/images/about/team/img_1.png";
import img_2 from "../../../assets/images/about/team/img_2.png";

export const MeetOurTeamSection = (): JSX.Element => {
  const teamMembers = [
    {
      id: 1,
      name: "Stella Dennis",
      position: "Founder & CEO",
      description:
        "With over 15 years of experience in international real estate and finance, Stella Dennis founded Stelle Homes to help investors navigate cross-border property markets. Her expertise spans Nigerian and UK, with a particular focus on investment strategy and market analysis.",
      image: img_1,
    },
    {
      id: 2,
      name: "Rhodell Sherman",
      position: "Head of International Properties",
      description:
        "Based in our London office, Rhodell brings 12 years of experience in European and North American real estate markets. She specializes in helping Nigerian clients identify and secure premium investment properties abroad, with particular expertise in UK property law and investment structures.",
      image: img_2,
    },
    {
      id: 3,
      name: "Dr Itohan Idugboe",
      position: "Head of Nigerian Properties",
      description:
        "A respected figure in Lagos real estate, Itohan leads our Nigerian property division, helping international clients navigate the local market. Her deep connections with developers and extensive knowledge of emerging neighborhoods ensure our clients access the best opportunities.",
      image: img_1,
    },
    {
      id: 4,
      name: "Idil Hussein",
      position: "Legal Compliance Director",
      description:
        "With a background in international property law, Idil ensures all transactions meet legal requirements across multiple jurisdictions. Her expertise is crucial in simplifying the complex regulatory landscape of cross-border real estate investment.",
      image: img_2,
    },
  ];

  return (
    <div className="w-full overflow-x-auto bg-white scrollbar-hide">
      <div className="flex px-5 -mt-[50px] w-max h-auto py-8 gap-8 md:h-[854px] md:py-32 md:gap-0">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-center relative gap-4"
          >
            {/* Image container - Reversed dimensions */}
            <div className="relative w-[300px] h-[400px] flex-shrink-0 mx-auto md:w-[447px] md:h-[591px]">
              <div className="relative w-[300px] h-[350px] top-[24px] left-[10px] md:w-[418px] md:h-[501px] md:top-[15px] md:left-[19px]">
                <div className="absolute w-[300px] h-[350px] bg-[#f7bd01] rounded-[10px] top-[60px] md:top-[54px] md:w-[418px] md:h-[447px] md:rounded-[15px]" />
                <img
                  className="absolute top-0 left-0 w-[300px] h-[415px] object-cover md:w-[418px] md:h-[501px]"
                  alt={member.name}
                  src={member.image}
                />
              </div>
            </div>

            {/* Text card - Reversed dimensions */}
            <div className="relative top-[60px] md:top-0 flex-shrink-0 w-[90vw] max-w-[320px] mx-auto md:w-auto md:max-w-none">
              <div className="font-[MAINLUX-Regular] flex flex-col w-[350px] h-[350px] 
                              items-start gap-3 px-5 pt-10 pb-6 
                              bg-[#d9d9d9] rounded-[10px] 
                              md:w-[567px] md:h-[450px] md:gap-3.5 
                              md:px-[40px] md:pt-[83px] md:pb-9 md:rounded-[15px]">

                <div className="[-webkit-text-stroke:0.55px_#000000] text-black text-[28px] font-normal leading-[32px] md:text-[40px] md:leading-[42px]">
                  {member.name}
                </div>

                <div className="[-webkit-text-stroke:0.55px_#000000] text-black text-[22px] font-normal leading-[26px] md:text-3xl md:leading-[32px]">
                  {member.position}
                </div>

                <p className="font-[Montserrat] text-black text-base leading-[20px] 
                              md:text-xl md:leading-[24px] w-full break-words overflow-hidden">
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