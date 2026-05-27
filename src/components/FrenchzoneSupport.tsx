import { ArrowUpRight, BookOpenCheck, CheckCircle2 } from "lucide-react";
import { frenchzonePlatform } from "@/lib/content";

export function FrenchzoneSupport() {
  return (
    <section className="grid gap-7 overflow-hidden rounded-[2rem] bg-stone-950 p-6 text-white shadow-sm shadow-stone-950/10 md:grid-cols-[1fr_0.85fr] md:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-200">
          Frenchzone platform
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          {frenchzonePlatform.title}
        </h2>
        <p className="mt-4 leading-8 text-stone-200">
          {frenchzonePlatform.body}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={frenchzonePlatform.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-stone-950 transition hover:bg-red-100"
          >
            {frenchzonePlatform.cta}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <a
            href="#registration"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Tư vấn lộ trình học
          </a>
        </div>
      </div>
      <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
        <BookOpenCheck aria-hidden="true" className="h-9 w-9 text-red-200" />
        <ul className="mt-6 grid gap-3">
          {frenchzonePlatform.bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-6 text-stone-200"
            >
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-red-200"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-2xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-stone-300">
          {frenchzonePlatform.disclaimer}
        </p>
      </div>
    </section>
  );
}
