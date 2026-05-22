import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-primary" />
          <span className={`font-sans-pro text-xs font-semibold uppercase tracking-[0.25em] ${invert ? "text-clay" : "text-primary"}`}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`mt-4 font-display text-3xl font-bold leading-[1.05] text-balance sm:text-4xl lg:text-5xl ${invert ? "text-cream" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-pretty text-base leading-relaxed sm:text-lg ${invert ? "text-cream/75" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
