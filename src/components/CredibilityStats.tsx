import { Award, BookOpenCheck, GraduationCap, UsersRound } from "lucide-react";
import { credibilityStats } from "@/lib/content";

const icons = [BookOpenCheck, Award, UsersRound, GraduationCap];

export function CredibilityStats() {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Nền tảng tin cậy
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Lớp A1 được xây cho người cần học lại có hệ thống
        </h2>
        <p className="mt-3 leading-7 text-muted">
          Đức và Huy có nền tảng học và giảng dạy tiếng Pháp lâu dài. Lớp học
          ưu tiên sự dễ hiểu, thực tế và phù hợp với học viên mới bắt đầu hoặc
          bị mất gốc.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
}
