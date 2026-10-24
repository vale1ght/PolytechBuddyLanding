import {ReactNode} from "react";
import clsx from "clsx";

interface Props {
    id?: string;
    children: ReactNode;
    className?: string;
}

export default function Section({id, children, className}: Props) {
    return (
        <section id={id} className={clsx(
            "w-full px-6 py-14",
            className,
        )}>
            {children}
        </section>
    )
}