"use client";

import { usePathname } from "next/navigation";
import { Icon, iconMap } from "@/components/icons/iconsax";
import { FullLogo } from "../../shared/logo";
import "./nav.scss";
import Link from "next/link";

function LinkButton({
  href,
  icon,
  children,
}: {
  href: string;
  icon: keyof typeof iconMap;
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <Link href={href} className={`link-button ${path === href && "active"}`}>
      <div className={`link-button_content`}>
        <span className="icon">
          <Icon name={icon} size={20} className="font-bold" />
        </span>
        <span className="text">{children}</span>
      </div>
    </Link>
  );
}

export function Nav() {
  return (
    <section className="nav">
      <div className="logo">
        <FullLogo />
      </div>

      {/* Links */}
      <div className="h-full flex">
        <LinkButton href="/" icon="Home">
          Home
        </LinkButton>
        <LinkButton href="/about" icon="userSquare">
          About Us
        </LinkButton>
        <LinkButton href="/services" icon="layer">
          Services
        </LinkButton>
        <LinkButton href="/contact" icon="messageText1">
          Contact
        </LinkButton>
      </div>
    </section>
  );
}
