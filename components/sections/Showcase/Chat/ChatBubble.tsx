import { ReactNode } from "react";

interface ChatBubbleProps {
    children: ReactNode;
    isUser?: boolean;
}

export default function ChatBubble({ children, isUser = false }: ChatBubbleProps) {
    return (
        <div
            className={`w-fit max-w-[85%] px-4 mb-4 rounded-[20px] ${
                isUser
                    ? "ml-auto bg-surface-blue text-foreground rounded-br-sm py-3"
                    : "mr-auto bg-primary text-white rounded-bl-sm py-4"
            }`}
        >
            <p className={`text-[15px] ${isUser ? "leading-snug" : "leading-relaxed"}`}>
                {children}
            </p>
        </div>
    );
}
