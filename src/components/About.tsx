import Image from "next/image";
import { getItems } from "@/server/getData.server";

export default async function About () {
    const aboutData = await getItems("about");
    const aboutItems = aboutData.sort((a, b) => parseInt(a.num) - parseInt(b.num));
    return (
        <>
            {aboutItems.length === 0 ? null : (
                <div className="w-full max-w-[1440px] mx-auto px-2.5 md:px-5 py-10 flex flex-col items-center gap-5">
                    {aboutItems[0].categoryName &&
                      <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                          {aboutItems[0].categoryName}{" "}
                        <span className="bg-[#485887] text-[#f7f7f7] px-1 rounded">Бекон</span>
                      </h2>
                    }
                    {aboutItems.map((item) => (
                        <div
                            key={item.id}
                            className={`${item.price ? "sm:flex-row-reverse" : "sm:flex-row"}
                            ${item.weight ? "flex-col-reverse" : "flex-col"}
                             flex items-center gap-8 w-full`}
                        >
                            {item.imgUrl && (
                                <div className="flex w-full max-w-[600px] min-w-[300px] h-auto grow">
                                    <Image
                                        loading={"lazy"}
                                        priority={false}
                                        src={item.imgUrl}
                                        alt="burger"
                                        width={400}
                                        height={400}
                                        style={{width: "100%", height: "100%", objectFit: "cover"}}
                                    />
                                </div>
                            )}
                            <div className="flex flex-col gap-2.5 text-lg md:text-xl font-semibold">
                                <p>{item.desc}</p>
                                <p>{item.info1}</p>
                                <p>{item.info2}</p>
                                <p>{item.info3}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}