import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarBorder } from "react-icons/md";
import clsx from "clsx";

interface RatingComponentProps {
    rating: number;
    className?: string
}

export default function RatingComponent({ rating, className }: RatingComponentProps) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;

    return (
        <div className={clsx("flex gap-2.5 p-2", className)}>
            {Array.from({length: totalStars}).map((_, index) => {
                if (index < fullStars) {
                    return (
                        <div key={index} className="flex justify-center">
                            <MdOutlineStar size={25} fill="gold" cursor="pointer"/>
                        </div>
                    );
                }

                if (index === fullStars && hasHalfStar) {
                    return (
                        <div key={index} className="flex justify-center">
                            <MdOutlineStarHalf size={25} fill="gold" cursor="pointer"/>
                        </div>
                    );
                }

                return (
                    <div key={index} className="flex justify-center">
                        <MdOutlineStarBorder size={25} strokeWidth={0} fill="gold" cursor="pointer"/>
                    </div>
                );
            })}
        </div>
    );
}

