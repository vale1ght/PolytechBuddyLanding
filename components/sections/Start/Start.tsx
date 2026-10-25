import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import StepsList from "@/components/sections/Start/StepsList";

export default function Start() {
    return (
        <Section id="start" className="gap-6 bg-surface-blue lg:gap-14 lg:py-24 xl:gap-16 xl:py-28">
            <div className="contents lg:flex lg:flex-col lg:items-start lg:gap-6">
                <Badge>Три кроки – і на старті</Badge>

                <h2 className="text-[32px] font-extrabold tracking-[0.004em] leading-[1.25em] lg:text-[2.75rem] lg:leading-[1.08] lg:tracking-[-0.03em] xl:text-[3.25rem]">
                    Почати простіше, <br />
                    ніж знайти пару.
                </h2>
            </div>

            <StepsList/>
        </Section>
    )
}