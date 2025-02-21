import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import { Contacts } from "@/components/Contacts";
import Promo from "@/components/Promo";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
        <div className="flex flex-col items-center">
            <Hero/>
            <Promo/>
            <About/>
            <Gallery/>
            <Contacts/>
        </div>
    </>
  );
}
