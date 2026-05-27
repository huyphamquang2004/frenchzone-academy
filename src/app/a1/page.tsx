import type { Metadata } from "next";
import { ClassDetailPage } from "@/components/ClassDetailPage";
import { classPages } from "@/lib/content";

const content = classPages.A1;

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  openGraph: {
    title: content.metadata.title,
    description: content.metadata.description,
  },
};

export default function A1Page() {
  return <ClassDetailPage content={content} />;
}
