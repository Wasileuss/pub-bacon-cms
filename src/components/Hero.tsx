import {fetchData} from "@/utils/fetchData";
import HeroSlider from "@/components/HeroSlider";
import CircularText  from "@/components/ui/CircularText/CircularText";
import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";
import SplitText, { easeOutCubic } from "@/components/ui/SplitText/SplitText";
import {getItems} from "@/server/getData.server";

export default async function Hero () {
    const heroItems = await fetchData("hero");
    const contactsData = await getItems("contacts");
    const contactsItems = contactsData.sort((a, b) => parseInt(a.num) - parseInt(b.num));

    return (
        <div className="w-screen h-screen min-h-fit relative">
            <div className="absolute z-10 top-0 left-0 w-full h-full">
                <div className="w-full h-full max-w-[1440px] mx-auto flex flex-col items-end justify-between gap-5 px-5 py-5 sm:px-10 sm:py-10 md:pt-20">
                    <div className="w-full h-full flex flex-col gap-5 pb-12 justify-between md:flex-row">
                        <h1 className="flex flex-col lg:flex-row gap-5 text-5xl sm:text-6xl text-[#f7f7f7] font-bold">
                        <span className="h-fit w-fit text-6xl md:text-7xl font-bold overflow-hidden rounded">
                            <SplitText
                                text="БЕКОН"
                                className="text-center h-fit w-full bg-[#485887] px-2"
                                delay={150}
                                animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                                animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                                easing={easeOutCubic}
                                threshold={0.2}
                            />
                        </span>
                            <span className="w-fit h-fit overflow-hidden">
                            <AnimatedContent
                                distance={150}
                                direction="horizontal"
                                reverse={true}
                                config={{tension: 80, friction: 20}}
                                initialOpacity={0.2}
                                animateOpacity
                                scale={1.1}
                                threshold={0.2}
                            >
                                <span>Паб біля дому</span>
                            </AnimatedContent>
                        </span>
                        </h1>
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={false}
                            config={{tension: 80, friction: 20}}
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                        >
                            <div
                                className="flex flex-col w-fit h-fit text-2xl text-[#f7f7f7] bg-white/20 rounded-[16px] shadow-lg shadow-black/10 backdrop-blur-[6.9px] p-5">
                                <p>не спробуєш -</p>
                                <p>не дізнаєшся</p>
                                <p>[*як це смачно!]</p>
                            </div>
                        </AnimatedContent>
                    </div>
                    <a
                        className="absolute bottom-20 right-4 sm:right-7 md:right-12 lg:right-20 z-0"
                        href={contactsItems[1].link}
                    >
                        <CircularText
                            text="Замовити столик * "
                            onHover="speedUp"
                            spinDuration={20}
                        />
                    </a>
                </div>
            </div>
            <HeroSlider heroItems={heroItems}/>
        </div>
    );
}
