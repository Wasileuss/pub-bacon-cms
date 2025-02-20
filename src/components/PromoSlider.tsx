'use client'

import React from "react";
import Slider from "@/components/ui/Slider";
import {Slide} from "@/components/ui/Slider";
interface PromoSliderProps {
    slides: Slide[];
    imgStyle?: React.CSSProperties;
}

const PromoSlider: React.FC<PromoSliderProps> = ({ slides, imgStyle }) => {
    return (
        <>
            <Slider
                slides={slides}
                imgStyle={imgStyle}
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
                        768: { perPage: 2 },
                        640: { perPage: 1 },
                    },
                }}
            />
        </>
    );
}

export default PromoSlider