"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Image that drifts vertically as its container scrolls through the viewport. */
export function ParallaxImage({ src, alt = "", className = "", strength = 80 }: { src: string; alt?: string; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} style={{ y, scale: 1.3 }} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
}

export function Reveal({ children, delay = 0, x = 0, className = "" }: { children: React.ReactNode; delay?: number; x?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
