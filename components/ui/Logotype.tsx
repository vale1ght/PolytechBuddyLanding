import Image from "next/image";
import clsx from "clsx";

interface Props {
    id?: string;
    className?: string;
    onClick?: () => void;
}

export default function Logotype({ id, className, onClick }: Props) {
    return (
        <a
            id={id}
            href="#hero"
            onClick={onClick}
            className={clsx("flex items-center gap-2.5 cursor-pointer", className)}
        >
            <Image
                alt="Логотип"
                src="/logo.svg"
                width={36}
                height={36}
                className="rounded-xl"
                priority
            />

            <span className="text-lg font-bold text-foreground">
                Політех Бадді
            </span>
        </a>
    );
}
