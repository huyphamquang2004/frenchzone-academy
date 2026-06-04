import { Award, BookOpenCheck, CheckCircle2, FileText } from "lucide-react";
import {
  teacherHighlights,
  teacherIntro,
  teacherMaterials,
} from "@/lib/content";

export function TeacherIntro() {
  return (
    <section className="grid gap-7 rounded-[2rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5 lg:grid-cols-[0.85fr_1.15fr] md:p-8">
      <div>
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-50 text-accent">
          <Award aria-hidden="true" className="h-8 w-8" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Giáo viên và tài liệu
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Học cùng bọn mình
        </h2>
        <p className="mt-4 leading-8 text-muted">{teacherIntro}</p>
      </div>

      <div className="grid gap-4">
        <div className="rounded-[1.5rem] border border-red-100 bg-red-50 p-5">
          <div className="flex items-center gap-3">
            <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-primary" />
            <h3 className="font-bold text-primary-dark">Kinh nghiệm</h3>
          </div>
          <ul className="mt-4 grid gap-3">
            {teacherHighlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.5rem] border border-blue-100 bg-blue-50 p-5">
          <div className="flex items-center gap-3">
            <FileText aria-hidden="true" className="h-5 w-5 text-accent" />
            <h3 className="font-bold text-accent">Tài liệu học</h3>
          </div>
          <ul className="mt-4 grid gap-3">
            {teacherMaterials.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                <BookOpenCheck
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
