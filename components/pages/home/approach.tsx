import { CTAButton } from "@/components/shared/buttons/buttons";
import { H1 } from "@/components/typography/headings";
import { Paragraph } from "@/components/typography/paragraph";

const gridData = [
  {
    heading: "Project Definition",
    content:
      "Moduref always starts by outlining the project concept (location, feedstock, site access, capacity, operating requirements, product slates and product evacuation) from a technical and commercial perspective to establish feasibility.",
  },
  {
    heading: "Concept to Engineering",
    content:
      "Moduref develops the technical foundation required to move from concept to Front End Engineering and Design (FEED) or Basic Design, Detailed Design & Engineering (DD&E), government license approvals, and fabrication-ready documentation.",
  },

  {
    heading: "O&M-based Design",
    content:
      "Moduref designs with Operations and Maintenance (O&M) in mind, giving due consideration to the various stages of operation including but not limited to: feed entry & transformation, products separation, utilities, instrumentation, controls and plant safety. Moduref plant designs are operations-focused allowing for optimum operator interference and low maintenance cost.",
  },
  {
    heading: "Fabrication and Startup",
    content:
      "Moduref designs and fabricates all process units to meet the highest standards, utilizing a procurement strategy that minimizes project schedule by accelerating long lead times. Moduref performs Factory Acceptance Tests (FAT) on all units, assuring test fit and minimizing onsite fabrication. Units are also supplied on skids shipped as break-bulks, thus expediting onsite installation, commissioning and startup.",
  },
];

function GridItem({
  heading,
  content,
  index,
}: {
  heading: string;
  content: string;
  index: number;
}) {
  return (
    <div className="p-8 rounded-lg shadow-1x flex-col gap-[1.51875rem] bg-white">
      <div className="center-content h-[3.16875rem] w-[3.16875rem] border-[2.7px] text-[1.7125rem] border-(--color-primary) rounded-full font-fifties ">
        {index}
      </div>

      <div className="flex-col gap-3.5">
        <h2 className="text-[1.75rem] leading-[1.43]">{heading}</h2>
        <Paragraph>{content}</Paragraph>
      </div>
    </div>
  );
}

export default function Approach() {
  return (
    <section className="section bg-(--color-gray) flex-gap-56 ">
      <div className="flex-col gap-12">
        <div className="text-center">
          <H1>The Moduref Approach</H1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] gap-6">
          {gridData.map((item, i) => (
            <GridItem
              heading={item.heading}
              content={item.content}
              index={i + 1}
              key={i + 1}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="center-content">
        <CTAButton href="/about">Learn more</CTAButton>
      </div>
    </section>
  );
}
