'use client';

import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import { useLanguage } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const arabic = Noto_Kufi_Arabic({
    variable: "--font-arabic",
    subsets: ["arabic"],
});

export default function ClientLayout({ children }: { children: ReactNode }) {
    const { language, isRtl } = useLanguage();

    return (
        <html lang={language} dir={isRtl ? 'rtl' : 'ltr'} className="scroll-smooth dark">
            <body
                className={`${isRtl ? arabic.variable : inter.variable} ${isRtl ? 'font-arabic' : 'font-sans'} antialiased`}
            >
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
