import Image from "next/image";
import { CTAButton } from "../shared/buttons/buttons";
import { RadarTag } from "../shared/radarTag";
import { H1 } from "../typography/headings";
import { Paragraph } from "../typography/paragraph";

export function Contact() {
  return (
    <section className="flex">
      {/* COntent */}
      <div className="basis-[50%] py-38.5 pl-41.25 pr-14">
        <div className="flex-gap-56">
          <div className="flex-col gap-3.5">
            <RadarTag>Contact us</RadarTag>

            <div className="flex-col gap-8">
              <H1>Have a Project in Mind?</H1>

              <Paragraph>
                From initial project definition to startup, Moduref provides
                modular process technology that can help you convert crude and
                gas resources into usable, saleable, higher-value products. Tell
                us about your project and our team will help you determine the
                next step.
              </Paragraph>
            </div>
          </div>

          {/* CTA */}
          <CTAButton href="/contact">Contact our team</CTAButton>
        </div>
      </div>
      {/* Image */}
      <div className="flex-1 h-full overflow-hidden">
        <Image
          src={"/img/contactImage.jpg"}
          alt="contact image"
          height={694}
          width={732}
          className="object-cover w-full"
        />
      </div>
    </section>
  );
}
