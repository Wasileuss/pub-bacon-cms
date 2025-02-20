import Link from "next/link";
import {IconInstagram} from "@/components/ui/IconInstagram";
import {IconFacebook} from "@/components/ui/IconFacebook";
import Navigation from "@/components/Navigation";

export const Footer = () => {
    return (
        <footer className="w-full border-t-2 bg-[#485887] text-white flex-none">
            <div className="w-full max-w-[1440px] mx-auto px-5 py-5 grid grid-cols-3 border-b border-[#f7f7f7]">
                <Link href="/" className="justify-items-start self-center">
                    <h1 className="bg-[#f7f7f7] text-3xl font-bold text-[#485887] px-1 rounded">Бекон</h1>
                    <p className="text-[#f7f7f7]">гастропаб</p>
                </Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center sm:place-items-center">
                    <a className="w-full justify-items-center sm:justify-items-end self-center" href="https://www.instagram.com/pub_bacon/" target="_blank">
                        <IconInstagram/>
                    </a>
                    <a className="w-full justify-items-center self-center sm:justify-items-start sm:place-items-center" href="https://www.facebook.com/p/БЕКОН-Паб-біля-дому-100076000542335" target="_blank">
                        <IconFacebook/>
                    </a>
                </div>
                <div className="justify-items-end self-center text-xl">
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