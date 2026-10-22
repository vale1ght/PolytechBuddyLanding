import Badge from "@/components/ui/Badge";

export default function MenuTitle() {
    return (
        <div className="flex flex-col gap-3">
            <Badge>
                Навігація
            </Badge>

            <h2 className="text-[2.5rem] font-bold tracking-tight leading-12 text-foreground">
                Куди далі?
            </h2>
        </div>
    );
}
