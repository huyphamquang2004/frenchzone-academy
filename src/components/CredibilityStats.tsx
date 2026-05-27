import { Award, BookOpenCheck, GraduationCap, UsersRound } from "lucide-react";
import { credibilityStats } from "@/lib/content";

const icons = [BookOpenCheck, Award, UsersRound, GraduationCap];

export function CredibilityStats() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {credibilityStats.map((stat, index) => {
        const Icon = icons[index] ?? Award;

        return (
          <article
            key={stat.value}
            className="rounded-[1.5rem] border border-line bg-white p-5 shadow-sm shadow-stone-950/5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-accent">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </div>
            <p className="mt-5 text-2xl font-black tracking-tight text-primary-dark">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-semibold leading-6 text-muted">
              {stat.label}
            </p>
          </article>
        );
      })}
    </section>
  );
}
