import { CTAButton2 } from "@/components/shared/buttons/buttons";
import { H1 } from "@/components/typography/headings";
import { Paragraph } from "@/components/typography/paragraph";
import Image from "next/image";

const gridData = [
  { title: "Petroleum Producers", image: "/img/who-we-serve1.png" },
  {
    title: "Petroleum Product Marketers & Tank-Farm Owners",
    image: "/img/who-we-serve2.png",
  },
  { title: "Investors & New Project Owners", image: "/img/who-we-serve3.png" },
];

function GridItem({ title, image }: { title: string; image: string }) {
  return (
    <div className="h-full py-[1.319rem] px-[0.975rem] rounded-[0.33125rem] bg-[#f4f4f4] flex-col gap-[0.975rem] justify-center">
      <h3 className="text-[1.25rem] leading-[1.4] text-left">{title}</h3>

      <div className=" rounded-[inherit] overflow-clip h-auto flex-1 w-full">
        <Image
          src={image}
          alt={title}
          width={330}
          height={330}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export function WhoWeServe() {
  return (
    <section className="section">
      <div className="flex-col gap-10">
        {/* Heading */}
        <div className="flex justify-between w-full">
          <H1>Who We Serve</H1>
          {/* BUtton */}
          <CTAButton2 href="/about">Learn more about us</CTAButton2>
        </div>

        <div className="flex-gap-56">
          {/* ?writeup */}
          <Paragraph>
            Moduref serves clients who need more than generic oil-and-gas
            advice. We work with project sponsors who need clear engineering,
            practical project definition, and a realistic path from opportunity
            to operating process plant.
          </Paragraph>

          {/* grid */}
          <div className="w-full grid grid-cols-[repeat(3,minmax(16rem,1fr))] gap-4.5 h-84.25">
            {gridData.map((item, index) => (
              <GridItem key={index} title={item.title} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
