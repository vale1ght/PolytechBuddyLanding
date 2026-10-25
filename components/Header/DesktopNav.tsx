import {NAV_LINKS} from "@/constants/navigation";
import ThemeSwitch from "@/components/theme/ThemeSwitch";

export default function DesktopNav() {
    return (
        <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-secondary transition-colors hover:text-foreground"
                >
                    {link.short}
                </a>
            ))}
            <ThemeSwitch/>
        </nav>
    );
}
