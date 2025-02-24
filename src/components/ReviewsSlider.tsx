'use client';

import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import Slider from "@/components/ui/Slider";
import Rating from "@/components/ui/Rating";
import TruncatedText from "@/components/ui/TruncatedText";

interface ReviewsSliderProps {
    reviewsItems: Item[];
}

export default function ReviewsSlider({ reviewsItems }: ReviewsSliderProps) {
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
                    768: { perPage: 1 },
                },
            }}
        >
            {reviewsItems.sort((a, b) => parseInt(a.num) - parseInt(b.num)).map((item) => (
                <SplideSlide key={item.id}>
                    <div className="w-full h-full flex flex-col items-center bg-[#6270a4] text-[#f7f7f7] border-2 border-[#485887] rounded-xl p-5">
                        <Rating rating={Number(item.info3)} className="mb-2"/>
                        <a
                            href={item.link}
                            target="_blank"
                            className="font-semibold text-2xl text-active mb-2 relative px-[5px] before:content-[''] before:h-[3px] before:bg-active before:absolute before:top-full before:w-0 before:left-1/2 before:transition-all before:duration-300 before:ease-in-out before:rounded-[2px] before:mt-[2px] hover:before:w-full hover:before:left-0"
                        >
                            {item.title}
                        </a>
                        <TruncatedText className="text-white text-lg text-center" text={item.desc}/>
                    </div>
                </SplideSlide>
            ))}
        </Slider>
    );
};
