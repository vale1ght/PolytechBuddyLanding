import {FEATURES} from "@/constants/features";
import FeatureItem from "./FeatureItem";

export default function FeaturesList() {
    return (
        <ul className="flex flex-col">
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