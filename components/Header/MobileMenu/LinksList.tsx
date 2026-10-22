import LinkItem from "./LinkItem";
import {NAV_LINKS} from "@/constants/navigation";

interface Props {
    onClick: () => void;
}

export default function LinksList({onClick}: Props) {
    return (
        <ul className="flex flex-col border-t border-border">
            {NAV_LINKS.map((link, index) => (
                <LinkItem
                    key={index}
                    title={link.title}
                    desc={link.desc}
                    href={link.href}
                    onClick={onClick}
                />
            ))}
        </ul>
    )
}