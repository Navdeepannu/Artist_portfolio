import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-4xl tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
