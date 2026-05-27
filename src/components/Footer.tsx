import Link from "next/link";

export function Footer() {
  const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL;

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-page grid gap-6 py-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-lg font-bold">Frenchzone Academy</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
            Lớp tiếng Pháp nhóm nhỏ A1, A2, B1 cùng Phạm Quang Huy. Online,
            có lộ trình rõ ràng, bài tập sau buổi học và hỗ trợ luyện thêm.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted md:items-end">
          <Link href="/a1" className="hover:text-primary">
            Lớp A1
          </Link>
          <Link href="/a2" className="hover:text-primary">
            Lớp A2
          </Link>
          <Link href="/b1" className="hover:text-primary">
            Lớp B1
          </Link>
          {zaloUrl ? (
            <a
              href={zaloUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary hover:text-primary-dark"
            >
              Nhắn Zalo trực tiếp
            </a>
          ) : (
            <span>Nếu form lỗi, nhắn Zalo trực tiếp cho mình.</span>
          )}
        </div>
      </div>
    </footer>
  );
}
