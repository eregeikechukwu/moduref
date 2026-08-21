import { Icon, iconMap } from "@/components/icons/iconsax";
import { FooterLogo } from "@/components/shared/logo";
import Link from "next/link";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
];

const contactLinks = [
  {
    label: "info@moduref.com",
    link: "mailto:info@moduref.com",
    icon: "smsTracking",
  },
  {
    label: "sales@moduref.com",
    link: "mailto:sales@moduref.com",
    icon: "smsTracking",
  },
  {
    label: "8 The Green, STE   B Dover, DE, 19901, United States",
    link: "",
    icon: "location",
  },
];

export function Footer() {
  return (
    <footer className="section bg-(--color-paragraph)">
      <div className="flex-col">
        {/* Main foter cntent */}
        <div className="flex gap-13.5 pb-14.5">
          {/* logo and write up */}
          <div className="flex-col items-start gap-9.5 max-w-121.75">
            <FooterLogo />

            {/* writeup */}
            <p className="text-[0.875rem] leading-[1.71] text-white">
              Moduref is a modular process technology company that helps clients
              convert crude and gas resources into usable, saleable,
              higher-value products.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-24">
            {/* Links group 1 */}
            <div className="flex-col gap-8.75">
              <p className="uppercase font-bold text-(--color-primary)">
                Quick links
              </p>

              {/* Links */}
              <div className="flex-col gap-6">
                {navLinks.map((link, i) => (
                  <div
                    key={`${i}-${link.link}`}
                    className="flex items-center gap-[0.33125rem] hover:animate-pulse"
                  >
                    {/* DOnt forget to swap out this uicon later */}
                    <span className="center-content font-extrabold w-3 h-full text-(--color-primary) mb-1">
                      {/* <Icon
                        variant="Bold"
                        color="#64c600"
                        size={12}
                        name="arrowRight2"
                      /> */}
                      &#8250;
                    </span>

                    <Link
                      href={link.link}
                      className="text-[0.875rem] text-white"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Links group 2 */}
            <div className="flex-col gap-8.75 max-w-83.75">
              <p className="uppercase font-bold text-(--color-primary)">
                Contact us
              </p>

              {/* Links */}
              <div className="flex-col gap-6">
                {contactLinks.map((link, i) => (
                  <div
                    key={`${i}-${link.link}`}
                    className="flex items-center gap-[0.33125rem] hover:animate-pulse"
                  >
                    {/* DOnt forget to swap out this uicon later */}
                    <span className="flex justify-content items-start font-extrabold h-full text-(--color-primary)">
                      <Icon
                        color="#64c600"
                        size={24}
                        name={link.icon as keyof typeof iconMap}
                      />
                    </span>

                    <Link
                      href={link.link}
                      className="text-[0.875rem] text-white"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* cpoyright */}
        <div className="pt-10.75 border-t border-t-[#327567]/50">
          <p className="text-[#ccd6d4] font-[0.875rem]">
            © 2026 Moduref LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
