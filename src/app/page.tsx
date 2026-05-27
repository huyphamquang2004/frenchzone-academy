import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ClassCard } from "@/components/ClassCard";
import { FAQ } from "@/components/FAQ";
import { FrenchzoneSupport } from "@/components/FrenchzoneSupport";
import { RegistrationForm } from "@/components/RegistrationForm";
import { TeacherIntro } from "@/components/TeacherIntro";
import {
  classCards,
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
  return (
    <main>
      <section className="border-b border-line bg-white">
        <div className="container-page grid gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Frenchzone Academy
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Lớp tiếng Pháp A1, A2, B1 cùng Frenchzone Academy
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Học theo nhóm nhỏ, có lộ trình rõ ràng, có bài tập sau buổi học
              và hệ thống Frenchzone hỗ trợ luyện thêm.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#registration" icon="message">
                Đăng ký tư vấn miễn phí
              </ButtonLink>
              <ButtonLink href="/a1" variant="secondary">
                Xem lớp A1
              </ButtonLink>
              <ButtonLink href="/a2" variant="secondary">
                Xem lớp A2
              </ButtonLink>
              <ButtonLink href="/b1" variant="secondary">
                Xem lớp B1
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-line bg-background p-5 shadow-sm shadow-stone-950/5">
            <div className="rounded-[1.5rem] bg-white p-5">
              <p className="text-sm font-semibold text-muted">
                Tuyển sinh nhóm nhỏ
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {classCards.map((item) => (
                  <div
                    key={item.level}
                    className="rounded-2xl border border-line bg-stone-50 p-4 text-center"
                  >
                    <p className="text-2xl font-black text-primary">
                      {item.level}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-muted">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
              <ul className="mt-6 grid gap-3">
                {sharedClassInfo.slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-primary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page space-y-16 py-14 md:py-20">
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

        <CTASection />

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
                className="rounded-2xl border border-line bg-white p-6"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Cách lớp học diễn ra"
            title="Từ tư vấn đầu vào đến luyện thêm sau buổi học"
          />
          <div className="grid gap-4 md:grid-cols-4">
            {howClassesWork.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-line bg-white p-5"
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
        <TeacherIntro />
        <RegistrationForm sourcePage="/" />
        <FAQ />
      </div>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">{title}</h2>
      {body ? <p className="mt-3 max-w-2xl leading-7 text-muted">{body}</p> : null}
    </div>
  );
}
