import React from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface SliderProps {
    options: Record<string, unknown>;
    children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ options, children }) => {
    return <Splide options={options}>{children}</Splide>;
};

export default Slider;
