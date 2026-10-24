import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Chat from "@/components/sections/Showcase/Chat/Chat";

export default function Showcase() {
    return (
        <Section id="showcase" className="gap-6">
            <Badge>Не пошуковик, а помічник</Badge>

            <h2 className="text-[32px] font-extrabold tracking-[0.004em] leading-[1.25em]">
                Обирай у меню, <br/>
                Бадді виконає.
            </h2>

            <Chat/>
        </Section>
    );
}
