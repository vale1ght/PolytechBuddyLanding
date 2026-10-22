"use client";

import clsx from "clsx";
import {useState} from "react";
import {useScrollLock} from "@/hooks/useScrollLock";
import {useCloseMenuOnLogoClick} from "@/hooks/useCloseMenuOnLogoClick";
import MenuButton from "./MenuButton";
import MenuTitle from "./MenuTitle";
import LinksList from "./LinksList";
import CTA from "./CTA";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const closeMenu = () => setIsOpen(false);

    useScrollLock(isOpen);
    useCloseMenuOnLogoClick(isOpen, closeMenu);

    return (
        <>
            <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>

            <div
                className={clsx(
                    "fixed inset-x-0 top-20 bg-background transition-all duration-300 ease-in-out flex flex-col z-10 bottom-0",
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                )}
            >
                <div
                    className="overflow-y-auto overscroll-none px-6 py-8 flex flex-col flex-1 gap-6 mx-auto w-full max-w-7xl">
                    <MenuTitle/>

                    <LinksList onClick={closeMenu}/>

                    <div className="flex-1"/>

                    <CTA/>
                </div>
            </div>
        </>
    )
}