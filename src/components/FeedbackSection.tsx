import { MessageSquareText } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { studentFeedback } from "@/lib/content";

export function FeedbackSection() {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="Feedback"
        title="Học viên thường đánh giá cao điều gì?"
        body="Dưới đây là các nhóm giá trị học viên thường cần khi học tiếng Pháp theo lớp nhỏ. Phần nhận xét chi tiết sẽ được cập nhật bằng feedback thật sau."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {studentFeedback.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50 text-primary">
              <MessageSquareText aria-hidden="true" className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-bold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-3 leading-7 text-muted">{item.body}</p>
          </article>
        ))}
      </div>

      <p className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm font-medium leading-6 text-accent">
        Phần feedback chi tiết từ học viên sẽ được cập nhật thêm sau khi tổng
        hợp lại các nhận xét thật.
      </p>
    </section>
  );
}
