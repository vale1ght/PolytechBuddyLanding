import {ReactNode} from "react";
import clsx from "clsx";
import TelegramIcon from "@/components/icons/TelegramIcon";

type ButtonVariants = "primary" | "white";

interface Props {
    children?: ReactNode;
    variant?: ButtonVariants;
}

function TelegramButton({ children = "Відкрити в Telegram", variant = "primary" }: Props) {
    const variantClasses = {
        primary: "bg-primary text-white",
        white: "bg-white text-primary",
    };

    return (
        <a
            href="https://t.me/PolytechBuddyBot"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
                "inline-flex items-center justify-center gap-2.5 font-medium px-6 py-3.5 rounded-2xl hover:opacity-90 transition-opacity w-full sm:w-auto lg:w-fit lg:self-start cursor-pointer",
                variantClasses[variant]
            )}
        >
            <TelegramIcon/>

            <span>
                {children}
            </span>
        </a>
    );
}

export default TelegramButton;
