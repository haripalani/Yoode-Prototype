import React from "react";

interface SectionHeaderProps {
  subHeading?: string;
  title: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subHeadingClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  subHeading,
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
  subHeadingClassName = "",
  descriptionClassName = "text-xmas-ink/60",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {subHeading && (
        <h4 className={`inline-flex items-center gap-2 text-xmas-red text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3 ${subHeadingClassName}`}>
          <span aria-hidden="true" className="text-xmas-gold-deep">✦</span>
          {subHeading}
          <span aria-hidden="true" className="text-xmas-gold-deep">✦</span>
        </h4>
      )}
      <h2
        className={`text-3xl md:text-5xl font-display font-black tracking-tight text-xmas-ink ${
          description ? "mb-4 md:mb-6" : ""
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {description && <p className={`text-lg ${descriptionClassName}`}>{description}</p>}
    </div>
  );
}
