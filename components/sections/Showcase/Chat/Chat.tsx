import ChatHeader from "./ChatHeader";
import ChatBubble from "./ChatBubble";
import ChatButton from "./ChatButton";
import DesktopChat from "./DesktopChat";

export default function ChatShowcase() {
    return (
        <div className="w-full min-w-0">
            <div className="lg:hidden w-full bg-surface-raised rounded-4xl p-5 sm:p-6 flex flex-col">
                <ChatHeader />

                <hr className="border-muted my-5 w-full" />

                <span className="text-center text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-5">
                    Приклад розмови
                </span>

                <ChatBubble isUser>
                    /start
                </ChatBubble>

                <ChatBubble>
                    Привіт! 👋 <br/> Обери одну із доступних дій у меню.
                </ChatBubble>

                <div className="flex flex-col gap-2">
                    <ChatButton>Розклад</ChatButton>
                    <ChatButton>Завдання</ChatButton>
                    <ChatButton>Успішність</ChatButton>
                </div>
            </div>

            <DesktopChat/>
        </div>
    );
}
