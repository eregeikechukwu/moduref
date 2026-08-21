import { Icon } from "@/components/icons/iconsax";
import Link from "next/link";

export function CTAButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="w-max group relative">
      <button className="relative  z-20  h-15 px-7!  rounded-lg uppercase bg-(--color-primary)  hover:bg-(--color-primary-500) active:bg-(--color-primary-400)transition-colors duration-300 cursor-pointer">
        <div className="relative center-content gap-[0.725rem] text-(--color-paragraph) font-bold text-[1rem]">
          {children}{" "}
          <span className="group-hover:translate-x-1 transition duration-300">
            <Icon name="arrowRight" size={24} />
          </span>
        </div>
      </button>

      {/* Animation overlay */}
      <span className="absolute z-2 opacity-60 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500 inset-0 bg-(--color-primary-500)  rounded-lg h-full w-full pointer-events-none" />
    </Link>
  );
}

export function CTAButton2({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="w-max group relative">
      <button className="relative  z-20  h-15 px-7!  border-green2 rounded-lg uppercase   hover:bg-(--color-primary) active:bg-(--color-primary-400)transition-colors duration-300 cursor-pointer">
        <div className="relative center-content gap-[0.725rem] text-(--color-paragraph) group-hover:text-white  transition-all duration-300 font-bold text-[1rem]">
          {children}{" "}
          <span className="group-hover:translate-x-1 transition duration-300">
            <Icon name="arrowRight" size={24} />
          </span>
        </div>
      </button>
    </Link>
  );
}
