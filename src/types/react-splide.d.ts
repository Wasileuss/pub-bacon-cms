declare module "@splidejs/react-splide" {
    import { ComponentType, ReactNode } from "react";

    export interface SplideProps {
        options?: Record<string, unknown>;
        hasTrack?: boolean;
        children?: ReactNode;
        className?: string;
        style?: React.CSSProperties;
    }

    export interface SplideSlideProps {
        children?: ReactNode;
        className?: string;
        style?: React.CSSProperties;
    }

    export const Splide: ComponentType<SplideProps>;
    export const SplideSlide: ComponentType<SplideSlideProps>;
}
