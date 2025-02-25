'use client';

import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import Slider from "@/components/ui/Slider";
import Image from "next/image";

interface HeroSliderProps {
    heroItems: Item[];
}

export default function HeroSlider({ heroItems }: HeroSliderProps) {
    return (
        <Slider
            options={{
                type  : 'fade',
                rewind: true,
                autoplay: true,
                arrows: false,
                pagination: false
            }}
        >
            {heroItems.map((slide) => (
                <SplideSlide key={slide.id} className="relative overflow-hidden h-auto">
                    {slide.imgUrl && (
                        <Image
                            src={slide.imgUrl}
                            alt={slide.title || "Головне зображення сайту"}
                            width={400}
                            height={300}
                            style={{
                                position: "relative",
                                width: "100%",
                                maxHeight: "100vh",
                                minHeight: "100vh",
                                objectFit: "cover",
                                objectPosition: "center"
                            }}
                            priority={true}
                        />
                    )}
                </SplideSlide>
            ))}
        </Slider>
    );
};
