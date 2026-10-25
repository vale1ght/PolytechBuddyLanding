import {FEATURES} from "@/constants/features";
import FeatureItem from "./FeatureItem";

export default function FeaturesList() {
    return (
        <ul className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12">
            {FEATURES.map((feature, index) => (
                <FeatureItem
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </ul>
    )
}