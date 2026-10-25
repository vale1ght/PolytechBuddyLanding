import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import FeaturesList from "./FeaturesList";

export default function Features() {
    return (
        <Section id="features" className="bg-surface-raised gap-6 lg:gap-14 lg:py-24 xl:gap-16 xl:py-28">
            <div className="contents lg:flex lg:flex-col lg:items-start lg:gap-6">
                <Badge>На твоєму боці</Badge>

                <h2 className="text-[32px] font-extrabold tracking-[0.004em] leading-[1.25em] lg:text-[2.75rem] lg:leading-[1.08] lg:tracking-[-0.03em] xl:text-[3.25rem]">
                    Менше хаосу. <br/>
                    Більше чітких дій.
                </h2>
            </div>

            <FeaturesList />
        </Section>
    )
}