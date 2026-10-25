import Image from "next/image";
import {Send} from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function HeroPreview() {
    return (
        <div className="hidden lg:flex lg:flex-1 lg:justify-end" aria-hidden="true">
            <div className="relative w-full max-w-[540px] overflow-hidden rounded-[32px] bg-surface-blue px-8 pt-8 pb-8 xl:px-10 xl:pt-9 xl:pb-10">
                <Badge>Знайомся, це твій Бадді</Badge>

                <div className="relative mt-6 h-[268px] xl:mt-7 xl:h-[292px]">
                    <Image
                        src="/logo.svg"
                        alt=""
                        width={200}
                        height={200}
                        className="absolute left-1 top-10 h-[158px] w-[158px] -rotate-6 rounded-[46px] xl:left-2 xl:top-11 xl:h-[176px] xl:w-[176px]"
                    />

                    <div className="absolute right-0 top-1 inline-flex -rotate-[8deg] items-center gap-7 rounded-2xl bg-white px-6 py-4 xl:top-2 xl:gap-9 xl:px-7 xl:py-[18px]">
                        <span className="text-[26px] font-extrabold leading-none tracking-tight text-primary xl:text-[30px]">
                            /start
                        </span>
                        <Send className="h-5 w-5 text-primary" strokeWidth={1.75}/>
                    </div>

                    <div className="absolute left-[104px] top-[198px] rotate-[8deg] rounded-2xl bg-accent-yellow px-5 py-3 text-[15px] font-semibold leading-none text-[#19221F] xl:left-[118px] xl:top-[214px] xl:px-6 xl:py-3.5 xl:text-[16px]">
                        Твій хід — обрати дію :)
                    </div>
                </div>
            </div>
        </div>
    );
}
