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
                    <Link href="/" className={isHome ? "text-active" : ""}>Головна</Link>
                </li>
                <li>
                    <Link href="/menu" className={pathname === "/menu" ? "text-active" : ""}>Меню</Link>
                </li>
                {user && (
                    <li>
                        <Link href="/admin" className={pathname === "/admin" ? "text-active" : ""}>Адмін</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
