'use client';

import React from "react";
import { SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Slider from "@/components/ui/Slider";

interface GallerySliderProps {
    galleryItems: Item[];
}

export default function GallerySlider({ galleryItems }: GallerySliderProps) {
    return (
        <Slider
            options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                autoplay: true,
                gap: "10px",
                pagination: true,
                arrows: true,
                breakpoints: {
                    1024: { perPage: 3 },
                    768: { perPage: 2 },
                    640: { perPage: 1 },
                },
            }}
        >
            {galleryItems.map((item) => (
                <SplideSlide key={item.id}>
                    {item.imgUrl && (
                        <Image
                            src={item.imgUrl}
                            alt={item.title || "Фотогалерея 'Бекон'"}
                            width={400}
                            height={300}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            priority={false}
                            loading={"lazy"}
                        />
                    )}
                </SplideSlide>
            ))}
        </Slider>
    );
};
