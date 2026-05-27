import { BookOpenCheck } from "lucide-react";
import { frenchzoneSupport } from "@/lib/content";

export function FrenchzoneSupport() {
  return (
    <section className="grid gap-6 rounded-[2rem] bg-stone-900 p-6 text-white md:grid-cols-[1fr_0.8fr] md:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-200">
          Frenchzone hỗ trợ
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Có luyện thêm sau buổi học
        </h2>
        <p className="mt-4 leading-8 text-stone-200">{frenchzoneSupport}</p>
      </div>
      <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
        <BookOpenCheck aria-hidden="true" className="h-9 w-9 text-red-200" />
        <p className="mt-6 text-lg font-semibold">
          Sau mỗi buổi học, học viên biết mình cần luyện tiếp phần nào.
        </p>
        <p className="mt-3 text-sm leading-6 text-stone-300">
          Đây là lợi thế của lớp nhóm nhỏ: bài học trên lớp và hoạt động tự học
          đi cùng nhau, không tách rời.
        </p>
      </div>
    </section>
  );
}
