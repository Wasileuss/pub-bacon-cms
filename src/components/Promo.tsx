import { fetchData } from "@/utils/fetchData";
import PromoSlider from "@/components/PromoSlider";

export default async function Promo () {
    const category = "promo";
    const promoItems = await fetchData(category);
    return (
        <div className="w-full bg-[#485887]">
            <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center py-2.5 px-2.5">
                <PromoSlider
                    slides={promoItems}
                    imgStyle={{borderRadius: "20px", width: "100%", height: "300px", objectFit: "cover", position: "relative"}}
                />
            </div>
        </div>
    );
};
