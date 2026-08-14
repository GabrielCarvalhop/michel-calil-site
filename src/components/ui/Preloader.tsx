"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const easing = [0.16, 1, 0.3, 1] as const;

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    const total = reduced ? 500 : 2000;
    const timer = setTimeout(() => setVisible(false), total);
    return () => clearTimeout(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.2 : 0.65, ease: easing }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-near-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.06, filter: "blur(22px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: reduced ? 0.3 : 1.3, ease: easing }}
          >
            <Image
              src="/images/brand/logo-full-mint.png"
              alt="Michel Calil Abrão Neto"
              width={240}
              height={240}
              priority
              className="h-auto w-[150px] md:w-[210px] animate-logo-pulse-intense"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
