"use client";

import Image from "next/image";
import { Menu } from "lucide";
import {MorphIcon} from "morphicons/react";

export default function Header() {
    return (
        <header
            className="w-full bg-background border-b border-border sticky top-0 z-50"
        >
            <div
                className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl"
            >
                <a
                    href="#hero"
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
                    aria-label="Відкрити меню"
                    className="flex items-center justify-center w-11 h-11 rounded-xl border border-muted cursor-pointer"
                >
                    <MorphIcon icon={Menu} size="24px" />
                </button>
            </div>
        </header>
    )
}