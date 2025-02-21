import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import {safeParseJSON} from "@/utils/safeParseJSON";

export type Slide = {
    id: string;
    imgUrl: string;
    title?: string;
    desc?: string;
    info1?: string;
    info2?: string;
    info3?: string;
    imgStyle?: React.CSSProperties;
};

interface SplideSliderProps {
    slides: Slide[];
    options?: object;
    imgStyle?: React.CSSProperties;
}

const Slider: React.FC<SplideSliderProps> = ({ slides, options, imgStyle }) => {
    return (
        <Splide options={options}>
            {slides.map((slide) => {
                const parsedStyles = safeParseJSON(slide.info3 || null);
                return (
                    <SplideSlide key={slide.id} className="relative overflow-hidden h-auto">
                        <Image
                            src={slide.imgUrl}
                            alt={slide.title || "Slide"}
                            width={400}
                            height={300}
                            style={{ ...slide.imgStyle, ...imgStyle, position: "relative", height: "100%", width: "100%" }}
                            priority={true}
                        />
                        {slide.desc && (
                            <div
                                className="flex flex-col items-center w-fit text-[#f7f7f7] bg-white/20 rounded-[16px] shadow-lg shadow-black/10 backdrop-blur-[6.9px] p-6"
                                style={{ position: "absolute", ...parsedStyles }}
                            >
                                <p className="font-bold text-2xl">{slide.desc}</p>
                                {slide.info1 && <p>{slide.info1}</p>}
                                {slide.info2 && <p>{slide.info2}</p>}
                            </div>
                        )}
                    </SplideSlide>
                );
            })}
        </Splide>
    );
};

export default Slider;
