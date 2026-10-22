import Logotype from "@/components/ui/Logotype";
import MobileMenu from "@/components/Header/MobileMenu";

export default function Header() {
    return (
        <header className="w-full bg-background border-b border-border sticky top-0 z-50">
            <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
                <Logotype id="header-logo"/>

                <MobileMenu/>
            </div>
        </header>
    )
}