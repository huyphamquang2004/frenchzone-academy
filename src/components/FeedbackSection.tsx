import { SectionHeading } from "@/components/SectionHeading";
import { studentFeedback } from "@/lib/content";

export function FeedbackSection() {
  return (
    <section className="rounded-[2rem] border border-line bg-gradient-to-br from-white via-red-50/45 to-blue-50/60 p-6 shadow-sm shadow-stone-950/5 md:p-8">
      <SectionHeading
        eyebrow="Feedback"
        title="Học viên nói gì sau khi học?"
        body="Một vài lời nhắn và cảm nhận mình thường nhận được trong quá trình đồng hành cùng học viên."
        align="center"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {studentFeedback.map((quote) => (
          <article
            key={quote}
            className="flex min-h-36 items-center rounded-[1.5rem] border border-white/80 bg-white/90 p-6 shadow-sm shadow-stone-950/5 ring-1 ring-stone-950/[0.03]"
          >
            <p className="text-base font-semibold leading-7 text-foreground">
              {quote}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
