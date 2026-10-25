import Image from "next/image"
import Section from "@/components/ui/Section";
import TelegramButton from "@/components/ui/TelegramButton";

export default function CTA() {
    return (
        <Section id="cta" className="bg-primary gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-16 xl:gap-20 xl:py-20">
            <div className="contents lg:flex lg:max-w-xl lg:flex-col lg:gap-5">
                <div className="flex items-center justify-start gap-3">
                    <Image
                        alt="Логотип"
                        src="/logo-white.svg"
                        width={52}
                        height={52}
                        className="h-[52px] w-[52px] rounded-xl lg:h-10 lg:w-10"
                    />

                    <div className="flex rounded-2xl bg-accent-yellow px-3.5 py-2.5 font-semibold text-black -rotate-3 lg:rounded-full lg:px-4">
                        Ну що, на старт?
                    </div>
                </div>

                <h2 className="text-[38px] font-extrabold tracking-[0.004em] leading-[1.25em] text-white lg:text-[3.25rem] lg:leading-[1.05] lg:tracking-[-0.03em] xl:text-[3.75rem]">
                    Бадді поруч. <br/>
                    Меню під рукою.
                </h2>
            </div>

            <div className="contents lg:flex lg:w-full lg:max-w-sm lg:shrink-0 lg:flex-col lg:items-start lg:gap-6">
                <p className="text-[16px] leading-relaxed text-white">
                    Відкрий бота, надішли /start та обери доступну дію. Побачимось у Telegram :)
                </p>

                <TelegramButton variant="white" arrow/>
            </div>
        </Section>
    );
}
