import Link from "next/link";
import {IconInstagram} from "@/components/ui/IconInstagram";
import {IconFacebook} from "@/components/ui/IconFacebook";
import Navigation from "@/components/Navigation";

export const Footer = () => {
    return (
        <footer className="w-full border-t-2 bg-[#485887] text-white flex-none">
            <div className="w-full max-w-[1440px] mx-auto p-5 flex flex-row items-center justify-between border-b border-[#f7f7f7]">
                <Link href="/" className="w-full flex flex-col">
                    <h1 className="w-fit bg-[#f7f7f7] text-4xl font-bold text-[#485887] px-1 rounded">Бекон</h1>
                    <p className="text-xl text-[#f7f7f7]">гастропаб</p>
                </Link>
                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-5">
                    <a
                        href="https://www.instagram.com/pub_bacon/"
                        target="_blank"
                    >
                        <IconInstagram className="w-10 h-10"/>
                    </a>
                    <a
                        href="https://www.facebook.com/p/БЕКОН-Паб-біля-дому-100076000542335"
                        target="_blank"
                    >
                        <IconFacebook className="w-10 h-10"/>
                    </a>
                </div>
                <div className="w-full flex flex-row items-center justify-end text-2xl">
                    <Navigation to={""} />
                </div>
            </div>
            <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center py-5">
                <h2 className="text-lg font-semibold">
                    Розробка сайтів{' '}
                    <a
                        className="italic transition duration-300 hover:text-[#00a97f]"
                        href="https://www.instagram.com/webuimaster/" target="_blank" rel="noreferrer noopener">
                        WebUIMaster
                    </a>
                </h2>
                <p>Усі права захищені &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}