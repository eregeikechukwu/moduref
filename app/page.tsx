import { Contact } from "@/components/layout/contact";
import { Hero, About } from "@/components/pages/home";
import Approach from "@/components/pages/home/approach";
import { OurServices } from "@/components/pages/home/services";
import { WhoWeServe } from "@/components/pages/home/whoWeServe";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-self-center">
      <Hero />
      <About />
      <WhoWeServe />
      <Approach />
      <OurServices />
      <Contact />
    </main>
  );
}
