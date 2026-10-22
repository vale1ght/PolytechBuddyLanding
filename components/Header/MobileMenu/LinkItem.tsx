import { ArrowRight } from "lucide-react";

interface Props {
    title: string;
    desc: string;
    href: string;
    onClick: () => void;
}

export default function LinkItem({title, desc, href, onClick}: Props) {
    return (
        <li className="border-b border-border">
            <a
                href={href}
                onClick={onClick}
                className="flex items-center justify-between py-5 group"
            >
                <div className="flex flex-col pr-4">
                    <span className="text-2xl font-bold text-foreground">
                        {title}
                    </span>

                    <span className="text-sm text-secondary">
                        {desc}
                    </span>
                </div>

                <ArrowRight className="text-accent-blue shrink-0" size={24}/>
            </a>
        </li>
    );
}