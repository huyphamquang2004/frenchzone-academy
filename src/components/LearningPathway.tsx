import { BookOpenCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { learningPathway } from "@/lib/content";

export function LearningPathway() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Lộ trình"
          title="Lộ trình từ nền tảng đến sử dụng tiếng Pháp độc lập hơn"
          body="Mỗi lớp là một bậc rõ ràng, giúp bạn biết mình đang ở đâu và cần ôn tiếp điểm gì."
        />
        <p className="max-w-sm leading-7 text-sm text-muted">
          Bạn chưa chắc mình đang ở đâu? Làm mini quiz hoặc đăng ký tư vấn miễn
          phí.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {learningPathway.map((item) => (
          <article
            key={item.level}
            className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-accent">
              <BookOpenCheck aria-hidden="true" className="h-5 w-5" />
            </div>
            <p className="mt-4 text-sm font-semibold text-muted">{item.level}</p>
            <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
            <p className="mt-3 leading-7 text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
