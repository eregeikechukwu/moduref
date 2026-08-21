import { CTAButton } from "@/components/shared/buttons/buttons";
import styles from "./hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_container}>
        {/* Hero content */}
        <div className="flex-gap-56 max-w-[51.688rem]">
          <div className="flex-col gap-12">
            <h1 className="text-[3.5rem] leading-[1.14] text-white">
              Moduref is a leader in the engineering, design and fabrication of
              modular process plants.
            </h1>

            <p className="text-[1.25rem] leading-[1.6] font-medium text-white">
              We provide the modular technology that power the transformation of
              crude, condensate, and gas resources into high-end products.
              Moduref works with its partners to identify opportunities in the
              oil and gas sector that can be transformed into modular process
              plants that are sustainable and commercially viable.
            </p>
          </div>

          {/* CTA */}
          <CTAButton href="#">Contact Us</CTAButton>
        </div>
      </div>
    </section>
  );
}
