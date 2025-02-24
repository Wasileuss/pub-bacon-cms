import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contacts from "@/components/Contacts"
import Reviews from "@/components/Reviews"
import Promo from "@/components/Promo";
import GoToMenu from "@/components/GoToMenu";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
        <div className="flex flex-col items-center">
            <Hero />
            <Promo />
            <About />
            <GoToMenu />
            <Gallery />
            <Contacts />
            <Reviews />
        </div>
    </>
  );
}
