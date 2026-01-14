import About from "@/components/sections/About";
import DigitalPrinting from "@/components/sections/DigitalPrinting";
import SubscribeNewsletter from "@/components/sections/SubscribeNewsletter";
import LargeFormat from "@/components/sections/LargeFormat";
import LogoTicker from "@/components/sections/LogoTicker";
import HeroSlide from "@/components/sections/HeroSlide";

export default function Home() {
  return (
    <main>
      <HeroSlide />
      <About />
      <DigitalPrinting />
      <SubscribeNewsletter />
      <LargeFormat />
      <LogoTicker />
    </main>
  );
}
