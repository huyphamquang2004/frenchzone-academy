export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)] md:hidden">
      <a
        href="#registration"
        className="mx-3 mb-3 inline-flex min-h-12 w-[calc(100%-1.5rem)] items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-stone-950/20 transition hover:bg-primary-dark"
      >
        Đăng ký tư vấn miễn phí
      </a>
    </div>
  );
}
