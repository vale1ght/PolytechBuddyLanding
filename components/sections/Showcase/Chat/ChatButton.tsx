import { ReactNode } from "react";

interface ChatButtonProps {
    children: ReactNode;
    disabled?: boolean;
}

export default function ChatButton({ children, disabled = true }: ChatButtonProps) {
    return (
        <button
            disabled={disabled}
            className="w-full border border-primary text-primary text-[15px] font-medium py-3.5 rounded-2xl hover:bg-white/5 transition-colors"
        >
            {children}
        </button>
    );
}
