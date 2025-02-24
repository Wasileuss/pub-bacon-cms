"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

interface ScrollLinkProps {
    to: string
}

export default function Navigation({}: ScrollLinkProps) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <nav className="flex">
            <ul className="flex flex-col items-end flex-wrap gap-4 text-white font-semibold md:flex-row">
                <li>
                    <Link
                        href="/"
                        className={`${isHome ? "text-active  before:bg-active" : " before:bg-white"} relative px-[5px] before:content-[''] before:h-[3px] before:absolute before:top-full before:w-0 before:left-1/2 before:transition-all before:duration-300 before:ease-in-out before:rounded-[2px] before:mt-[2px] hover:before:w-full hover:before:left-0`}
                    >
                        Головна
                    </Link>
                </li>
                <li>
                    <Link
                        href="/menu"
                        className={`${pathname === "/menu" ? "text-active  before:bg-active" : " before:bg-white"} relative px-[5px] before:content-[''] before:h-[3px] before:absolute before:top-full before:w-0 before:left-1/2 before:transition-all before:duration-300 before:ease-in-out before:rounded-[2px] before:mt-[2px] hover:before:w-full hover:before:left-0`}
                    >
                        Меню
                    </Link>
                </li>
                {user && (
                    <li>
                        <Link
                            href="/admin"
                            className={`${pathname === "/admin" ? "text-active  before:bg-active" : " before:bg-white"} relative px-[5px] before:content-[''] before:h-[3px] before:absolute before:top-full before:w-0 before:left-1/2 before:transition-all before:duration-300 before:ease-in-out before:rounded-[2px] before:mt-[2px] hover:before:w-full hover:before:left-0`}
                        >
                            Адмін
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
