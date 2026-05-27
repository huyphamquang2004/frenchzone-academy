import { Award } from "lucide-react";
import { teacherIntro } from "@/lib/content";

export function TeacherIntro() {
  return (
    <section className="grid gap-6 rounded-[2rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5 md:grid-cols-[auto_1fr] md:p-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-accent">
        <Award aria-hidden="true" className="h-8 w-8" />
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Giáo viên
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Học với Phạm Quang Huy
        </h2>
        <p className="mt-4 leading-8 text-muted">{teacherIntro}</p>
      </div>
    </section>
  );
}
