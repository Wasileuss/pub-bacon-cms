import { fetchData } from "@/utils/fetchData";
import GallerySlider from "@/components/GallerySlider";

export default async function Gallery() {
    const category = "gallery";
    const galleryItems = await fetchData(category);

    return (
        <>
            {galleryItems.length === 0 ? null : (
                <div className="w-full bg-[#485887]">
                    <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center py-10">
                        {galleryItems[0].categoryName && (
                            <h2 className="mb-10 text-[#f7f7f7] text-3xl font-bold text-center sm:text-4xl sm:text-left">
                                {galleryItems[0].categoryName}{" "}
                                <span className="bg-[#f7f7f7] text-[#485887] px-1 rounded">Бекон</span>
                            </h2>
                        )}
                        <GallerySlider galleryItems={galleryItems}/>
                    </div>
                </div>
            )}
        </>
    );
}
