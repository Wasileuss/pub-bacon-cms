import {fetchData} from "@/utils/fetchData";
import HeroSlider from "@/components/HeroSlider";

export default async function Hero () {
    const category = "hero";
    const heroItems = await fetchData(category);
    return (
        <div className="w-screen h-screen relative">
            <div className="absolute z-10 top-0 left-0 w-full h-full">
                <div className="w-full h-full max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-12 px-10 pt-20">
                    <h1 className="flex flex-col sm:flex-row gap-5 w-fit h-fit text-4xl sm:text-5xl text-[#f7f7f7] font-bold">
                        <span className="bg-[#485887] w-fit px-2 rounded">Бекон</span>
                        <span>Паб біля дому</span>
                    </h1>
                    <div className="flex flex-col w-fit h-fit text-2xl text-[#f7f7f7] bg-white/20 rounded-[16px] shadow-lg shadow-black/10 backdrop-blur-[6.9px] p-6">
                        <p>не спробуєш -</p>
                        <p>не дізнаєшся</p>
                        <p>[*як це смачно!]</p>
                    </div>
                </div>
            </div>
            <HeroSlider heroItems={heroItems} />
        </div>
    );
}
