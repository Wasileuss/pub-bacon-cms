import React from "react";
import type { Metadata } from "next";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import "./globals.css";
import {raleway} from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Паб Бекон",
  description: "Паб Бекон | Варимо власне пиво. Паб із найсмачнішою їжею на районі. Львів, вулиця Наукова, 30",
  icons: "/favicon.ico",
    other: {
        "google-site-verification": "LYpGEUF8rImGMGNbue1NxMA9CDX2RG3LEqUD7WhiOHs",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
    <html lang="uk">
    <body className={`${raleway.className} text-[#485887] bg-[#f7f7f7] scroll-smooth`}>
        <div className="flex flex-col overflow-clip min-h-screen">
            <Header />
            <main className="flex flex-col grow">
                {children}
            </main>
            <Footer />
        </div>
    </body>
    </html>
  );
}
