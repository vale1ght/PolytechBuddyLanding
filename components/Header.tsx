"use client";

import Image from "next/image";
import { Menu, X } from "lucide";
import { ArrowRight } from "lucide-react";
import { MorphIcon } from "morphicons/react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NAV_LINKS = [
    { title: "Переваги", desc: "Менше хаосу. Більше «ага!».", href: "#features" },
    { title: "Команди та меню", desc: "Обирай у меню, Бадді виконає.", href: "#how-it-works" },
    { title: "Як почати", desc: "Три кроки – і на старті.", href: "#start" },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <header
            className="w-full bg-background border-b border-border sticky top-0 z-50"
        >
            <div
                className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl"
            >
                <a
                    href="#hero"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2.5 cursor-pointer"
                >
                    <Image
                        alt="Логотип"
                        src="/logo.svg"
                        width={36}
                        height={36}
                        className="rounded-xl"
                        priority
                    />

                    <span
                        className="text-lg font-bold text-foreground"
                    >
                        Політех Бадді
                    </span>
                </a>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
                    className="flex items-center justify-center w-11 h-11 rounded-xl border border-muted cursor-pointer"
                >
                    <MorphIcon icon={isOpen ? X : Menu} size="24px" />
                </button>
            </div>

            <div
                className={clsx(
                    "fixed inset-x-0 top-20 bg-background transition-all duration-300 ease-in-out flex flex-col z-10 bottom-0",
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                )}
            >
                <div
                    className="overflow-y-auto overscroll-none px-6 py-8 flex flex-col flex-1 gap-6 mx-auto w-full max-w-7xl"
                >
                    <div
                        className="flex flex-col gap-3"
                    >
                        <span
                            className="text-xs font-bold tracking-[0.125rem] text-accent-blue uppercase"
                        >
                            Навігація
                        </span>

                        <h2
                            className="text-[2.5rem] font-bold tracking-tight leading-12 text-foreground"
                        >
                            Куди далі?
                        </h2>
                    </div>

                    <ul
                        className="flex flex-col border-t border-border"
                    >
                        {NAV_LINKS.map((link, index) => (
                            <li
                                key={index}
                                className="border-b border-border"
                            >
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between py-5 group"
                                >
                                    <div className="flex flex-col pr-4">
                                        <span className="text-2xl font-bold text-foreground">
                                            {link.title}
                                        </span>

                                        <span className="text-sm text-secondary">
                                            {link.desc}
                                        </span>
                                    </div>

                                    <ArrowRight className="text-accent-blue shrink-0" size={24}/>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex-1"/>

                    <div className="mt-auto bg-surface-raised rounded-3xl p-5">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                                        Ну що, на старт?
                                    </h3>
                                    <span className="text-sm font-semibold text-accent-blue">
                                        /start
                                    </span>
                                </div>

                                <p className="text-sm text-secondary">
                                    Відкривай бота та обирай доступну дію.
                                </p>
                            </div>

                            <a
                                href="https://t.me/PolytechBuddyBot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5 font-semibold rounded-2xl bg-primary text-white transition-opacity w-full h-14"
                            >
                                <svg
                                    className="w-5 h-5 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M2.51239 10.8488C8.41795 8.27585 12.3559 6.57959 14.3263 5.76003C19.9521 3.42005 21.1211 3.01357 21.883 3.00014C22.0506 2.99719 22.4253 3.03872 22.668 3.23567C22.873 3.40197 22.9294 3.62661 22.9563 3.78428C22.9833 3.94195 23.0169 4.30112 22.9902 4.58177C22.6854 7.78504 21.3662 15.5585 20.6951 19.1462C20.4111 20.6643 19.852 21.1733 19.3107 21.2231C18.1343 21.3314 17.2409 20.4457 16.1015 19.6988C14.3186 18.53 13.3113 17.8025 11.5807 16.662C9.58058 15.3439 10.8772 14.6195 12.017 13.4356C12.3153 13.1258 17.4986 8.41117 17.5989 7.98348C17.6115 7.92999 17.6231 7.7306 17.5046 7.62532C17.3862 7.52004 17.2114 7.55604 17.0852 7.58467C16.9064 7.62526 14.0581 9.50789 8.54035 13.2326C7.73187 13.7877 6.99958 14.0582 6.34347 14.044C5.62016 14.0284 4.2288 13.6351 3.19447 13.2988C1.92583 12.8865 0.91753 12.6684 1.00533 11.9681C1.05106 11.6033 1.55341 11.2302 2.51239 10.8488Z"/>
                                </svg>

                                <span>
                                    Відкрити в Telegram
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}