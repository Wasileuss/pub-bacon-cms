import Image from "next/image";
import { getItems } from "@/server/getData.server";

export default async function About () {
    const aboutItems = await getItems("about");
    return (
        <>
            {aboutItems.length === 0 ? null : (
                <div className="w-full max-w-[1440px] mx-auto px-5 flex flex-col items-center gap-5 py-10">
                    {aboutItems[0].categoryName &&
                      <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                          {aboutItems[0].categoryName}{" "}
                        <span className="bg-[#485887] text-[#f7f7f7] px-1 rounded">Бекон</span>
                      </h2>
                    }
                    {aboutItems.sort((a, b) => parseInt(a.num) - parseInt(b.num)).map((item) => (
                        <div key={item.id} className="flex flex-col items-center gap-8 w-full sm:flex-row">
                            {item.imgUrl && (
                                <div className="flex min-w-full sm:min-w-60 h-auto basis-1/2 grow">
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
                            <div className="flex flex-col basis-1/2 grow">
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}