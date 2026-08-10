"use client";

import { motion } from "framer-motion";

export function AnimatedLine({
  orientation = "horizontal",
  className = "",
  delay = 0,
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
  delay?: number;
}) {
  const isHorizontal = orientation === "horizontal";

  return (
    <motion.div
      initial={{ scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transformOrigin: "left top",
      }}
      className={`bg-dark-teal/70 ${
        isHorizontal ? "h-px w-full" : "w-px h-full"
      } ${className}`}
    />
  );
}
