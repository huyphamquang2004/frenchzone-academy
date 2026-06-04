import { CalendarDays, CheckCircle2, Clock3, GraduationCap } from "lucide-react";
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
import { a1ClassSchedule, howClassesWork } from "@/lib/content";

type ClassDetailPageProps = {
  content: ClassPageContent;
};

export function ClassDetailPage({ content }: ClassDetailPageProps) {
  const isA1 = content.level === "A1";

  return (
    <main>
      <section className="border-b border-line bg-gradient-to-br from-white via-red-50/60 to-blue-50/70">
        <div className="container-page grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div>
            <span className="inline-flex rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm shadow-stone-950/5">
              {isA1 ? "Khai giảng lớp A1" : `Tuyển sinh lớp ${content.level}`}
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
              <ButtonLink
                href={isA1 ? "/#class-schedule" : "/#level-guide"}
                variant="secondary"
              >
                {isA1 ? "Xem lịch lớp A1" : "Xem lộ trình tiếp theo"}
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
        {isA1 ? <CredibilityStats /> : null}

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

        {isA1 ? <A1SchedulePreview /> : null}

        <CTASection
          title={
            isA1
              ? "Muốn học A1 nhưng chưa chắc lịch nào phù hợp?"
              : `Cần tư vấn lớp ${content.level}?`
          }
          body={
            isA1
              ? "Đức hoặc Huy sẽ tư vấn lộ trình, lịch học và kiểm tra trình độ đầu vào nếu cần."
              : "Gửi thông tin ngắn gọn để được tư vấn lớp phù hợp với nền tảng và mục tiêu hiện tại."
          }
          primaryHref="#registration"
          primaryLabel={content.cta}
          secondaryHref={isA1 ? "/#class-schedule" : "/#registration"}
          secondaryLabel={isA1 ? "Xem lịch lớp A1" : "Nhắn để được tư vấn"}
        />

        <LevelGuide />

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Cách lớp học diễn ra"
            title={
              isA1
                ? "Từ tư vấn đầu vào đến ôn lại sau buổi học"
                : "Học gọn, rõ việc, có luyện thêm"
            }
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

function A1SchedulePreview() {
  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="Lịch đang mở"
        title="Các khung giờ A1 có thể đăng ký"
        body="Lịch cụ thể sẽ được chốt theo nhu cầu của lớp. Mỗi lớp chỉ khoảng 4–5 học viên để giáo viên theo sát từng bạn."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {a1ClassSchedule.map((item) => (
          <article
            key={`${item.days}-${item.time}-${item.teacher}`}
            className="rounded-[1.5rem] border border-line bg-white p-5 shadow-sm shadow-stone-950/5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-accent">
                GV {item.teacher}
              </span>
              <GraduationCap aria-hidden="true" className="h-5 w-5 text-primary" />
            </div>
            <p className="mt-5 flex items-center gap-3 font-bold">
              <CalendarDays aria-hidden="true" className="h-5 w-5 text-primary" />
              {item.days}
            </p>
            <p className="mt-3 flex items-center gap-3 text-muted">
              <Clock3 aria-hidden="true" className="h-5 w-5 text-accent" />
              {item.time}
            </p>
          </article>
        ))}
      </div>
    </section>
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
