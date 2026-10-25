import Badge from "@/components/ui/Badge";
import TelegramButton from "@/components/ui/TelegramButton";
import Section from "@/components/ui/Section";
import HeroPreview from "@/components/sections/HeroPreview";

export default function Hero() {
    return (
        <Section id="hero" className="flex flex-col pt-7 pb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:pt-16 lg:pb-20 xl:gap-16 xl:pt-20 xl:pb-24">
            <div className="flex flex-col gap-6 lg:max-w-[34rem] lg:shrink-0 xl:max-w-[38rem] xl:gap-8">
                <Badge>Твій студентський бот</Badge>

                <h1 className="text-5xl font-extrabold tracking-tighter text-foreground lg:text-[3.5rem] lg:leading-[0.96] xl:text-[4.15rem]">
                    Універ – <br/>
                    не квест. <br/>
                    Коли є <span className="text-primary">Бадді.</span>
                </h1>

                <p className="text-[16px] leading-relaxed text-secondary lg:max-w-[32rem] lg:text-[17px]">
                    Забудь про нескінченні пошуки в чатах та на сайтах.
                    Один клік у меню – і ти миттєво отримуєш потрібну інформацію.
                </p>

                <TelegramButton/>
            </div>

            <HeroPreview/>
        </Section>
    )
}