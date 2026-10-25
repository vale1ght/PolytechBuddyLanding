interface Props {
    number: string;
    title: string;
    description: string;
}

export default function StepItem({number, title, description}: Props) {
    return (
        <li className="flex items-start gap-4">
            <div className="w-11 shrink-0 flex items-start pt-0.5">
                <span className="text-[32px] font-extrabold text-accent-blue leading-none">
                    {number}
                </span>
            </div>

            <div className="flex flex-col gap-1.5">
                <h3 className="text-[20px] leading-tight font-bold text-foreground">
                    {title}
                </h3>

                <p className="text-[16px] leading-relaxed text-secondary">
                    {description}
                </p>
            </div>
        </li>
    )
}