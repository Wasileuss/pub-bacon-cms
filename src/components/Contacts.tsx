import {IconMap} from "@/components/ui/IconMap";
import {IconEmail} from "@/components/ui/IconEmail";
import {IconPhone} from "@/components/ui/IconPhone";

const latitude = 49.804141;
const longitude = 24.000385;

const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`

export const Contacts = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto mb-10 px-5">
            <div className="flex flex-col items-center py-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
                    Заходьте, пишіть, телефонуйте в{" "}
                    <span className="bg-[#485887] text-[#f7f7f7] px-1 rounded">Бекон</span>
                </h2>
            </div>
            <div className="text-xl font-semibold grid place-items-center gap-2.5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <a
                    className="w-full grid place-items-center py-4 border-2 border-[#485887] rounded-xl"
                    href={googleMapsUrl}
                    target="_blank"
                >
                    <div className="flex items-center gap-2.5">
                        <div>
                            <IconMap />
                        </div>
                        <p>Бекон на мапі</p>
                    </div>
                </a>
                <a
                    className="w-full grid place-items-center py-4 border-2 border-[#485887] rounded-xl"
                    href="mailto:francis.bacon.pub@gmail.com"
                >
                    <div className="flex items-center gap-2.5">
                        <div>
                            <IconEmail />
                        </div>
                        <p>francis.bacon.pub@gmail.com</p>
                    </div>
                </a>
                <a
                    className="w-full grid place-items-center py-4  border-2 border-[#485887] rounded-xl col-span-1 sm:col-span-2 lg:col-span-1"
                    href="tel:380631903689"
                >
                    <div className="flex items-center gap-2.5">
                        <div>
                            <IconPhone/>
                        </div>
                        <p>+38 063 190 3689</p>
                    </div>
                </a>
            </div>
        </div>
    );
}