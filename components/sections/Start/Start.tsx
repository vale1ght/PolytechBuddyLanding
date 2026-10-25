import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import StepsList from "@/components/sections/Start/StepsList";

export default function Start() {
    return (
        <Section id="start" className="gap-6 bg-surface-blue">
            <Badge>Три кроки – і на старті</Badge>

            <h2 className="text-[32px] font-extrabold tracking-[0.004em] leading-[1.25em]">
                Почати простіше, <br />
                ніж знайти пару.
            </h2>

            <StepsList/>
        </Section>
    )
}