"use client";

import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className = "",
  as = "div",
  style,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span";
  style?: CSSProperties;
}) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}

export function RevealGroup({
  children,
  stagger = 0.08,
  className = "",
}: {
  children: ReactNode;
  stagger?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  y = 16,
  className = "",
  style,
}: {
  children: ReactNode;
  y?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
