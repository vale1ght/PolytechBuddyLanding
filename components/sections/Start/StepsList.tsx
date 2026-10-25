import {STEPS} from "@/constants/steps";
import StepItem from "./StepItem";

export default function StepsList() {
    return (
        <ul className="flex flex-col gap-5">
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