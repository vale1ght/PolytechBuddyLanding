import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "Політех Бадді | Студ-Помічник",
    description: "Політех Бадді – Telegram-бот, який допомагає зорієнтуватися в хаосі Політеху.",
};

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html
            lang="uk"
            className={inter.variable}
            suppressHydrationWarning
        >
            <body
                className="bg-background text-foreground font-sans antialiased min-h-screen flex flex-col"
            >
                <Script id="theme-init" strategy="beforeInteractive">
                    {`(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();`}
                </Script>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}
