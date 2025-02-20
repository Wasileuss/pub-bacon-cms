// "use client";
//
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "@/firebase/firebaseConfig";
//
// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//     const router = useRouter();
//     const [user, setUser] = useState(auth.currentUser);
//
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (!user) {
//                 router.push("/admin/login");
//             } else {
//                 setUser(user);
//             }
//         });
//
//         return () => unsubscribe();
//     }, [router]);
//
//     const handleLogout = async () => {
//         await signOut(auth);
//         router.push("/admin/login");
//     };
//
//     return (
//         <>
//             <div className="bg-gray-600 border-t border-[#f7f7f7]">
//                 <nav className="w-full max-w-[1440px] mx-auto p-5 text-[#f7f7f7] flex justify-between">
//                     <h1>Admin Panel</h1>
//                     {user && <button className="border border-[#f7f7f7] rounded-md px-2 py-[4px] transition duration-300 hover:bg-[#f7f7f7] hover:text-[#485887]" onClick={handleLogout}>Вийти</button>}
//                 </nav>
//             </div>
//             <>{children}</>
//         </>
//     );
// }

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push("/admin/login"); // Якщо немає користувача, переходимо на сторінку логіну
            } else {
                setUser(user); // Якщо користувач є, зберігаємо його в стані
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await signOut(auth); // Вихід з акаунту
        setUser(null); // Оновлюємо стан користувача
        router.push("/admin/login"); // Переходимо на сторінку логіну
    };

    return (
        <>
            <div className="bg-gray-600 border-t border-[#f7f7f7]">
                <nav className="w-full max-w-[1440px] mx-auto p-5 text-[#f7f7f7] flex justify-between">
                    <h1>Admin Panel</h1>
                    {user && (
                        <button
                            className="border border-[#f7f7f7] rounded-md px-2 py-[4px] transition duration-300 hover:bg-[#f7f7f7] hover:text-[#485887]"
                            onClick={handleLogout}
                        >
                            Вийти
                        </button>
                    )}
                </nav>
            </div>
            <>{children}</>
        </>
    );
}

