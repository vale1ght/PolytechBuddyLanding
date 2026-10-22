import TelegramButton from "@/components/ui/TelegramButton";

export default function CTA() {
    return (
        <div className="mt-auto bg-surface-raised rounded-3xl p-5">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold tracking-tight text-foreground">
                            Ну що, на старт?
                        </h3>

                        <span className="text-sm font-semibold text-accent-blue">
                            /start
                        </span>
                    </div>

                    <p className="text-sm text-secondary">
                        Відкривай бота та обирай доступну дію.
                    </p>
                </div>

                <TelegramButton/>
            </div>
        </div>
    );
}
