import {STEPS} from "@/constants/steps";
import StepItem from "./StepItem";

export default function StepsList() {
    return (
        <ul className="flex flex-col gap-5 lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12">
            {STEPS.map((step, index) => (
                <StepItem
                    key={index}
                    number={"0" + (index + 1)}
                    title={step.title}
                    description={step.description}
                />
            ))}
        </ul>
    )
}