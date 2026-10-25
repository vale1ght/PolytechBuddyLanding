import Image from "next/image";
import Badge from "@/components/ui/Badge";

export default function HeroPreview() {
    return (
        <div className="mt-8 w-full lg:mt-0 lg:flex lg:flex-1 lg:justify-end">
            <div className="relative w-full overflow-hidden rounded-[28px] bg-surface-blue px-5 pt-5 pb-6 sm:px-7 lg:max-w-[540px] lg:rounded-[32px] lg:px-8 lg:pt-8 lg:pb-8 xl:px-10 xl:pt-9 xl:pb-10">
                <Badge>Знайомся, це твій Бадді</Badge>

                <div className="relative mt-4 lg:mt-5">
                    <div className="absolute top-0 right-0 z-10 -rotate-[3deg] rounded-2xl bg-white px-4 py-3 text-[14px] font-semibold leading-none text-[#19221F] shadow-[0_10px_24px_-16px_rgba(25,34,31,0.4)] sm:px-5 sm:py-3.5 sm:text-[16px] lg:px-6 lg:py-4 lg:text-[18px]">
                        Коли там наступна пара?
                    </div>

                    <div className="flex items-end gap-4 pt-16 sm:pt-[4.75rem] lg:gap-6 lg:pt-24">
                        <Image
                            src="/logo.svg"
                            alt=""
                            width={200}
                            height={200}
                            className="h-[104px] w-[104px] shrink-0 -translate-y-[18px] -rotate-[8deg] rounded-[32px] sm:h-[118px] sm:w-[118px] lg:h-[140px] lg:w-[140px] lg:translate-y-0 lg:rounded-[40px] xl:h-[156px] xl:w-[156px]"
                        />

                        <div className="mb-1 min-w-0 rotate-[6deg] rounded-2xl bg-primary px-4 py-3 text-white lg:px-5 lg:py-3.5">
                            <p className="text-[10px] font-bold tracking-[0.14em] text-[#B7C8FF] uppercase lg:text-[11px]">
                                Бадді
                            </p>
                            <p className="mt-1 text-[15px] leading-[1.15] font-bold sm:text-[16px] lg:text-[18px] xl:text-[20px]">
                                До наступної пари<br/>
                                залишилось 30 хв
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
