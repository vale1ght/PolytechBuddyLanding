import {LucideIcon} from "lucide-react";

interface Props {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function FeatureItem({icon: Icon, title, description}: Props) {
    return (
        <li className="flex items-start gap-4 py-6 border-b border-border first:pt-0 last:pb-0 last:border-none">
            <div className="w-11 h-11 shrink-0 bg-surface-blue rounded-2xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent-blue" strokeWidth={1.5}/>
            </div>

            <div>
                <h3 className="text-[20px] leading-tight font-bold text-foreground">
                    {title}
                </h3>

                <p className="text-[16px] leading-relaxed text-secondary">
                    {description}
                </p>
            </div>
        </li>
    );
}
