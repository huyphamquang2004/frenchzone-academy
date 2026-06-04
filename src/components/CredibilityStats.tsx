import { Award, BookOpenCheck, GraduationCap, UsersRound } from "lucide-react";
import { credibilityStats } from "@/lib/content";

const icons = [BookOpenCheck, Award, UsersRound, GraduationCap];

export function CredibilityStats() {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Vì sao có thể yên tâm?
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Lớp nhỏ, rõ việc, học từng bước
        </h2>
        <p className="mt-3 leading-7 text-muted">
          Bọn mình giữ lớp gọn để có thời gian nghe, sửa và nhắc lại cho từng
          bạn. Cách học ưu tiên dễ hiểu, thực tế và vừa sức.
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
