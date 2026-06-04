import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { levelSelectionGuide } from "@/lib/content";

export function LevelGuide() {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="Sau nền tảng A1"
        title="A1 là bước đầu cho lộ trình dài hơn"
        body="Trang chủ đang tập trung tuyển sinh A1, nhưng các route A2/B1 vẫn có sẵn để học viên xem lộ trình tiếp theo khi nền tảng đã chắc."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {levelSelectionGuide.map((item) => (
          <Link
            key={item.level}
            href={item.href}
            className="group rounded-[1.5rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md hover:shadow-red-900/10"
          >
            <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-sm font-black text-primary">
              {item.level}
            </span>
            <h3 className="mt-5 text-xl font-bold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-3 leading-7 text-muted">{item.body}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
              Xem lớp {item.level}
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition group-hover:translate-x-1"
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
