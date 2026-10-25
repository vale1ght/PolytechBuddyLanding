"use client";

import {useEffect, useState} from "react";
import {Moon, Sun} from "lucide-react";

const THEME_EVENT = "theme-change";

function currentIsDark() {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark") return true;
    if (attr === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function toggleTheme() {
    const next = !currentIsDark();
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event(THEME_EVENT));
}

interface Props {
    labeled?: boolean;
}

export default function ThemeSwitch({labeled = false}: Props) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const sync = () => setIsDark(currentIsDark());
        sync();

        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const onMedia = () => {
            if (!document.documentElement.getAttribute("data-theme")) sync();
        };

        window.addEventListener(THEME_EVENT, sync);
        media.addEventListener("change", onMedia);

        return () => {
            window.removeEventListener(THEME_EVENT, sync);
            media.removeEventListener("change", onMedia);
        };
    }, []);

    const control = (
        <button
            type="button"
            role="switch"
            aria-checked={isDark}
            aria-label="Перемкнути тему"
            onClick={toggleTheme}
            className="theme-switch relative h-8 w-14 shrink-0 cursor-pointer rounded-full border border-border bg-surface-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
            <span className="theme-knob absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                <Sun className="theme-icon-light" size={14} strokeWidth={2}/>
                <Moon className="theme-icon-dark" size={14} strokeWidth={2}/>
            </span>
        </button>
    );

    if (!labeled) return control;

    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
                <span className="text-lg font-bold text-foreground">Тема</span>
                <span className="text-sm text-secondary">
                    <span className="theme-label-light">Світла</span>
                    <span className="theme-label-dark">Темна</span>
                </span>
            </div>
            {control}
        </div>
    );
}
