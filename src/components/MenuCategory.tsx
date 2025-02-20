import Image from "next/image";

function MenuCategory({ categoryName, items }: { categoryName: string; items: Item[] }) {
    if (items.length === 0) return null;

    return (
        <div className="w-full flex flex-col p-4 border border-[#485887] rounded-md shadow-xl bg-[#f7f7f7] text-[#485887]">
            <h2 className="text-3xl font-bold text-center mb-5">{categoryName}</h2>
            {items.sort((a, b) => parseInt(a.num) - parseInt(b.num)).map((item) => (
                <div key={item.id} className="flex flex-col [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:border-[#485887] py-2">
                    <div className="flex justify-between">
                        <div className="flex gap-2.5">
                            {item.imgUrl &&
                              <div className="max-w-12 h-auto mb-4 overflow-hidden">
                                <Image
                                  className="w-full h-full object-cover"
                                  width={300}
                                  height={200}
                                  style={{width: "auto", height: "auto"}}
                                  priority={true}
                                  loading={"eager"}
                                  src={item.imgUrl}
                                  alt="img"
                                />
                              </div>
                            }
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-2xl">{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end min-w-28">
                            {item.price && <p className="text-2xl font-semibold">{item.price} грн</p>}
                            <p className="text-xl">{item.weight}</p>
                        </div>
                    </div>
                    <div className={`${item.info1 || item.info2 || item.info3 ? "self-end font-semibold" : "hidden"}`}>
                        {item.info1 && <p>{item.info1}</p>}
                        {item.info2 && <p>{item.info2}</p>}
                        {item.info3 && <p>{item.info3}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MenuCategory;
