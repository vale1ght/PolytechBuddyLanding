import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
    title: "Політех Бадді | Студ-Помічник",
    description: "Політех Бадді – Telegram-бот, який допомагає зорієнтуватися в хаосі Політеху.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={inter.variable}
        >
            <body
                className="bg-background text-foreground font-sans antialiased min-h-screen flex flex-col"
            >
                {children}
            </body>
        </html>
    );
}
