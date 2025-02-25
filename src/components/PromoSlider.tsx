'use client';

import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Slider from "@/components/ui/Slider";
import {safeParseJSON} from "@/utils/safeParseJSON";

interface PromoSliderProps {
    promoItems: Item[];
}

export default function PromoSlider({ promoItems }: PromoSliderProps) {
    return (
        <Slider
            options={{
                type: "loop",
                perPage: 2,
                perMove: 1,
                autoplay: true,
                gap: "10px",
                arrows: true,
                pagination: false,
                breakpoints: {
                    1024: { perPage: 2 },
                    768: { perPage: 1 },
                },
            }}
        >
            {promoItems.map((slide) => {
                const parsedStyles = safeParseJSON(slide.info3 || null);
                return (
                    <SplideSlide key={slide.id} className="relative overflow-hidden h-auto">
                        {slide.imgUrl && (
                            <>
                                <div className="w-auto h-[300px]">
                                    <Image
                                        src={slide.imgUrl}
                                        alt={slide.title || "Акційна пропозиція"}
                                        width={400}
                                        height={300}
                                        style={{
                                            position: "relative",
                                            height: "100%",
                                            width: "100%",
                                            borderRadius: "20px",
                                            objectFit: "cover",
                                            objectPosition: "center",
                                        }}
                                        priority={true}
                                    />
                                </div>
                                {slide.desc && (
                                    <div
                                        className="flex flex-col items-center w-fit text-[#f7f7f7] bg-white/20 rounded-[16px] shadow-lg shadow-black/10 backdrop-blur-[6.9px] px-4 py-2"
                                        style={{ position: "absolute", ...parsedStyles }}
                                    >
                                        <p className="font-bold text-2xl">{slide.desc}</p>
                                        {slide.info1 && <p>{slide.info1}</p>}
                                        {slide.info2 && <p>{slide.info2}</p>}
                                    </div>
                                )}
                            </>
                        )}
                    </SplideSlide>
                );
            })}
        </Slider>
    );
};
