type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : ""}>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-3 leading-7 text-muted ${
            isCentered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
