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
              Học tiếng Pháp A1 từ đầu, chậm mà chắc
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Dành cho bạn mới học, mất gốc hoặc từng học nhưng chưa có hệ
              thống. Lớp nhóm nhỏ 4–5 học viên, học từ phát âm, câu cơ bản đến
              phản xạ giao tiếp đơn giản.
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
            body="Nếu bạn muốn học lại từ gốc và cần người sửa lỗi trực tiếp, đây là điểm bắt đầu phù hợp."
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
            eyebrow="Trong lớp"
            title="Bạn sẽ học gì?"
            body="Nội dung được chia nhỏ để học viên hiểu bài, luyện lại được và không bị quá tải."
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
              Lớp nhóm nhỏ
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Vì sao lớp chỉ 4–5 người?
            </h2>
            <p className="mt-4 leading-8 text-muted">
              Ở A1, phát âm và cách đặt câu rất dễ sai nếu không được sửa sớm.
              Lớp nhỏ giúp từng bạn có nhiều lượt nói hơn và không bị trôi sau
              vài buổi đầu.
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
            body="Bạn có thể chọn khung giờ gần với lịch của mình, hoặc ghi lịch rảnh khác trong form."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {a1ClassSchedule.map((item) => (
              <article
                key={`${item.days}-${item.time}-${item.teacher}`}
                className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-accent">
                    Người đứng lớp: {item.teacher}
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
              Số chỗ mỗi lớp được giữ nhỏ để buổi học có đủ thời gian sửa bài.
            </p>
            <ButtonLink href="#registration" icon="message">
              Đăng ký tư vấn lịch học
            </ButtonLink>
          </div>
        </section>

        <FeedbackSection />

        <CTASection
          title="Chưa chắc mình nên bắt đầu thế nào?"
          body="Để lại thông tin ngắn gọn, bọn mình sẽ nhắn lại để tư vấn lịch học và kiểm tra đầu vào nếu cần."
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
                Khi học chắc hơn, bạn có thể đi tiếp A2, B1 hoặc định hướng
                DELF/TCF.
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
                Dễ hỏi bài và có thêm lượt luyện nói.
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
                Có slides và phần tổng hợp để ôn lại.
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
                Hiểu bài, dùng được câu đã học và giữ nhịp.
              </p>
            </div>
          </div>
        </section>

        <FAQ />
      </div>
    </main>
  );
}
