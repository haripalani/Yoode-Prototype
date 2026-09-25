import React from "react";

interface SectionHeaderProps {
  subHeading?: string;
  title: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  subHeading,
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
  descriptionClassName = "text-gray-500",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {subHeading && (
        <h4 className="text-[#E53935] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3">
          {subHeading}
        </h4>
      )}
      <h2
        className={`text-3xl md:text-5xl font-display font-black tracking-tight text-yoode-onyx ${
          description ? "mb-4 md:mb-6" : ""
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {description && <p className={`text-lg ${descriptionClassName}`}>{description}</p>}
    </div>
  );
}
