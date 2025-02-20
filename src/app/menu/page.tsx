// import { getItems } from "@/server/getData.server";
// import MenuCategory from "@/components/MenuCategory";
// export const dynamic = "force-dynamic";
//
// export default async function Menu() {
//     const menuItems = await getItems("menu");
//     const categories = [...new Set(
//         menuItems
//             .filter(item => item.categoryName !== "")
//             .sort((a, b) => parseInt(a.num) - parseInt(b.num))
//             .map(item => item.categoryName)
//         )
//     ];
//
//     const itemsArray = await Promise.all(categories.map(category => getItems(category)));
//
//     const getCategoryTitle = (items: { num: string; categoryName: string }[]) => {
//         return items.find(item => parseInt(item.num) === 1)?.categoryName || "";
//     };
//
//     return (
//         <div id="menu" className="w-full max-w-[1440px] mx-auto flex flex-col items-center py-10 px-5">
//             <h2 className="text-3xl font-bold mb-5 sm:text-4xl">
//                 Меню <span className="bg-[#485887] text-[#f7f7f7] px-1 rounded">Bacon</span> Pub
//             </h2>
//             <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 {categories.map((category, index) => (
//                     <MenuCategory
//                         key={index}
//                         categoryName={getCategoryTitle(itemsArray[index])}
//                         items={itemsArray[index]}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

"use client";

import { useEffect, useState } from "react";
import { getItems } from "@/server/getData.server";
import MenuCategory from "@/components/MenuCategory";

// Описуємо структуру елемента меню
// interface MenuItem {
//     id: string;
//     num: string;
//     categoryName: string;
//     title: string;
//     price: number;
//     description?: string;
// }

export default function Menu() {
    const [menuItems, setMenuItems] = useState<Item[]>([]);
    const [itemsArray, setItemsArray] = useState<Item[][]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const menu: Item[] = await getItems("menu");
                setMenuItems(menu);

                const categories = [...new Set(
                    menu
                        .filter(item => item.categoryName !== "")
                        .sort((a, b) => parseInt(a.num) - parseInt(b.num))
                        .map(item => item.categoryName)
                )];

                const items: Item[][] = await Promise.all(categories.map(category => getItems(category)));
                setItemsArray(items);
            } catch (error) {
                console.error("Помилка завантаження даних:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getCategoryTitle = (items: Item[]) => {
        return items.find(item => parseInt(item.num) === 1)?.categoryName || "";
    };

    if (loading) {
        return <p className="text-center text-xl">Завантаження меню...</p>;
    }

    return (
        <div id="menu" className="w-full max-w-[1440px] mx-auto flex flex-col items-center py-10 px-5">
            <h2 className="text-3xl font-bold mb-5 sm:text-4xl">
                Меню <span className="bg-[#485887] text-[#f7f7f7] px-1 rounded">Bacon</span> Pub
            </h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                {menuItems.map((category, index) => (
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
