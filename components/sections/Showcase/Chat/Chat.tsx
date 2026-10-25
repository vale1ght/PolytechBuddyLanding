import ChatHeader from "./ChatHeader";
import ChatBubble from "./ChatBubble";
import ChatButton from "./ChatButton";

export default function ChatShowcase() {
    return (
        <div className="w-full min-w-0 lg:ml-auto lg:max-w-[460px]">
            <div className="flex w-full flex-col rounded-4xl bg-surface-raised p-5 sm:p-6">
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
        </div>
    );
}
