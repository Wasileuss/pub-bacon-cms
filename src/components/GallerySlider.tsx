"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

interface GalleryItem {
    id: string;
    title: string;
    imgUrl: string;
}

interface GallerySliderProps {
    galleryItems: GalleryItem[];
}

export default function GallerySlider({ galleryItems }: GallerySliderProps) {
    return (
        <Splide
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
                    <Image
                        src={item.imgUrl}
                        alt={item.title}
                        width={400}
                        height={300}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        priority={false}
                        loading={"lazy"}
                    />
                </SplideSlide>
            ))}
        </Splide>
    );
}
