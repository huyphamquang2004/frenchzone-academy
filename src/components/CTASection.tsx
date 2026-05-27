import { ButtonLink } from "@/components/ButtonLink";

type CTASectionProps = {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title = "Chưa chắc nên học A1, A2 hay B1?",
  body = "Gửi mình trình độ hiện tại, mục tiêu học và lịch rảnh. Mình sẽ tư vấn lớp phù hợp trước khi bạn quyết định.",
  primaryHref = "#registration",
  primaryLabel = "Đăng ký tư vấn miễn phí",
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="rounded-[2rem] border border-red-100 bg-red-50/80 p-6 sm:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-primary-dark">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <ButtonLink href={primaryHref} icon="message">
            {primaryLabel}
          </ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
