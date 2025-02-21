'use client';

import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        const isMobile = window.innerWidth < 768;

        if (isMenuOpen) {
            if (isMobile) {
                document.body.style.overflow = "auto";
            }
        } else {
            if (isMobile) {
                document.body.style.overflow = "hidden";
            }
        }

        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                document.body.style.overflow = "auto";
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="w-full bg-[#485887]">
            <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-2.5 px-5 py-2">
                <Link href="/" className="flex items-end gap-5">
                    <div className="w-16 h-16 flex items-center justify-center shrink-0 bg-white rounded-full" aria-label="Francis Bacon Pub logo">
                        <Image
                            className="w-auto h-auto object-cover"
                            priority={true}
                            src="/images/bacon-logo.svg"
                            alt="Francis Bacon Pub logo"
                            width={70}
                            height={70}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="bg-[#f7f7f7] text-3xl font-bold text-[#485887] px-1 rounded">Бекон</h1>
                        <p className="text-[#f7f7f7]">гастропаб</p>
                    </div>
                </Link>
                <div
                    className={`fixed z-20 top-[80px] left-0 w-full h-screen text-3xl md:text-xl flex flex-col items-end gap-6 text-white bg-[#485887] transition-left duration-300 px-5 py-5 md:px-0 md:static md:w-auto md:h-auto md:flex-row
                    ${isMenuOpen ? 'left-0' : 'left-full'}`}
                    onClick={handleMenuClick}
                >
                    <Navigation to={""} />
                </div>
                <button
                    type="button"
                    className={`relative w-8 h-[22px] md:hidden focus:outline-none`}
                    onClick={handleMenuClick}
                    aria-label="Menu button"
                >
                    <span
                        className={`absolute top-0 left-0 h-[3px] w-[30px] bg-[#f7f7f7] transition-transform duration-300 rounded-lg 
                        ${isMenuOpen ? 'rotate-45 top-[10px]' : ''}`}></span>
                    <span
                        className={`absolute top-1/2 transform -translate-y-1/2 left-0 h-[3px] w-[30px] bg-[#f7f7f7] transition-opacity duration-300 rounded-lg 
                        ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span
                        className={`absolute bottom-0 left-0 h-[3px] w-[30px] bg-[#f7f7f7] transition-transform duration-300 rounded-lg 
                        ${isMenuOpen ? '-rotate-45 bottom-[9px]' : ''}`}></span>
                </button>
            </div>
        </header>
    );
};
