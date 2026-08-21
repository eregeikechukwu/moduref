import { customIconMap } from "@/components/icons/customIcons";
import { iconMap } from "@/components/icons/iconsax";
import { CTAButton } from "@/components/shared/buttons/buttons";
import { RadarTag } from "@/components/shared/radarTag";
import { H1 } from "@/components/typography/headings";
import Image from "next/image";
/*
width: 341px;
  height: 272.4px;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 19px;
  padding: 27px 23px;
  border-radius: 15.3px;
  background-color: rgba(255, 255, 255, 0.08);
*/
interface GridDataProps {
  icon: keyof typeof customIconMap;
  heading: string;
  list: string[];
}

const gridData: GridDataProps[] = [
  {
    icon: "fileIcon",
    heading: "Pre-Development Studies and Engineering",
    list: ["Feasibility studies", "FEED", "DD&E"],
  },
  {
    icon: "toolsIcon",
    heading: "Fabrication and Startup",
    list: ["Equipment fabrication", "Commissioning support", "Startup support"],
  },
  {
    icon: "peopleIcon",
    heading: "O&M Training and Support",
    list: [
      "O&M training",
      "Process Plant Optimization studies",
      "Operations & Maintenance support",
    ],
  },
  {
    icon: "boardIcon",
    heading: "Technical Consulting",
    list: [
      "Engineering, Procurement & Construction Management (EPCM) services",
    ],
  },
];

const GridItem = ({
  icon,
  heading,
  list,
}: {
  icon: keyof typeof customIconMap;
  heading: string;
  list: string[];
}) => {
  const IconComponent = customIconMap[icon];

  return (
    <div className="flex-col justify-start items-start px-5.75 py-6.75 rounded-[0.938rem] bg-white/8 gap-4.75">
      <IconComponent
        className="text-(--color-primary) h-11.75 w-11.75"
        // height={2.94rem}
        // width={47}
      />

      <div className="flex-col gap-[0.8375rem]  text-white">
        <h2 className="text-[1.25rem] text-white leading-[1.4]">{heading}</h2>

        <ul className="space-y-1 list-disc pl-6">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export function OurServices() {
  return (
    <section className="flex max-h-261">
      {/* Image */}
      <div className="basis-[35.83333%]">
        <div className="h-full overflow-hidden">
          <Image
            src={"/img/ourServices.jpg"}
            alt="our services img"
            width={516}
            height={1044}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* CONTENT */}
      <div className="flex-gap-56 flex-1 bg-(--color-paragraph) py-(--padding-y) pr-(--padding-x) pl-14">
        {/* COntent */}
        <div className="flex-col gap-10">
          <div className="flex-col gap-3.5">
            <RadarTag variant="green">our services</RadarTag>
            <H1 className="text-white">
              Turning industry challenges into opportunities
            </H1>
          </div>

          {/* Grid */}
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]">
            {gridData.map((item, i) => (
              <GridItem
                key={i}
                icon={item.icon}
                heading={item.heading}
                list={item.list}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <CTAButton href="/services">Learn more</CTAButton>
      </div>
    </section>
  );
}
