import { useEffect } from "react";

export const useCloseMenuOnLogoClick = (isOpen: boolean, onClose: () => void) => {
    useEffect(() => {
        const logoElement = document.getElementById("header-logo");

        if (isOpen && logoElement) {
            logoElement.addEventListener("click", onClose);
        }

        return () => {
            if (logoElement) {
                logoElement.removeEventListener("click", onClose);
            }
        };
    }, [isOpen, onClose]);
};
