import { RadarTag } from "@/components/shared/radarTag";
import { H1 } from "@/components/typography/headings";
import { AboutlistGrid } from "./aboutListGrid";
import Image from "next/image";
import { CTAButton } from "@/components/shared/buttons/buttons";

export function About() {
  return (
    <section className="section">
      <div className="section_content flex w-full h-full gap-14  justify-between">
        {/* Content */}
        <div className="flex-col gap-10 flex-[43.87%]">
          {/* Headings */}
          <div className="flex-col gap-4.5">
            {/* Radar */}
            <RadarTag>About us</RadarTag>
            <H1>About Moduref</H1>
          </div>

          <div className="flex-gap-56">
            {/* Grid */}
            <AboutlistGrid />
            <CTAButton href="/about">Learn More About us</CTAButton>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex-[56.07%] h-full rounded-xl overflow-clip bg-cover">
          <Image
            src="/img/home_about.jpg"
            alt="banner image"
            height={755}
            width={567}
            className="w-full h-full bg-cover"
          />
        </div>
      </div>
    </section>
  );
}
