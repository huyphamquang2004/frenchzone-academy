"use client";

import { useMemo, useState } from "react";
import { ChevronRight, RefreshCcw } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import {
  classFinderQuiz,
  type QuizLevel,
  type QuizResultState,
} from "@/lib/content";

type QuizResult = {
  state: QuizResultState;
  level?: QuizLevel;
  title: string;
  body: string;
  cta: string;
};

export function ClassFinderQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const result = useMemo<QuizResult | null>(() => {
    if (answersCount(answers) < classFinderQuiz.questions.length) {
      return null;
    }

    const tally: Record<QuizLevel, number> = {
      A1: 0,
      A2: 0,
      B1: 0,
    };
    const selectedStates = new Set<QuizResultState>();

    classFinderQuiz.questions.forEach((question) => {
      const value = answers[question.id];

      if (!value) {
        return;
      }

      const mappedLevel = classFinderQuiz.optionToLevel[value];
      if (mappedLevel === "UNCERTAIN") {
        selectedStates.add("UNCERTAIN");
        return;
      }

      if (mappedLevel) {
        selectedStates.add(mappedLevel);
        tally[mappedLevel] += 1;
      }
    });

    if (selectedStates.has("UNCERTAIN")) {
      return classFinderQuiz.results.UNCERTAIN;
    }

    const sorted = Object.entries(tally)
      .map(([key, value]) => ({ key: key as QuizLevel, value }))
      .sort((a, b) => b.value - a.value);

    const top = sorted[0];
    const runnerUp = sorted[1];

    if (!top || top.value === 0) {
      return classFinderQuiz.results.UNCERTAIN;
    }

    if (top.value === runnerUp.value) {
      return classFinderQuiz.results.UNCERTAIN;
    }

    const levelResult = classFinderQuiz.results[top.key];
    return {
      state: top.key,
      level: top.key,
      title: levelResult.title,
      body: levelResult.body,
      cta: levelResult.cta,
    };
  }, [answers]);

  const allAnswered = answersCount(answers) === classFinderQuiz.questions.length;

  function selectAnswer(questionId: string, value: string) {
    setAnswers((current) => ({ ...current, [questionId]: value }));
  }

  function resetQuiz() {
    setAnswers({});
  }

  return (
    <section className="rounded-[2rem] border border-line bg-white p-6 shadow-sm shadow-stone-950/5 md:p-8">
      <SectionHeading
        eyebrow="Mini quiz"
        title={classFinderQuiz.title}
        body={classFinderQuiz.subtitle}
      />

      <div className="mt-8 space-y-8">
        {classFinderQuiz.questions.map((question) => (
          <div
            key={question.id}
            className="rounded-[1.5rem] border border-line bg-gradient-to-br from-white to-stone-50 p-5"
          >
            <p className="text-sm font-semibold text-muted">{question.title}</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {question.options.map((option) => {
                const isActive = answers[question.id] === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectAnswer(question.id, option)}
                    className={`inline-flex min-h-11 items-center justify-start rounded-2xl border px-4 py-2 text-left text-sm font-semibold transition ${
                      isActive
                        ? "border-primary bg-red-50 text-primary"
                        : "border-line bg-white text-foreground hover:bg-stone-50"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7">
        {!allAnswered ? (
          <p className="rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-accent">
            Hãy chọn một đáp án cho cả 3 câu, mình sẽ gợi ý lớp phù hợp.
          </p>
        ) : null}

        {result ? (
          <article className="mt-4 rounded-[1.5rem] border border-line bg-gradient-to-br from-red-50/60 to-white p-5 shadow-sm shadow-stone-950/5">
            <h3 className="text-xl font-black tracking-tight text-primary-dark">
              {result.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">{result.body}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={result.level
                  ? `/?level=${result.level}#registration`
                  : "/#registration"}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary-dark"
              >
                {result.cta}
                <ChevronRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={resetQuiz}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-muted transition hover:border-primary hover:text-primary"
              >
                <RefreshCcw aria-hidden="true" className="h-4 w-4" />
                Làm lại
              </button>
            </div>
          </article>
        ) : null}
      </div>
    </section>
  );
}

function answersCount(answers: Record<string, string>) {
  return Object.values(answers).filter(Boolean).length;
}
