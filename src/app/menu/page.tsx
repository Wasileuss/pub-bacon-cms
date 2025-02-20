import { getItems } from "@/server/getData.server";
import MenuCategory from "@/components/MenuCategory";

export default async function Menu() {
    const menuItems = await getItems("menu");
    const categories = [...new Set(
        menuItems
            .filter(item => item.categoryName !== "")
            .sort((a, b) => parseInt(a.num) - parseInt(b.num))
            .map(item => item.categoryName)
        )
    ];

    const itemsArray = await Promise.all(categories.map(category => getItems(category)));

    const getCategoryTitle = (items: { num: string; categoryName: string }[]) => {
        return items.find(item => parseInt(item.num) === 1)?.categoryName || "";
    };

    return (
        <div id="menu" className="w-full max-w-[1440px] mx-auto flex flex-col items-center py-10 px-5">
            <h2 className="text-3xl font-bold mb-5 sm:text-4xl">
                Меню <span className="bg-[#485887] text-background px-1 rounded">Bacon</span> Pub
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {categories.map((category, index) => (
                    <MenuCategory
                        key={index}
                        categoryName={getCategoryTitle(itemsArray[index])}
                        items={itemsArray[index]}
                    />
                ))}
            </div>
        </div>
    );
}
