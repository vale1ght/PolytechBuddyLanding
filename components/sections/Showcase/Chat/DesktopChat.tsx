import Image from "next/image";
import {Check, CornerDownRight} from "lucide-react";

export default function DesktopChat() {
    return (
        <div className="hidden w-full flex-col rounded-[28px] border border-border bg-surface-raised px-6 pt-6 pb-5 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)] lg:flex xl:px-7 xl:pt-7">
            <div className="flex items-center gap-3">
                <Image
                    src="/logo.svg"
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-2xl"
                />
                <div className="flex flex-col">
                    <span className="text-[17px] font-bold leading-tight text-foreground">Політех Бадді</span>
                    <span className="text-[13px] leading-tight text-secondary">бот · команди та готові дії</span>
                </div>
            </div>

            <hr className="mt-4 border-border"/>

            <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary">
                Умовний приклад інтерфейсу
            </p>

            <div className="mt-5 flex justify-end">
                <span className="rounded-full bg-primary px-5 py-2.5 text-[17px] font-bold leading-none text-white">
                    /start
                </span>
            </div>

            <div className="mt-4 rounded-[28px] bg-surface-blue px-4 py-4">
                <p className="mb-4 px-1 text-[16px] font-bold leading-snug text-foreground">
                    Привіт! Обери дію в меню ↓
                </p>

                <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-3 py-3.5 text-[15px] font-semibold text-white">
                        Приклад дії
                        <Check className="h-4 w-4" strokeWidth={2.5}/>
                    </div>
                    <div className="flex items-center justify-center rounded-2xl border border-border bg-surface-raised px-3 py-3.5 text-[15px] font-semibold text-foreground">
                        Інша дія
                    </div>
                </div>
            </div>

            <p className="mt-4 flex items-center gap-2 text-[14px] text-secondary">
                <CornerDownRight className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.25}/>
                Вибір запускає заздалегідь задану дію.
            </p>
        </div>
    );
}
