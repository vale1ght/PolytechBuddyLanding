import Badge from "@/components/ui/Badge";
import TelegramButton from "@/components/ui/TelegramButton";
import Section from "@/components/ui/Section";

export default function Hero() {
    return (
        <Section id="hero" className="flex flex-col pt-7 pb-10">
            <div className="flex flex-col gap-6">
                <Badge>Твій студентський бот</Badge>

                <h1 className="text-5xl font-extrabold tracking-tighter text-foreground">
                    Універ – <br/>
                    не квест. <br/>
                    Коли є <span className="text-primary">Бадді.</span>
                </h1>

                <p className="text-[16px] leading-relaxed text-secondary">
                    Забудь про нескінченні пошуки в чатах та на сайтах.
                    Один клік у меню – і ти миттєво отримуєш потрібну інформацію.
                </p>

                <TelegramButton/>
            </div>

            <div>
                {/* TODO: Preview card */}
            </div>
        </Section>
    )
}