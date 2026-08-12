"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function parseValue(raw: string) {
  const match = raw.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return { prefix: "", number: null, suffix: raw };
  const [, prefix, number, suffix] = match;
  return { prefix, number: Number(number), suffix };
}

export function CountUpNumber({
  value,
  duration = 1.1,
}: {
  value: string;
  duration?: number;
}) {
  const { prefix, number, suffix } = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || number === null || started.current) return;
    started.current = true;

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      setDisplay(Math.round(number * easeOutCubic(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, number, duration]);

  if (number === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
