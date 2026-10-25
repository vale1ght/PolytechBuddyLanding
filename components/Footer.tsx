import Logotype from "@/components/ui/Logotype";

export default function Footer() {
    return (
        <footer className="bg-background">
            <div className="page-gutter flex flex-col px-6 py-8 gap-6 lg:py-10 lg:gap-5">
                <div className="contents lg:flex lg:items-center lg:justify-between lg:gap-8">
                    <Logotype/>

                    <nav className="flex flex-wrap gap-x-6 gap-y-3 text-secondary text-sm lg:gap-x-8">
                        <a href="#features" className="transition-colors hover:text-foreground">Переваги</a>
                        <a href="#showcase" className="transition-colors hover:text-foreground">Як це працює</a>
                        <a href="#start" className="transition-colors hover:text-foreground">Як почати</a>
                    </nav>
                </div>

                <hr className="border-border w-full lg:hidden"/>

                <p className="text-secondary text-sm">
                    Студентський помічник, не офіційний довідник університету.
                </p>
            </div>
        </footer>
    )
}