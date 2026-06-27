import { navItems } from "@/data/nav";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-7 py-4">
        <a
          href="#home"
          className="flex items-center gap-2.5 text-ink no-underline"
        >
          <span className="grid h-[30px] w-[30px] place-items-center rounded-lg border border-line2 font-display font-bold text-accent">
            CV
          </span>
          <span className="font-display text-[15px] font-semibold tracking-[0.01em]">
            Carlos Varão
          </span>
        </a>

        <nav className="hidden items-center gap-[30px] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navlink group relative text-sm font-medium text-muted transition-colors duration-300 hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
