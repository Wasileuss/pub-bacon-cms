import {fetchData} from "@/utils/fetchData";
import ReviewsSlider from "@/components/ReviewsSlider";

export default async function Hero () {
    const category = "reviews";
    const reviewsItems = await fetchData(category);
    return (
        <div className="w-full">
            <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center py-10 px-5">
                <h2 className="text-3xl font-bold mb-5 sm:text-4xl">
                    Відгуки друзів <span className="bg-primary text-[#f7f7f7] px-1 rounded">Бекон</span>
                </h2>
                <div className="w-full">
                    <ReviewsSlider reviewsItems={reviewsItems}  />
                </div>
            </div>
        </div>
    );
}
