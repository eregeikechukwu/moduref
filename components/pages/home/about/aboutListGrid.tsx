import { customIconMap } from "@/components/icons/customIcons";
import { Paragraph } from "@/components/typography/paragraph";
import { FormattedText } from "@/hooks/formattedText";

type dataType = {
  header?: string;
  icon: keyof typeof customIconMap;
  content: string;
}[];

const data: dataType = [
  {
    header: "We design and build modular refineries that can process:",
    icon: "oilBarrel",
    content:
      "&bull;1,000 to 30,000 barrels per day for crude processing \n&bull;1 mmscf to 30 mmscf for gas processing",
  },
  {
    icon: "peopleIcon",
    content:
      "Our engineering team consists of experienced multi-disciplined personnel in the modularization of process plants",
  },

  {
    icon: "globeIcon",
    content:
      "The Moduref team has completed several commercially viable projects in several continents including North America, Africa (West and Central) and Asia",
  },
];

export function AboutlistGrid() {
  return (
    <div className="flex-col gap-3.5">
      {data.map((item, i) => (
        <GridItem
          key={i}
          header={item.header}
          icon={item.icon}
          content={item.content}
        />
      ))}
    </div>
  );
}

function GridItem({
  icon,
  header,
  content,
}: {
  icon: keyof typeof customIconMap;
  header?: string;
  content: string;
}) {
  const IconComponent = customIconMap[icon];
  return (
    <div className="w-full flex gap-3 shadow-1x border-1x py-6 px-4.5 bg-white rounded-lg">
      {/* Icon */}
      <div className="h-full center-content w-auto">
        <div className="center-content bg-(--color-gray) border-green h-[3.85rem] w-[3.85rem] rounded-full">
          <IconComponent
            className="text-(--color-primary)"
            width={29}
            height={29}
          />
        </div>
      </div>

      {/* Text content */}
      <div className="flex-1">
        {header && (
          <Paragraph className="font-bold mb-2.25">{header}</Paragraph>
        )}
        <FormattedText text={content} />
      </div>
    </div>
  );
}
