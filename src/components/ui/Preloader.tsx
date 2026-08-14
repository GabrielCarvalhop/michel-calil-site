"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const easing = [0.16, 1, 0.3, 1] as const;

// how long the logo stays on screen once it has actually loaded, so the
// glow/blur-in animation always gets to play even on a fast connection
const MIN_DISPLAY_MS = 900;
// hard cap — if the image somehow never fires load/error (offline,
// blocked request, etc.) the preloader still releases the site
const MAX_WAIT_MS = 4500;

export function Preloader() {
  const [imageReady, setImageReady] = useState(false);
  const [minTimeDone, setMinTimeDone] = useState(false);
  const [visible, setVisible] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    const minTimer = setTimeout(
      () => setMinTimeDone(true),
      reduced ? 200 : MIN_DISPLAY_MS
    );
    // fail-safe: never block the site indefinitely if the image request
    // stalls (slow/offline mobile network)
    const maxTimer = setTimeout(() => {
      setImageReady(true);
      setMinTimeDone(true);
    }, MAX_WAIT_MS);
    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, [reduced]);

  useEffect(() => {
    if (imageReady && minTimeDone) setVisible(false);
  }, [imageReady, minTimeDone]);

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
            animate={
              imageReady
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0.3 }
            }
            transition={{ duration: reduced ? 0.3 : 1.3, ease: easing }}
          >
            <Image
              src="/images/brand/logo-full-mint.png"
              alt="Michel Calil Abrão Neto"
              width={240}
              height={240}
              priority
              unoptimized
              onLoad={() => setImageReady(true)}
              onError={() => setImageReady(true)}
              className="h-auto w-[150px] md:w-[210px] animate-logo-pulse-intense"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
