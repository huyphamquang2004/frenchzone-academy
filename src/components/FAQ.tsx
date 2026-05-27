import { faqItems } from "@/lib/content";

export function FAQ() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Câu hỏi thường gặp
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-line bg-white p-5"
          >
            <summary className="cursor-pointer list-none text-base font-semibold">
              {item.question}
            </summary>
            <p className="mt-3 leading-7 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
