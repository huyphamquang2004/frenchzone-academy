import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_PAYLOAD_BYTES = 12_000;
const TARGET_LEVELS = new Set(["A1", "A2", "B1", "Chưa chắc"]);
const PREFERENCES = new Set(["Lớp nhóm", "1-1", "Chưa chắc"]);

type Lead = {
  fullName: string;
  phoneOrZalo: string;
  email: string;
  targetLevel: string;
  currentLevel: string;
  learningGoal: string;
  availableTime: string;
  preference: string;
  notes: string;
  sourcePage: string;
  submittedAt: string;
};

export async function POST(request: Request) {
  const contentLength = request.headers.get("content-length");
  if (contentLength && Number(contentLength) > MAX_PAYLOAD_BYTES) {
    return NextResponse.json(
      { message: "Payload is too large." },
      { status: 413 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const measuredSize = new TextEncoder().encode(JSON.stringify(body)).length;
  if (measuredSize > MAX_PAYLOAD_BYTES) {
    return NextResponse.json(
      { message: "Payload is too large." },
      { status: 413 },
    );
  }

  if (!isRecord(body)) {
    return NextResponse.json(
      { message: "Invalid lead payload." },
      { status: 400 },
    );
  }

  if (sanitizeText(body.honeypot, 80)) {
    return NextResponse.json(
      { message: "Spam submission rejected." },
      { status: 400 },
    );
  }

  const lead: Lead = {
    fullName: sanitizeText(body.fullName, 120),
    phoneOrZalo: sanitizeText(body.phoneOrZalo, 80),
    email: sanitizeText(body.email, 160),
    targetLevel: sanitizeText(body.targetLevel, 20),
    currentLevel: sanitizeText(body.currentLevel, 600),
    learningGoal: sanitizeText(body.learningGoal, 600),
    availableTime: sanitizeText(body.availableTime, 300),
    preference: sanitizeText(body.preference, 20),
    notes: sanitizeText(body.notes, 800),
    sourcePage: sanitizeText(body.sourcePage, 80) || "unknown",
    submittedAt: new Date().toISOString(),
  };

  const validationError = validateLead(lead);
  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  const summary = buildLeadSummary(lead);

  try {
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      await sendTelegramMessage(summary);
      return NextResponse.json({ ok: true });
    }

    if (process.env.LEAD_WEBHOOK_URL) {
      await sendWebhook(lead, summary);
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { message: "Lead delivery is not configured." },
      { status: 500 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Lead delivery failed. Please try again.",
      },
      { status: 502 },
    );
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function sanitizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function validateLead(lead: Lead) {
  if (!lead.fullName) return "fullName is required.";
  if (!lead.phoneOrZalo) return "phoneOrZalo is required.";
  if (!TARGET_LEVELS.has(lead.targetLevel)) return "targetLevel is invalid.";
  if (!lead.currentLevel) return "currentLevel is required.";
  if (!lead.learningGoal) return "learningGoal is required.";
  if (!lead.availableTime) return "availableTime is required.";
  if (!PREFERENCES.has(lead.preference)) return "preference is invalid.";

  return "";
}

function buildLeadSummary(lead: Lead) {
  return [
    "Lead mới - Frenchzone Academy",
    `Thời gian: ${lead.submittedAt}`,
    `Trang: ${lead.sourcePage}`,
    "",
    `Họ tên: ${lead.fullName}`,
    `Điện thoại/Zalo: ${lead.phoneOrZalo}`,
    `Email: ${lead.email || "Không có"}`,
    `Lớp quan tâm: ${lead.targetLevel}`,
    `Hình thức ưu tiên: ${lead.preference}`,
    "",
    `Trình độ hiện tại: ${lead.currentLevel}`,
    `Mục tiêu học: ${lead.learningGoal}`,
    `Lịch rảnh: ${lead.availableTime}`,
    `Ghi chú: ${lead.notes || "Không có"}`,
  ].join("\n");
}

async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Telegram delivery is not configured.");
  }

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    },
  );

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(
      `Telegram delivery failed: ${response.status} ${responseText.slice(0, 200)}`,
    );
  }
}

async function sendWebhook(lead: Lead, summary: string) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("Webhook delivery is not configured.");
  }

  let url: URL;
  try {
    url = new URL(webhookUrl);
  } catch {
    throw new Error("LEAD_WEBHOOK_URL is invalid.");
  }

  if (!["https:", "http:"].includes(url.protocol)) {
    throw new Error("LEAD_WEBHOOK_URL must use http or https.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lead, summary }),
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(
      `Webhook delivery failed: ${response.status} ${responseText.slice(0, 200)}`,
    );
  }
}
