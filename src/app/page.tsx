import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ClassCard } from "@/components/ClassCard";
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
  classCards,
  heroHighlights,
  howClassesWork,
  sharedClassInfo,
  siteConfig,
  whyFrenchzone,
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
  const queryLevel = "";

  return (
    <main>
      <section className="border-b border-line bg-gradient-to-br from-white via-red-50/60 to-blue-50/70">
        <div className="container-page grid gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
          <div>
            <span className="inline-flex rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm shadow-stone-950/5">
              Tuyển sinh A1 · A2 · B1
            </span>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Frenchzone Academy
            </p>
            <h1 className="mt-4 max-w-full break-words text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Lớp tiếng Pháp nhóm nhỏ, có lộ trình và có Frenchzone hỗ trợ học thêm
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Học A1, A2, B1 cùng Phạm Quang Huy. Lớp online 3–5 học viên,
              được tư vấn chọn lớp trước khi học và có bài luyện sau buổi học
              để giữ nhịp tiến bộ.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#registration" icon="message">
                Đăng ký tư vấn miễn phí
              </ButtonLink>
              <ButtonLink href="#level-guide" variant="secondary">
                Chọn lớp phù hợp
              </ButtonLink>
              <a
                href="https://fzone.site"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-bold text-accent transition hover:border-accent hover:bg-white"
              >
                Khám phá fzone.site
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-line bg-white/90 p-5 shadow-lg shadow-stone-950/10">
            <div className="rounded-[1.5rem] border border-line bg-gradient-to-br from-white to-stone-50 p-5">
              <p className="text-sm font-semibold text-muted">
                Tuyển sinh nhóm nhỏ online
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {classCards.map((item) => (
                  <div
                    key={item.level}
                    className="rounded-2xl border border-line bg-white p-4 text-center"
                  >
                    <p className="text-2xl font-black text-primary">
                      {item.level}
                    </p>
                    <p className="mt-2 text-xs font-semibold leading-5 text-muted">
                      {item.bestFor}
                    </p>
                  </div>
                ))}
              </div>
              <ul className="mt-6 grid gap-3">
                {[...heroHighlights, ...sharedClassInfo.slice(0, 2)].map(
                  (item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-primary"
                      />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page space-y-16 py-14 md:py-20">
        <CredibilityStats />

        <ClassFinderQuiz />

        <LearningPathway />

        <div id="level-guide">
          <LevelGuide />
        </div>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Chọn lớp phù hợp"
            title="A1, A2 và B1"
            body="Mỗi lớp có mục tiêu riêng, học phí rõ ràng và đều có tư vấn trước khi học."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {classCards.map((item) => (
              <ClassCard key={item.level} item={item} />
            ))}
          </div>
        </section>

        <CTASection
          title="Muốn biết mình nên bắt đầu từ đâu?"
          body="Gửi thông tin ngắn gọn, mình sẽ xem nền tảng hiện tại, mục tiêu học và gợi ý lớp phù hợp nhất."
        />

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Vì sao học ở đây"
            title="Cá nhân, nghiêm túc, học theo lộ trình rõ"
            body="Lớp được xây quanh việc học thật: hiểu trình độ hiện tại, học vừa sức, làm bài đều và có người theo sát."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {whyFrenchzone.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <FrenchzoneSupport />

        <FeedbackSection />

        <CTASection
          title="Sẵn sàng chọn lớp hoặc cần tư vấn trước?"
          body="Bạn không cần tự đoán trình độ. Form bên dưới giúp mình nắm nhanh nền tảng và mục tiêu để tư vấn đúng hơn."
          primaryHref="#registration"
          primaryLabel="Gửi thông tin tư vấn"
          secondaryHref="#level-guide"
          secondaryLabel="Xem lại các lớp"
        />

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Cách lớp học diễn ra"
            title="Từ tư vấn đầu vào đến luyện thêm sau buổi học"
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

        <TeacherIntro />
        <RegistrationForm
          key={queryLevel || "home-default"}
          sourcePage="/"
          defaultTargetLevel={"Chưa chắc"}
        />
        <FAQ />
      </div>
    </main>
  );
}
