import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

const navItems = [
  { href: "/a1", label: "A1" },
  { href: "/a2", label: "A2" },
  { href: "/b1", label: "B1" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/95 backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="text-base font-bold tracking-tight sm:text-lg">
          Frenchzone Academy
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-muted sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-red-50 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <ButtonLink href="/#registration" icon="message">
            Tư vấn lớp A1
          </ButtonLink>
        </div>

        <Link
          href="/#registration"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white sm:hidden"
        >
          Tư vấn A1
        </Link>
      </div>
    </header>
  );
}
