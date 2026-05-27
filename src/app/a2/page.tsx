import type { Metadata } from "next";
import { ClassDetailPage } from "@/components/ClassDetailPage";
import { classPages } from "@/lib/content";

const content = classPages.A2;

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  openGraph: {
    title: content.metadata.title,
    description: content.metadata.description,
  },
};

export default function A2Page() {
  return <ClassDetailPage content={content} />;
}
