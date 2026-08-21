import { RadarTag } from "@/components/shared/radarTag";
import styles from "./hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="flex-col gap-5 center-content">
        <RadarTag variant="green">About Us</RadarTag>

        <h1>
          We provide modular process technology that helps clients convert crude
          and gas resources into usable, saleable, higher-value products.
        </h1>
      </div>
    </section>
  );
}
