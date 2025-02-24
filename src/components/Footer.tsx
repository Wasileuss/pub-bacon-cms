import Link from "next/link";
import {IconInstagram} from "@/components/ui/IconInstagram";
import {IconFacebook} from "@/components/ui/IconFacebook";
import Navigation from "@/components/Navigation";
import { getItems } from "@/server/getData.server";

export default async function Footer () {
    const footerData = await getItems("footer");
    const footerItems = footerData.sort((a, b) => parseInt(a.num) - parseInt(b.num));
    return (
        <footer className="w-full border-t-2 bg-[#485887] text-white flex-none">
            <div
                className="w-full max-w-[1440px] mx-auto p-5 flex flex-row items-center justify-between border-b border-[#f7f7f7]">
                <Link href="/" className="w-full flex flex-col">
                    <h1 className="w-fit bg-[#f7f7f7] text-4xl font-bold text-[#485887] px-1 rounded">Бекон</h1>
                    <p className="text-xl text-[#f7f7f7]">гастропаб</p>
                </Link>
                <div
                    className="w-full flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10"
                >
                    <a
                        href={footerItems[0] ? footerItems[0].link : "https://www.instagram.com"}
                        target="_blank"
                    >
                        <IconInstagram className="w-10 h-10"/>
                    </a>
                    <a
                        href={footerItems[1] ? footerItems[1].link : "https://www.facebook.com"}
                        target="_blank"
                    >
                        <IconFacebook className="w-10 h-10"/>
                    </a>
                </div>
                <div className="w-full flex flex-row items-center justify-end text-2xl">
                    <Navigation to="/"/>
                </div>
            </div>
            <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center py-5">
                <h2 className="text-lg font-semibold">
                    Розробка сайтів{' '}
                    <a
                        className="italic transition duration-300 hover:text-[#00a97f]"
                        href={footerItems[2] ? footerItems[2].link : "/"}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        WebUIMaster
                    </a>
                </h2>
                <p>Усі права захищені &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}