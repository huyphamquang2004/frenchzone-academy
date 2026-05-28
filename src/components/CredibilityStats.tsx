import { Award, BookOpenCheck, GraduationCap, UsersRound } from "lucide-react";
import { credibilityStats } from "@/lib/content";

const icons = [UsersRound, BookOpenCheck, Award, GraduationCap];

export function CredibilityStats() {
  return (
    <section className="rounded-[2rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5 md:p-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Uy tín
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Học với lộ trình rõ và nền tảng nghiêm túc
          </h2>
        </div>
        <p className="max-w-sm leading-7 text-muted">
          Những điểm chính để học viên và phụ huynh dễ hình dung trước khi chọn
          lớp.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {credibilityStats.map((stat, index) => {
          const Icon = icons[index] ?? Award;

          return (
            <article
              key={stat.value}
              className="rounded-[1.5rem] border border-line bg-gradient-to-br from-white to-stone-50 p-5 shadow-sm shadow-stone-950/5"
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
      </div>
    </section>
  );
}
