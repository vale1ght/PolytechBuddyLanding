import {MorphIcon} from "morphicons/react";
import {Menu, X} from "lucide";

interface Props {
    isOpen: boolean;
    onClick: () => void;
}

export default function MenuButton({isOpen, onClick}: Props) {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center w-11 h-11 rounded-xl border border-muted cursor-pointer"
            aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
        >
            <MorphIcon icon={isOpen ? X : Menu} size="24px"/>
        </button>
    );
}
