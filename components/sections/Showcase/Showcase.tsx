import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Chat from "@/components/sections/Showcase/Chat/Chat";

export default function Showcase() {
    return (
        <Section id="showcase" className="gap-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24 xl:gap-20 xl:py-28">
            <div className="contents lg:flex lg:flex-col lg:gap-6 lg:pr-4">
                <Badge>Не пошуковик, а помічник</Badge>

                <h2 className="text-[32px] font-extrabold tracking-[0.004em] leading-[1.25em] lg:text-[2.75rem] lg:leading-[1.08] lg:tracking-[-0.03em] xl:text-[3.25rem]">
                    Обирай у меню, <br/>
                    Бадді виконає.
                </h2>

                <p className="hidden max-w-md text-[16px] leading-relaxed text-secondary lg:block">
                    Назви кнопок тут — лише приклад. Доступні пункти й команди дивись у самому боті.
                </p>
            </div>

            <Chat/>
        </Section>
    );
}
