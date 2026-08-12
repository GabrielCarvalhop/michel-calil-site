"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Metric({
  value,
  label,
  detail,
  valueClassName = "text-5xl md:text-6xl text-off-white",
}: {
  value: string;
  label: string;
  detail?: string;
  valueClassName?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`font-heading font-medium tracking-tight ${valueClassName}`}
      >
        {reduced ? (
          value
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {value}
          </motion.span>
        )}
      </div>
      <div className="mt-2 text-xs md:text-[13px] uppercase tracking-[0.16em] text-off-white/80">
        {label}
      </div>
      {detail ? (
        <div className="mt-1 text-xs text-muted">{detail}</div>
      ) : null}
    </motion.div>
  );
}
