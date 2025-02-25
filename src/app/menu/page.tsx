import type { Metadata } from "next";
import { getItems } from "@/server/getData.server";
import MenuCategory from "@/components/MenuCategory";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Паб Бекон | Меню",
    description: "Паб Бекон - справжній рай для гурманів та любителів якісного пива. Меню гастропабу вражає різноманітністю та якістю страв.",
    icons: "/favicon.ico",
};

export default async function Menu() {

    const menuItems: Item[] = await getItems("menu");

    const categories = [...new Set(
        menuItems
            .filter(item => item.categoryName !== "")
            .sort((a, b) => parseInt(a.num) - parseInt(b.num))
            .map(item => item.categoryName)
    )];

    const itemsArray: Item[][] = await Promise.all(categories.map(category => getItems(category)));

    const getCategoryTitle = (items: Item[]) => {
        return items.find(item => parseInt(item.num) === 1)?.categoryName || "";
    };

    return (
        <div id="menu" className="w-full max-w-[1440px] mx-auto flex flex-col items-center py-10 px-2.5 md:px-5">
            <h2 className="text-3xl font-bold mb-5 sm:text-4xl">
                Меню <span className="bg-[#485887] text-[#f7f7f7] px-1 rounded">Bacon</span> Pub
            </h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                {categories.map((category, index) => (
                    <MenuCategory
                        key={index}
                        categoryName={getCategoryTitle(itemsArray[index] || [])}
                        items={itemsArray[index] || []}
                    />
                ))}
            </div>
        </div>
    );
}
