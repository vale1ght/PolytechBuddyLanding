import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import FeaturesList from "./FeaturesList";

export default function Features() {
    return (
        <Section id="features" className="bg-surface-raised gap-6">
            <Badge>На твоєму боці</Badge>

            <h2 className="text-[32px] font-extrabold tracking-[0.004em] leading-[1.25em]">
                Менше хаосу. <br/>
                Більше чітких дій.
            </h2>

            <FeaturesList />
        </Section>
    )
}