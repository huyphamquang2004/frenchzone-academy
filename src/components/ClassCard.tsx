import { GraduationCap } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import type { ClassCardContent } from "@/lib/content";

type ClassCardProps = {
  item: ClassCardContent;
};

export function ClassCard({ item }: ClassCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-line bg-card p-6 shadow-sm shadow-stone-950/5 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md hover:shadow-red-900/10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-primary">
          <GraduationCap aria-hidden="true" className="h-6 w-6" />
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-accent">
          {item.level}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-bold tracking-tight">{item.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-muted">{item.description}</p>
      <div className="mt-6 grid gap-3">
        <div className="rounded-2xl bg-stone-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Phù hợp với
          </p>
          <p className="mt-1 font-bold">{item.bestFor}</p>
        </div>
        <div className="rounded-2xl bg-blue-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Trọng tâm
          </p>
          <p className="mt-1 text-sm font-semibold leading-6 text-foreground">
            {item.focus}
          </p>
        </div>
        <div className="rounded-2xl bg-red-50 p-4">
          <p className="text-sm text-muted">Học phí</p>
          <p className="mt-1 text-2xl font-bold text-primary-dark">
            {item.price}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <ButtonLink href={item.href} variant="secondary">
          Xem chi tiết
        </ButtonLink>
      </div>
    </article>
  );
}
