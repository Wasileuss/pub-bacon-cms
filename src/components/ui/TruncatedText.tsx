import ReadMoreLess from 'react-read-more-less';
import clsx from "clsx";

interface TextProps {
    text: string;
    className?: string

}

export default function TruncatedText({ text, className }: TextProps) {
    return (
        <ReadMoreLess
            className={clsx("text-white text-center", className)}
            charLimit={220}
            readMoreText={<span className="text-active font-bold cursor-pointer">Читати далі</span>}
            readLessText={<span className="text-accent font-bold cursor-pointer">Сховати</span>}
        >
            {text}
        </ReadMoreLess>
    );
}
