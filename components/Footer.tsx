import Logotype from "@/components/ui/Logotype";

export default function Footer() {
    return (
        <footer className="flex flex-col bg-background px-6 py-8 gap-6">
            <Logotype/>

            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-secondary text-sm">
                <a href="#advantages">Переваги</a>
                <a href="#showcase">Як це працює</a>
                <a href="#how-to-start">Як почати</a>
            </nav>

            <hr className="border-border w-full"/>

            <p className="text-secondary text-sm">
                Студентський помічник, не офіційний довідник університету.
            </p>
        </footer>
    )
}