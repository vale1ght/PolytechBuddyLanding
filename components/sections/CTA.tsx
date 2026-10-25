import Image from "next/image"
import Section from "@/components/ui/Section";
import TelegramButton from "@/components/ui/TelegramButton";

export default function CTA() {
    return (
        <Section id="cta" className="bg-primary gap-6">
            <div className="flex items-center justify-start gap-3">
                <Image
                    alt="Логотип"
                    src="/logo-white.svg"
                    width={52}
                    height={52}
                    className="rounded-xl"
                />

                <div className="flex px-3.5 py-2.5 rounded-2xl bg-accent-yellow font-semibold text-black -rotate-3">
                    Ну що, на старт?
                </div>
            </div>

            <h2 className="text-[38px] font-extrabold tracking-[0.004em] leading-[1.25em]">
                Бадді поруч. <br/>
                Меню під рукою.
            </h2>

            <p className="text-[16px] leading-relaxed text-white">
                Відкрий бота, надішли /start та обери доступну дію. Побачимось у Telegram :)
            </p>

            <TelegramButton variant="white"/>
        </Section>
    );
}
