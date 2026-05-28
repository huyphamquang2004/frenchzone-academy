import { ArrowUpRight, BookOpenCheck, CheckCircle2 } from "lucide-react";
import { frenchzonePlatform } from "@/lib/content";

export function FrenchzoneSupport() {
  return (
    <section className="grid gap-8 overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-red-50 p-6 shadow-sm shadow-stone-950/5 md:grid-cols-[1fr_0.85fr] md:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Frenchzone platform
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {frenchzonePlatform.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-8 text-muted">
          {frenchzonePlatform.body}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={frenchzonePlatform.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-blue-950/15 transition hover:bg-blue-700"
          >
            {frenchzonePlatform.cta}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="rounded-[1.5rem] border border-white/80 bg-white/85 p-5 shadow-sm shadow-stone-950/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-primary">
          <BookOpenCheck aria-hidden="true" className="h-6 w-6" />
        </div>
        <ul className="mt-6 grid gap-3">
          {frenchzonePlatform.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm font-medium leading-6 text-muted"
            >
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm font-medium leading-6 text-accent">
          {frenchzonePlatform.disclaimer}
        </p>
      </div>
    </section>
  );
}
