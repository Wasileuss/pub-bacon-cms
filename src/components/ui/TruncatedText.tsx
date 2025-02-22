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
            charLimit={200}
            readMoreText={<><span>{" "}</span><span className="read-more-btn">Читати далі</span></>}
            readLessText={<><span>{" "}</span><span className="read-less-btn">Сховати</span></>}
        >
            {text}
        </ReadMoreLess>
    );
}
