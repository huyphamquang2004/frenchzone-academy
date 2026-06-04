"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Send } from "lucide-react";
import type { LevelKey } from "@/lib/content";
import { contactMethods } from "@/lib/content";

type FormState = {
  fullName: string;
  phoneOrZalo: string;
  email: string;
  targetLevel: LevelKey | "Chưa chắc";
  currentLevel: string;
  learningGoal: string;
  availableTime: string;
  preference: "Lớp nhóm" | "1-1" | "Chưa chắc";
  notes: string;
  honeypot: string;
};

type RegistrationFormProps = {
  sourcePage: string;
  defaultTargetLevel?: LevelKey | "Chưa chắc";
  title?: string;
  intro?: string;
};

const initialState = (
  defaultTargetLevel: LevelKey | "Chưa chắc" = "A1",
): FormState => ({
  fullName: "",
  phoneOrZalo: "",
  email: "",
  targetLevel: defaultTargetLevel,
  currentLevel: "",
  learningGoal: "",
  availableTime: "",
  preference: "Lớp nhóm",
  notes: "",
  honeypot: "",
});

export function RegistrationForm({
  sourcePage,
  defaultTargetLevel = "A1",
  title = "Đăng ký tư vấn lớp A1",
  intro = "Để lại thông tin, bọn mình sẽ nhắn lại để tư vấn lịch học, lộ trình và kiểm tra đầu vào nếu cần.",
}: RegistrationFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(() =>
    initialState(defaultTargetLevel),
  );
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const zaloUrl = process.env.NEXT_PUBLIC_ZALO_URL;
  const submitLabel =
    defaultTargetLevel === "A2"
      ? "Đăng ký tư vấn lớp A2"
      : defaultTargetLevel === "B1"
        ? "Đăng ký tư vấn lớp B1"
        : "Đăng ký tư vấn lớp A1";

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.fullName.trim()) {
      setError("Bạn vui lòng nhập họ tên.");
      return;
    }
    if (!form.phoneOrZalo.trim()) {
      setError("Bạn vui lòng nhập số điện thoại hoặc Zalo.");
      return;
    }
    if (!form.currentLevel.trim()) {
      setError("Bạn vui lòng mô tả trình độ hiện tại.");
      return;
    }
    if (!form.learningGoal.trim()) {
      setError("Bạn vui lòng nhập mục tiêu học.");
      return;
    }
    if (!form.availableTime.trim()) {
      setError("Bạn vui lòng nhập lịch rảnh dự kiến.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sourcePage }),
      });
      const data = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(data?.message || "Không gửi được form.");
      }

      setSuccess("Đã gửi thông tin. Đang chuyển sang trang cảm ơn...");
      router.push("/thank-you");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Không gửi được form. Bạn vui lòng thử lại.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="registration"
      className="rounded-[2rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5 sm:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Đăng ký
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 leading-7 text-muted">{intro}</p>

          <div className="mt-6 grid gap-3">
            {contactMethods.map((contact) => (
              <div
                key={contact.value}
                className="rounded-[1.25rem] border border-line bg-stone-50 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {contact.label}
                </p>
                <p className="mt-2 flex items-center gap-2 text-lg font-black text-primary-dark">
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  {contact.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-red-50 p-4 text-sm leading-6 text-primary-dark">
            {zaloUrl ? (
              <a
                href={zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-red-300 underline-offset-4"
              >
                Nếu form lỗi, nhắn Zalo trực tiếp qua liên kết đã cấu hình.
              </a>
            ) : (
              <span>
                Nếu form lỗi, nhắn Zalo trực tiếp theo số điện thoại ở trên.
              </span>
            )}
          </div>
        </div>

        <form className="grid gap-4" onSubmit={onSubmit}>
          <label className="hidden" aria-hidden="true">
            Website
            <input
              tabIndex={-1}
              autoComplete="off"
              value={form.honeypot}
              onChange={(event) => updateField("honeypot", event.target.value)}
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Họ tên" required>
              <input
                className="field-input"
                value={form.fullName}
                onChange={(event) =>
                  updateField("fullName", event.target.value)
                }
                autoComplete="name"
                required
              />
            </Field>
            <Field label="Số điện thoại hoặc Zalo" required>
              <input
                className="field-input"
                value={form.phoneOrZalo}
                onChange={(event) =>
                  updateField("phoneOrZalo", event.target.value)
                }
                autoComplete="tel"
                required
              />
            </Field>
          </div>

          <Field label="Email">
            <input
              className="field-input"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              autoComplete="email"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Bạn muốn học lớp nào?" required>
              <select
                className="field-input"
                value={form.targetLevel}
                onChange={(event) =>
                  updateField(
                    "targetLevel",
                    event.target.value as FormState["targetLevel"],
                  )
                }
                required
              >
                <option>A1</option>
                <option>A2</option>
                <option>B1</option>
                <option>Chưa chắc</option>
              </select>
            </Field>
            <Field label="Hình thức ưu tiên" required>
              <select
                className="field-input"
                value={form.preference}
                onChange={(event) =>
                  updateField(
                    "preference",
                    event.target.value as FormState["preference"],
                  )
                }
                required
              >
                <option>Lớp nhóm</option>
                <option>1-1</option>
                <option>Chưa chắc</option>
              </select>
            </Field>
          </div>

          <Field label="Trình độ hiện tại" required>
            <textarea
              className="field-input min-h-24"
              value={form.currentLevel}
              onChange={(event) =>
                updateField("currentLevel", event.target.value)
              }
              placeholder="Ví dụ: chưa học bao giờ, từng học nhưng mất gốc, đang học ở trường..."
              required
            />
          </Field>

          <Field label="Mục tiêu học" required>
            <textarea
              className="field-input min-h-24"
              value={form.learningGoal}
              onChange={(event) =>
                updateField("learningGoal", event.target.value)
              }
              placeholder="Ví dụ: học chắc từ đầu, củng cố kiến thức ở trường, chuẩn bị nền A1–A2..."
              required
            />
          </Field>

          <Field label="Lịch rảnh dự kiến" required>
            <input
              className="field-input"
              value={form.availableTime}
              onChange={(event) =>
                updateField("availableTime", event.target.value)
              }
              placeholder="Ví dụ: muốn học Thứ 2/4 19h00, Thứ 3/7 15h00 hoặc ghi lịch rảnh khác…"
              required
            />
          </Field>

          <Field label="Ghi chú thêm">
            <textarea
              className="field-input min-h-24"
              value={form.notes}
              onChange={(event) => updateField("notes", event.target.value)}
              placeholder="Bạn có thể ghi thêm câu hỏi, hình thức học mong muốn hoặc thông tin phụ huynh cần trao đổi."
            />
          </Field>

          {error ? (
            <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
              {error}
            </p>
          ) : null}
          {success ? (
            <p className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800">
              {success}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send aria-hidden="true" className="h-4 w-4" />
            {isSubmitting ? "Đang gửi..." : submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      <span>
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
