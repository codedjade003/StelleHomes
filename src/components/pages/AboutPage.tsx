import { MeetOurTeamSection } from "./About/MeetOurTeamSection";
import { MissionStatementSection } from "./About/MissionStatementSection";
import { OurApproachSection }  from "./About/OurApproachSection";
import { ValuesSection } from "./About/ValuesSection";

export default function AboutPage() {
  return (
    <>
      <MissionStatementSection />

      {/* Values Section with Title */}
      <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24 mt-[111px] -mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[MAINLUX-Regular] text-black [-webkit-text-stroke:1px_#000000]">
          Values
        </h2>
      </section>
      <ValuesSection />

      {/* Meet Our Team Section with Title */}
      <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[MAINLUX-Regular] text-black [-webkit-text-stroke:1px_#000000]">
          Meet Our Team
        </h2>
      </section>
      <MeetOurTeamSection />
      <OurApproachSection />
    </>
  );
}
