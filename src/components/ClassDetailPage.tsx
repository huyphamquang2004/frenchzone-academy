import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { CredibilityStats } from "@/components/CredibilityStats";
import { FAQ } from "@/components/FAQ";
import { FeedbackSection } from "@/components/FeedbackSection";
import { FrenchzoneSupport } from "@/components/FrenchzoneSupport";
import { LevelGuide } from "@/components/LevelGuide";
import { RegistrationForm } from "@/components/RegistrationForm";
import { SectionHeading } from "@/components/SectionHeading";
import { TeacherIntro } from "@/components/TeacherIntro";
import type { ClassPageContent } from "@/lib/content";
import { howClassesWork } from "@/lib/content";

type ClassDetailPageProps = {
  content: ClassPageContent;
};

export function ClassDetailPage({ content }: ClassDetailPageProps) {
  return (
    <main>
      <section className="border-b border-line bg-gradient-to-br from-white via-red-50/60 to-blue-50/70">
        <div className="container-page grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div>
            <span className="inline-flex rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm shadow-stone-950/5">
              Tuyển sinh lớp {content.level}
            </span>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Frenchzone Academy
            </p>
            <h1 className="mt-4 max-w-full break-words text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              {content.pageTitle}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              {content.subtitle}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#registration" icon="message">
                {content.cta}
              </ButtonLink>
              <ButtonLink href="/#level-guide" variant="secondary">
                Chọn lớp phù hợp
              </ButtonLink>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-line bg-white/90 p-5 shadow-lg shadow-stone-950/10">
            <div className="rounded-[1.5rem] border border-line bg-gradient-to-br from-white to-stone-50 p-5">
              <p className="text-sm font-semibold text-muted">
                Thông tin lớp
              </p>
              <div className="mt-5 grid gap-3">
                {content.info.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4"
                  >
                    <span className="text-sm text-muted">{item.label}</span>
                    <span className="text-right text-sm font-bold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    Phù hợp với
                  </p>
                  <p className="mt-1 font-bold">{content.bestFor}</p>
                </div>
                <div className="rounded-2xl bg-red-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    Trọng tâm
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6">
                    {content.focus}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="container-page space-y-14 py-14 md:py-20">
        <CredibilityStats />

        <section className="rounded-[2rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Phù hợp nếu
          </p>
          <p className="mt-3 text-xl font-semibold leading-8">
            {content.positioning}
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <InfoList title="Lớp này dành cho" items={content.who} />
          <InfoList title="Sau khóa học, bạn sẽ" items={content.outcomes} />
        </section>

        <CTASection
          primaryHref="#registration"
          primaryLabel={content.cta}
          secondaryHref="/#registration"
          secondaryLabel="Nhắn mình để được tư vấn"
        />

        <LevelGuide />

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Cách lớp học diễn ra"
            title="Học gọn, rõ việc, có luyện thêm"
          />
          <div className="grid gap-4 md:grid-cols-4">
            {howClassesWork.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.5rem] border border-line bg-white p-5 shadow-sm shadow-stone-950/5"
              >
                <span className="text-sm font-bold text-primary">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <FrenchzoneSupport />
        <FeedbackSection />
        <TeacherIntro />
        <RegistrationForm
          sourcePage={`/${content.level.toLowerCase()}`}
          defaultTargetLevel={content.level}
          title={content.cta}
        />
        <FAQ />
      </div>
    </main>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-[2rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5 md:p-8">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7 text-muted">
            <CheckCircle2
              aria-hidden="true"
              className="mt-1 h-5 w-5 shrink-0 text-primary"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
