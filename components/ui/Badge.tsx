import clsx from 'clsx'
import {ReactNode} from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export default function Badge({children, className}: Props) {
    return (
        <span className={clsx(
            "text-[11px] font-bold tracking-[0.125em] text-accent-blue uppercase",
            className)}
        >
            {children}
        </span>
    );
}
