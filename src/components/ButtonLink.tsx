import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: "arrow" | "message";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = "arrow",
}: ButtonLinkProps) {
  const classes = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-sm shadow-red-900/10",
    secondary:
      "border border-line bg-white text-foreground hover:border-primary hover:text-primary",
    ghost: "text-primary hover:bg-red-50",
  };

  const Icon = icon === "message" ? MessageCircle : ArrowRight;

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${classes[variant]}`}
    >
      {children}
      <Icon aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
