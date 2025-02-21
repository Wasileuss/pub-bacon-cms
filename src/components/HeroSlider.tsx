'use client'

import React from "react";
import Slider from "@/components/ui/Slider";
import {Slide} from "@/components/ui/Slider";

interface HeroSliderProps {
    slides: Slide[];
    imgStyle?: React.CSSProperties;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides, imgStyle }) => {
    return (
        <>
            <Slider
                slides={slides}
                imgStyle={imgStyle}
                options={{
                    type  : 'fade',
                    rewind: true,
                    autoplay: true,
                    arrows: false,
                    pagination: false
                }}
            />
        </>
    );
}

export default HeroSlider