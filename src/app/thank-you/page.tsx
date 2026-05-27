import Link from "next/link";
import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cảm ơn bạn đã đăng ký — Frenchzone Academy",
  description:
    "Frenchzone Academy đã nhận được thông tin đăng ký tư vấn lớp tiếng Pháp.",
};

export default function ThankYouPage() {
  const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL;

  return (
    <main className="container-page flex min-h-[65vh] items-center py-14">
      <section className="w-full rounded-[2rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5 sm:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Đã gửi thông tin
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Cảm ơn bạn đã đăng ký
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Mình đã nhận được thông tin của bạn. Mình sẽ liên hệ lại để hỏi
            thêm về mục tiêu học và tư vấn xem bạn phù hợp với A1, A2 hay B1.
          </p>
          <p className="mt-4 leading-7 text-muted">
            Nếu cần gấp, bạn có thể nhắn mình qua Zalo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Quay lại trang chủ
            </Link>
            {zaloUrl ? (
              <a
                href={zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Nhắn mình để được tư vấn
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
