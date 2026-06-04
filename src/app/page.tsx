import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ClassFinderQuiz } from "@/components/ClassFinderQuiz";
import { CredibilityStats } from "@/components/CredibilityStats";
import { FAQ } from "@/components/FAQ";
import { FeedbackSection } from "@/components/FeedbackSection";
import { FrenchzoneSupport } from "@/components/FrenchzoneSupport";
import { LearningPathway } from "@/components/LearningPathway";
import { LevelGuide } from "@/components/LevelGuide";
import { RegistrationForm } from "@/components/RegistrationForm";
import { SectionHeading } from "@/components/SectionHeading";
import { TeacherIntro } from "@/components/TeacherIntro";
import {
  a1ClassSchedule,
  a1LearningFocus,
  a1SmallClassReasons,
  a1SuitableLearners,
  campaignHighlights,
  siteConfig,
} from "@/lib/content";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-line bg-stone-950">
        <Image
          src="/a1-campaign-hero.png"
          alt="Không gian học tiếng Pháp online với sách, vở và laptop"
          fill
          preload
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/92 to-white/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-background to-transparent" />

        <div className="container-page py-14 md:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-red-100 bg-white/90 px-4 py-2 text-sm font-bold text-primary shadow-sm shadow-stone-950/10 backdrop-blur">
              Khai giảng lớp A1
            </span>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Frenchzone Academy
            </p>
            <h1 className="mt-4 max-w-full break-words text-3xl font-black leading-tight tracking-tight text-primary-dark sm:text-5xl lg:text-6xl">
              Lớp tiếng Pháp A1 cho người mới bắt đầu / mất gốc
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Lớp nhóm nhỏ do Đức và Huy phụ trách, dành cho học viên muốn bắt
              đầu tiếng Pháp từ nền tảng. Học chậm mà chắc: phát âm, từ vựng,
              ngữ pháp cơ bản, phản xạ giao tiếp và bài tập ôn lại sau từng
              buổi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#registration" icon="message">
                Đăng ký tư vấn lớp A1
              </ButtonLink>
              <ButtonLink href="#class-schedule" variant="secondary">
                Xem lịch lớp đang mở
              </ButtonLink>
              <a
                href="https://fzone.site"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-100 bg-blue-50/90 px-5 py-2.5 text-sm font-bold text-accent transition hover:border-accent hover:bg-white"
              >
                Xem fzone.site
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-3 rounded-[1.75rem] border border-white/70 bg-white/88 p-4 shadow-lg shadow-stone-950/10 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {campaignHighlights.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.25rem] border border-line bg-white p-4"
              >
                <p className="text-2xl font-black tracking-tight text-primary-dark">
                  {item.value}
                </p>
                <p className="mt-1 text-sm font-bold text-foreground">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container-page space-y-16 py-14 md:space-y-20 md:py-20">
        <CredibilityStats />

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Đúng điểm bắt đầu"
            title="Lớp này dành cho ai?"
            body="A1 phù hợp nhất khi học viên cần một nền tảng rõ ràng, được sửa lỗi trực tiếp và có người theo sát từ những bước đầu."
          />
          <div className="grid gap-3 md:grid-cols-2">
            {a1SuitableLearners.map((item) => (
              <article
                key={item}
                className="flex gap-3 rounded-[1.25rem] border border-line bg-white p-5 shadow-sm shadow-stone-950/5"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                />
                <p className="leading-7 text-muted">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Nền tảng A1"
            title="Bạn sẽ học gì ở A1?"
            body="Nội dung được chia nhỏ để học viên hiểu bài thật sự, luyện lại được sau giờ học và có nền để tiếp tục lên A2/B1 hoặc ôn DELF/TCF sau này."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {a1LearningFocus.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.5rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5 ${
                  index === a1LearningFocus.length - 1
                    ? "lg:col-span-3"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-primary">
                  <BookOpenCheck aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-[2rem] border border-red-100 bg-gradient-to-br from-red-50 via-white to-blue-50 p-6 shadow-sm shadow-stone-950/5 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Vì sao lớp nhỏ quan trọng?
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Người mới cần được nghe, sửa và nhắc lại đúng lúc
            </h2>
            <p className="mt-4 leading-8 text-muted">
              Với người mới bắt đầu, một lỗi phát âm hoặc cách đặt câu sai có
              thể thành thói quen rất nhanh. Sĩ số nhỏ giúp học viên không học
              vẹt, không học lan man và giữ được động lực sau vài buổi đầu.
            </p>
          </div>
          <div className="grid gap-4">
            {a1SmallClassReasons.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-line bg-white p-5 shadow-sm shadow-stone-950/5"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <TeacherIntro />
        <FrenchzoneSupport />

        <section id="class-schedule" className="space-y-6 scroll-mt-24">
          <SectionHeading
            eyebrow="Lịch đang mở"
            title="Các lớp A1 hiện đang mở"
            body="Bạn có thể chọn lịch phù hợp hoặc ghi lịch rảnh khác trong form để Đức/Huy tư vấn thêm."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {a1ClassSchedule.map((item) => (
              <article
                key={`${item.days}-${item.time}-${item.teacher}`}
                className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-accent">
                    GV {item.teacher}
                  </span>
                  <GraduationCap
                    aria-hidden="true"
                    className="h-5 w-5 text-primary"
                  />
                </div>
                <div className="mt-6 grid gap-3">
                  <p className="flex items-center gap-3 text-lg font-bold">
                    <CalendarDays
                      aria-hidden="true"
                      className="h-5 w-5 text-primary"
                    />
                    {item.days}
                  </p>
                  <p className="flex items-center gap-3 text-muted">
                    <Clock3
                      aria-hidden="true"
                      className="h-5 w-5 text-accent"
                    />
                    {item.time}
                  </p>
                  <p className="flex items-center gap-3 text-muted">
                    <MapPin
                      aria-hidden="true"
                      className="h-5 w-5 text-accent"
                    />
                    Online hoặc offline tại Hà Nội
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="grid gap-4 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-5 md:grid-cols-[1fr_auto] md:items-center">
            <p className="leading-7 text-accent">
              Mỗi lớp chỉ khoảng 4–5 học viên nên số lượng sẽ được giới hạn để
              giáo viên có thể theo sát từng bạn.
            </p>
            <ButtonLink href="#registration" icon="message">
              Đăng ký tư vấn lịch học
            </ButtonLink>
          </div>
        </section>

        <FeedbackSection />

        <CTASection
          title="Muốn bắt đầu A1 nhưng chưa chắc lịch hoặc nền tảng hiện tại?"
          body="Để lại thông tin ngắn gọn. Đức hoặc Huy sẽ tư vấn lộ trình, lịch học phù hợp và kiểm tra trình độ đầu vào nếu cần."
          primaryHref="#registration"
          primaryLabel="Đăng ký tư vấn lớp A1"
          secondaryHref="#class-schedule"
          secondaryLabel="Xem lại lịch lớp"
        />

        <ClassFinderQuiz />

        <RegistrationForm sourcePage="/" defaultTargetLevel="A1" />

        <section id="level-guide" className="scroll-mt-24">
          <div className="mb-6 flex items-center gap-3 rounded-[1.5rem] border border-line bg-white p-5 shadow-sm shadow-stone-950/5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-primary">
              <Sparkles aria-hidden="true" className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">
                Lộ trình tiếp theo
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted">
                A1 là nền để học tiếp A2, B1 hoặc định hướng DELF/TCF sau này.
              </p>
            </div>
          </div>
          <LevelGuide />
        </section>

        <LearningPathway />

        <section className="grid gap-4 rounded-[2rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5 md:grid-cols-3 md:p-8">
          <div className="flex gap-3">
            <UsersRound
              aria-hidden="true"
              className="mt-1 h-5 w-5 shrink-0 text-primary"
            />
            <div>
              <h3 className="font-bold">Nhóm nhỏ</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Dễ hỏi bài, dễ được sửa lỗi và có người theo sát tiến độ.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <BookOpenCheck
              aria-hidden="true"
              className="mt-1 h-5 w-5 shrink-0 text-primary"
            />
            <div>
              <h3 className="font-bold">Tài liệu rõ ràng</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Có slides, bài tập và phần tổng hợp để học viên ôn lại.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle2
              aria-hidden="true"
              className="mt-1 h-5 w-5 shrink-0 text-primary"
            />
            <div>
              <h3 className="font-bold">Học chắc từ đầu</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Tập trung hiểu bài, dùng được kiến thức và giữ nhịp học.
              </p>
            </div>
          </div>
        </section>

        <FAQ />
      </div>
    </main>
  );
}
