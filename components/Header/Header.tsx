import Logotype from "@/components/ui/Logotype";
import MobileMenu from "@/components/Header/MobileMenu";
import DesktopNav from "@/components/Header/DesktopNav";

export default function Header() {
    return (
        <header className="w-full bg-background border-b border-border sticky top-0 z-50">
            <div className="page-gutter flex items-center justify-between h-20 px-6">
                <Logotype id="header-logo"/>

                <DesktopNav/>

                <div className="lg:hidden">
                    <MobileMenu/>
                </div>
            </div>
        </header>
    )
}