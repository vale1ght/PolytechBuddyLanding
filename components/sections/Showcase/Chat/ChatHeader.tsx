import Image from "next/image";

export default function ChatHeader() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image
                    src="/logo.svg"
                    alt="Логотип Політех Бадді"
                    width={44}
                    height={44}
                    className="rounded-xl shrink-0"
                />
                <div className="flex flex-col">
                    <h3 className="text-foreground font-bold text-[16px] leading-tight">
                        Політех Бадді
                    </h3>
                    <span className="text-muted-foreground text-[13px]">
                        бот
                    </span>
                </div>
            </div>
            <svg className="w-6 h-6 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 12a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
        </div>
    );
}
